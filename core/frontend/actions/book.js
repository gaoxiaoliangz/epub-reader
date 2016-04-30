import { promisedCallApi } from 'actions'
import { API_DOUBAN_BOOKS } from 'constants/APIS'


export function fetchBookList() {
  return {
    CALL_API: {
      types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE'],
      endpoint: 'books'
    }
  }
}

// TODO
export function fetchBookList00(endpoint) {
  return promisedCallApi({
    types: ['BOOK_LIST_REQUEST', 'BOOK_LIST_SUCCESS', 'BOOK_LIST_FAILURE'],
    endpoint
  }, {})
}

export function fetchDoubanBookSearchResults(endpoint) {
  return promisedCallApi({
    types: ['DOUBAN_BOOK_SEARCH_REQUEST', 'DOUBAN_BOOK_SEARCH_SUCCESS', 'DOUBAN_BOOK_SEARCH_FAILURE'],
    endpoint,
    apiUrl: API_DOUBAN_BOOKS
  }, {})
}

export const CLEAR_BOOK_SEARCH = 'CLEAR_BOOK_SEARCH'
export function clearBookSearch() {
  return {
    type: CLEAR_BOOK_SEARCH
  }
}

export function fetchBookContent(bookId) {
  return {
    CALL_API: {
      types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
      endpoint: `books/${bookId}/content`
    }
  }
}

// export function fetchBookContent(bookId) {
//   return promisedCallApi({
//     types: ['BOOK_CONTENT_REQUEST', 'BOOK_CONTENT_SUCCESS', 'BOOK_CONTENT_FAILURE'],
//     endpoint: `books/${bookId}/content`
//   }, { bookId })
// }


export function fetchBookInfo(bookId) {
  return {
    CALL_API:{
      types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
      endpoint: `books/${bookId}`
    }
  }
}

// TODO
export function fetchBookInfo00(bookId, endpoint) {
  return promisedCallApi({
    types: ['BOOK_INFO_REQUEST', 'BOOK_INFO_SUCCESS', 'BOOK_INFO_FAILURE'],
    endpoint
  }, { bookId })
}

export const LOAD_HTML = 'LOAD_HTML'
export function loadHTML(html) {
  return {
    type: LOAD_HTML,
    html
  }
}

export const SET_BOOK_MODE = 'SET_BOOK_MODE'
export function setBookMode(mode) {
  return {
    type: SET_BOOK_MODE,
    mode
  }
}

export const LOAD_PAGES = 'LOAD_PAGES'
export function loadPages(pages) {
  return {
    type: LOAD_PAGES,
    pages
  }
}

export const JUMP_TO = 'JUMP_TO'
export function jumpTo(pageNo) {
  return {
    type: JUMP_TO,
    currentPage: pageNo
  }
}
