import callApi from '../utils/callApi'
import { ApiRoots } from '../config'

export function addCollection(data: {
  name: string
  items: string
  description: string
}) {
  return callApi(`${ApiRoots.LOCAL}collections`, { method: 'POST', data: data })
}

/**
 * data: name, author, description, cover, content
 * todo
 */
export function addBook(data) {
  return callApi(`${ApiRoots.LOCAL}books`, { method: 'POST', data: data })
}

/**
 * data: name, slug, description
 * todo
 */
export function addAuthor(data) {
  return callApi(`${ApiRoots.LOCAL}authors`, { method: 'POST', data: data })
}

export function searchAuthors(query) {
  return callApi(`${ApiRoots.LOCAL}authors?q=${query}`)
}

export function searchBooks(query) {
  return callApi(`${ApiRoots.LOCAL}books?q=${query}`)
}

/**
 * data: pageNo, pageSum, percentage
 * todo
 */
export type setProgress = {
  percentage: number
}
export function setProgress(bookId, data: setProgress) {
  callApi(`${ApiRoots.LOCAL}user/books/${bookId}/progress`, { method: 'PUT', data })
}

export function deleteBook(id) {
  return callApi(`${ApiRoots.LOCAL}books/${id}`, {
    method: 'DELETE'
  })
}

export function logout() {
  return callApi(`${ApiRoots.LOCAL}auth/revoke`, {
    method: 'PUT'
  })
}