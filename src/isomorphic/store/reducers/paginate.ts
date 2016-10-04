import _ from 'lodash'
import * as actions from '../actions'

const DEFAULT_KEY = 'default'

export default function paginate({ types, mapActionToKey }) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.')
  }

  const [requestType, successType, failureType] = types

  function updatePagination(state = {
    isFetching: false,
    pageCount: 0,
    pages: {}
  }, action) {
    switch (action.type) {
      case requestType:
        return _.assign({}, state, {
          isFetching: true
        })
      case successType:
        const currentPage = action.response._next
          ? action.response._next.page - 1
          : action.response._last.page

        const pages = _.assign({}, {
          [currentPage]: action.response.result
        })

        return _.assign({}, state, {
          isFetching: false,
          pages,
          next: action.response._next || null,
          last: action.response._last,
          pageCount: state.pageCount + 1
        })
      case failureType:
        return _.assign({}, state, {
          isFetching: false
        })
      default:
        return state
    }
  }

  return function updatePaginationByKey(state = {}, action) {

    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action)
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }
        return _.merge({}, state, {
          [key]: updatePagination(state[key], action)
        })
      default:
        return state
    }
  }
}