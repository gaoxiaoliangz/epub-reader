import _ from 'lodash'
import * as styles from 'constants/STYLES'

import { callApi } from 'utils'
import { API_ROOT } from 'constants/APIS'

export * from 'actions/book'
export * from 'actions/notification'
export * from 'actions/user'

// todo: merge with api.js
export function promisedCallApi(CALL_API, actionArgObj){
  return (dispatch, getState) => {
    let { endpoint, apiUrl } = CALL_API
    const { types } = CALL_API
    const [ requestType, successType, failureType ] = types

    function actionWith(data) {
      const finalAction = Object.assign({}, actionArgObj, data)
      return finalAction
    }

    dispatch(actionWith({type: requestType}))

    if (typeof endpoint === 'function') {
      endpoint = endpoint(getState())
    }

    if(typeof apiUrl === 'undefined') {
      apiUrl = API_ROOT
    }

    const fullUrl = apiUrl + endpoint

    return new Promise((resolve, reject) => {
      callApi(fullUrl).then(response => {
        dispatch(actionWith({
          response,
          type: successType
        }))
        resolve(getState)
      },
      error => {
        dispatch(actionWith({
          type: failureType,
          error: error.message || 'Oops!'
        }))
        reject(error)
      })
    })
  }
}
