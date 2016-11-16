import fs from 'fs'
import xml2js from 'xml2js'
import _ from 'lodash'
const nodeZip = require('node-zip')
const toMarkdown = require('to-markdown')

const hTagConverter = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (innerHTML, node) {
    let hLevel = node.tagName.charAt(1)
    let hPrefix = ''
    const hEnd = ' TODO'

    for (let i = 0; i < hLevel; i++) {
      hPrefix += '#'
    }

    return '\n' + hPrefix + ' ' + innerHTML + hEnd + '\n\n'
  }
}

const parseToc = tocObj => {
  const rootNavPoints = _.get(tocObj, ['ncx', 'navMap', '0', 'navPoint'], [])

  function parseNavPoint(navPoint) {
    const url = _.get(navPoint, ['content', '0', '$', 'src'], '')
    const hash = url.split('#')[1]
    const fileSrc = url.split('#')[0]
    const src = fileSrc.split('/')[1].split('.')[0]

    const label = _.get(navPoint, ['navLabel', '0', 'text', '0'])
    const id = _.get(navPoint, ['$', 'id'])
    const order = _.get(navPoint, ['$', 'playOrder'])

    let children = navPoint.navPoint

    if (children) {
      children = parseNavPoints(children)
    }

    return {
      src,
      fileSrc,
      hash,
      label,
      id,
      order,
      children
    }
  }

  function parseNavPoints(navPoints) {
    return navPoints.map(point => {
      return parseNavPoint(point)
    })
  }

  return parseNavPoints(rootNavPoints)
}

const resolveContent = zipPath => zipInstance => {
  const content = zipInstance.file(zipPath)

  if (content) {
    return toMarkdown(content.asText(), {
      converters: [hTagConverter]
    })
  }

  return ''
}

const flattenToc = parsedToc => {
  const list = []

  const push = infoList => {
    infoList.forEach(item => {
      list.push(_.omit(item, 'children'))
      if (item.children) {
        push(item.children)
      }
    })
  }

  push(parsedToc)
  return list
}

export function epubBinaryParser(binaryFile) {
  return new Promise<{meta; toc; flatToc; content}>((resolve, reject) => {
    const zip = new nodeZip(binaryFile, { binary: true, base64: false, checkCRC32: true })
    const tocFile = zip.file('toc.ncx').asText()
    const contentFile = zip.file('content.opf').asText()

    xml2js.parseString(tocFile, (err, result) => {
      const parsedToc = parseToc(result)
      const flatToc = flattenToc(parsedToc)

      const content = _(flatToc)
        .map(item => _.pick(item, ['src', 'fileSrc']))
        .union()
        .map(item => ({
          src: item['src'],
          markdown: resolveContent(item['fileSrc'])(zip)
        }))
        .value()

      xml2js.parseString(contentFile, (err2, result2) => {
        const metadata = _.get(result2, ['package', 'metadata'], [])
        const title = _.get(metadata[0], ['dc:title', 0])
        let author = _.get(metadata[0], ['dc:creator', 0])

        if (typeof author === 'object') {
          author = _.get(author, ['_'])
        }

        const publisher = _.get(metadata[0], ['dc:publisher', 0])
        const meta = {
          title,
          author,
          publisher
        }

        resolve({
          meta,
          toc: parsedToc.map(item => _.omit(item, ['fileSrc'])),
          flatToc: flatToc.map(item => _.omit(item, ['fileSrc'])),
          content
        })
      })
    })
  })
}

export default function parser(fullPath) {
  const binaryFile = fs.readFileSync(fullPath, 'binary')
  return epubBinaryParser(binaryFile)
}
