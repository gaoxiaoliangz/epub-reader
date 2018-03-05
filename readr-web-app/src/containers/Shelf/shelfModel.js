// import _ from 'lodash'
// import { select } from 'redux-saga/effects'
import { createModel } from '@gxl/redux-model'
import { logUploaded, fetchBookList, fetchBookSections } from '../../service'
import { FETCH_STATUS } from '../../constants'
import createDbModel from '../../local-db'
import uuid from '../../utils/uuid'

const { firebase } = window
const db = firebase.database()
const store = firebase.storage()
const dbModel = createDbModel('books')
const NAMESPACE = 'shelf'

const model = createModel({
  namespace: NAMESPACE,
  state: {
    booksStatus: FETCH_STATUS.NONE,
    downloadStatus: {},
    books: {},
    localBooks: {},
    bookPagination: {
      entries: [],
    },
    isUploadingBook: false,
  },
  effects: {
    *fetchBooks() {
      this.$set('booksStatus', FETCH_STATUS.FETCHING)
      try {
        const books = yield fetchBookList()
        this.$set('booksStatus', FETCH_STATUS.SUCCESS)
        this.putBooks(books)
      } catch (error) {
        this.$set('booksStatus', FETCH_STATUS.FAILURE)
      }
    },
    *delBook(id) {
      try {
        yield db.ref('books')
          .child(id)
          .remove()
        yield dbModel.remove(id)
      } catch (error) {
        console.error(error)
      }
    },
    *downloadBook(id) {
      this.$set(['downloadStatus', id], FETCH_STATUS.FETCHING)
      try {
        const sections = yield fetchBookSections(id)
        yield dbModel.add({
          id,
          sections
        })
        this.$set(['downloadStatus', id], FETCH_STATUS.SUCCESS)
        this.getLocalBooks()
      } catch (error) {
        this.$set(['downloadStatus', id], FETCH_STATUS.FAILURE)
      }
    },
    *getLocalBooks() {
      const books = yield dbModel.listAll()
      this.putLocalBooks(books)
    },
    *uploadBook(file) {
      this.$set('isUploadingBook', true)
      yield store.ref().child(file.name)
        .put(file)
        .then(() => {
          logUploaded(uuid(), file.name, file.type)
        })
      this.$set('isUploadingBook', false)
    }
  },
  computations: {
    putLocalBooks(state, localBooks) {
      return {
        ...state,
        localBooks
      }
    },
    putBooks(state, books) {
      const entries = books.map(b => b.id)
      const booksObj = books.reduce((obj, book) => {
        return {
          ...obj,
          [book.id]: book
        }
      }, {})
      return {
        ...state,
        books: booksObj,
        bookPagination: {
          entries
        }
      }
    }
  }
})

export default model
