import dataProvider from '../../models/data-provider'
import genPages from './genPages'
import parseBookFile from './parseBookFile'
import { queryBoolean, validateNonNullOptions } from '../utils'
import md5 from 'md5'
import { Types } from 'mongoose'
import pipeline from '../../../utils/pipeline'
import _ from 'lodash'

/**
 * validate options | options -> options
 * convert options  | options -> options
 * doQuery          | options -> docoment
 * parseResult      | document -> finalResult
 */

const mapMimetypeToFileType = (mimetype) => {
  if (mimetype === 'application/epub+zip') {
    return 'epub'
  } else if (mimetype === 'text/plain') {
    return 'txt'
  }
  return
}

export interface BookOptions {
  id: string
  includeToc?: boolean
  includePages?: boolean
  includeRaw?: boolean

  // render config
  pageHeight?: number
  width?: number
  fontSize?: number
  lineHeight?: number
}

export type Book = {
  [key: string]: any
  fileType
  rawContent?
  toc?
  pages?
}

const parseBookFileMemoized = _.memoize(parseBookFile, (bookId) => bookId)
const genPagesMemoized = _.memoize(genPages, (config) => md5(JSON.stringify(_.omit(config, ['sections']))))

export const convert = (_options: BookOptions) => {
  return {
    ..._options,
    includePages: queryBoolean(_options.includePages),
    includeRaw: queryBoolean(_options.includeRaw),
    includeToc: queryBoolean(_options.includeToc),
    pageHeight: Number(_options.pageHeight),
    fontSize: Number(_options.fontSize),
    lineHeight: Number(_options.lineHeight),
    width: Number(_options.width)
  }
}

export const validateId = (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    return Promise.reject(new Error('Invalid id!'))
  }
  return Promise.resolve(id)
}

export const validateOptions = (_options: BookOptions) => {
  const nonNullFieldList = ['pageHeight', 'width', 'fontSize', 'lineHeight']

  if (_options.includePages) {
    const validateErr = validateNonNullOptions(_options, nonNullFieldList)

    if (validateErr) {
      return Promise.reject(validateErr)
    }
    return _options
  }
  return _options
}

export const doQuery = (_options: BookOptions) => {
  return dataProvider.Book
    .findById(_options.id)
    .populate('file authors')
    .then(async result => {
      // todo: notfound
      if (!result) {
        return Promise.reject(new Error('Book not found!'))
      }
      return { result, options: _options }
    })
}

export const handleResult = async ({ result, options: _options }: { result; options: BookOptions }) => {
  const _result = result.toObject()
  const file = _result['file'] || {}
  const fileType = mapMimetypeToFileType(file.mimetype)
  const { includePages, includeRaw, includeToc, id, pageHeight, fontSize, lineHeight, width } = _options

  if (includeToc || includeRaw || includePages) {
    // parse book file
    const parsedFile = await parseBookFileMemoized(id, {
      buffer: file.content.buffer,
      fileType
    })

    const rawContent = includeRaw && parsedFile || undefined
    const toc = includeToc && parsedFile.structure || undefined

    // generate pages
    const pages = includePages && await genPagesMemoized({
      pageHeight,
      lineHeight,
      fontSize,
      width,
      bookId: id,
      sections: parsedFile.sections,
      defaultFirstSectionHTML: `
          <br/>
          <br/>
          <br/>
          <h1>${parsedFile.info.title}</h1>
          <p>${parsedFile.info.author}</p>
        `
    })
    return {
      ..._.omit(_result, 'file'),
      fileType,
      rawContent,
      toc,
      pages
    } as Book
  }

  return {
    ..._.omit(_result, 'file'),
    fileType
  }
}

export default async function findBook(options: BookOptions): Promise<Book> {
  if (process.env.NODE_ENV !== 'production') {
    console.time('api:findBooks')
  }

  const tasks = [
    convert,
    (_options) => validateId(_options.id).then(() => _options),
    validateOptions,
    doQuery,
    handleResult
  ]
  const result = pipeline(tasks, options)

  if (process.env.NODE_ENV !== 'production') {
    console.timeEnd('api:findBooks')
  }

  return result
}
