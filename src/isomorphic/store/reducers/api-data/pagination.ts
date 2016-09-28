import _ from 'lodash'

export type Pagination = {
  name: string
  query?: string
  key?: string
  merge?: boolean
}

const updatePagination = (state = {
  isFetching: false,
  nextPageUrl: null,
  pageCount: 0,
  ids: []
}, action, merge) => {
  if (!action.response) {
    return Object.assign({}, state, {
      isFetching: true
    })
  } else {
    return _.omitBy(Object.assign({}, state, {
      isFetching: false,
      ids: merge
        // 不使用 union 会导致 server rendering 问题？
        ? _.union(state.ids, action.response.result)
        : action.response.result,
      next: action.response._next,
      last: action.response._last,
    }), _.isEmpty)
  }
}

export default function pagination(state = {}, action) {
  if (action.pagination) {
    const { name, query, key, merge } = action.pagination as Pagination
    const originalState = query
      ? (state[name] && state[name]['query'] && state[name]['query'][query]) || {}
      : (state[name] && state[name][key || 'default']) || {}

    const paginationBody = updatePagination(originalState, action, merge)

    const paginationObj = query
      ? {
        query: {
          [query]: paginationBody
        }
      }
      : {
        [key || 'default']: paginationBody
      }

    return Object.assign({}, state, {
      [name]: paginationObj
    })
  }

  return state
}