import _ from 'lodash'
import humps from 'humps'
import dataProvider from '../models/data-provider'

export function getReadingProgressCore({bookId, userId}) {
  if (!userId) {
    return Promise.reject(new Error('Sign-in required!'))
  }
  const query = humps.decamelizeKeys({ userId, bookId })

  return dataProvider.Progress.findOne(query).exec()
}

export function getReadingProgress(options) {
  const { bookId } = options
  const { user: { _id: userId } } = options.context
  return getReadingProgressCore({bookId, userId})
}

export const setReadingProgressCore = async ({ bookId, userId, percentage }) => {
  if (!userId) {
    return Promise.reject(new Error('Sign-in required!'))
  }
  const query = humps.decamelizeKeys({ userId, bookId })
  const progressResult = await dataProvider.Progress.findOne(query).exec()

  const object = { percentage }

  if (!progressResult) {
    return dataProvider.Progress.utils.save(_.assign({}, object, query)).then(data => data.toObject())
  } else {
    const progressId = progressResult._id
    return dataProvider.Progress.utils.updateById(progressId, object)
  }
}

export async function setReadingProgress(object, options) {
  const { bookId } = options
  const { user: { _id: userId } } = options.context
  return setReadingProgressCore({ bookId, userId, percentage: object.percentage })
}

export function listShelfBooks(options) {
  const { user: { _id: user_id } } = options.context
  return dataProvider.Progress.find({ user_id }).exec().then(docs => {
    return Promise
      .all(docs
        .map(doc => {
          return dataProvider.Book.findById(doc['book_id']).exec().then(bookDoc => {
            // todo: outputEmpty, in case book is removed
            // if (!bookDoc) {
            //   return bookModel.outputEmpty(result.book_id)
            // }
            return bookDoc
          })
        })
      )
  })
}

export default {
  getReadingProgress,
  setReadingProgress,
  listShelfBooks
}
