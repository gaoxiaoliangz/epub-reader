import _ from 'lodash'
import { combineReducers } from 'redux'
import * as ACTION_TYPES from '../constants/actionTypes'

const getFlag = (reset, currentFlag) => {
  if (typeof reset === 'undefined') {
    return !currentFlag
  }
  return reset
}

const DEFAULT_CONFIG: Viewer.Config = {
  theme: 'WHITE'
}
const config = (state = DEFAULT_CONFIG, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.CONFIG:
      return _.merge({}, state, action.payload)

    case ACTION_TYPES.VIEWER.DESTROY:
      return DEFAULT_CONFIG

    default:
      return state
  }
}

const DEFAULT_STATUS = { isReady: false }
const status = (state = DEFAULT_STATUS, action) => {
  switch (action.type) {
    case ACTION_TYPES.VIEWER.SET_STATUS:
      return _.merge({}, state, action.payload)

    case ACTION_TYPES.VIEWER.DESTROY:
      return DEFAULT_STATUS

    default:
      return state
  }
}

const data = (state = {}, action) => {
  const { payload } = action
  switch (action.type) {
    case ACTION_TYPES.VIEWER.DESTROY:
      if (payload === true) {
        return {}
      }
      return state

    case ACTION_TYPES.VIEWER.CALC_SUCCESS:
      return _.merge({}, state, {
        [payload.bookId]: {
          content: {
            computed: payload.computed
          }
        }
      })

    case ACTION_TYPES.VIEWER.UPDATE_LOCAL_PROGRESS:
      return _.merge({}, state, {
        [payload.bookId]: {
          progress: {
            local: _.get(state, [payload.bookId, 'progress', 'local'], []).concat(payload.progress)
          }
        }
      })

    default:
      return state
  }
}

const id = (state = '', action) => {
  if (action.type === ACTION_TYPES.VIEWER.INITIALIZE) {
    return action.payload
  }
  return state
}

const DEFAULT_COMPONENT_STATE = {
  showNavigation: false,
  showPanel: false,
  showPreference: false,
  showProgress: false
}
const components = (state = DEFAULT_COMPONENT_STATE, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTION_TYPES.VIEWER.PANEL_TOGGLE:
      return {
        ...state,
        ...{
          showPanel: getFlag(payload, state.showPanel)
        }
      }

    case ACTION_TYPES.VIEWER.PREFERENCE_TOGGLE:
      return {
        ...state,
        ...{
          showPreference: getFlag(payload, state.showPreference)
        }
      }

    case ACTION_TYPES.VIEWER.NAVIGATION_TOGGLE:
      return {
        ...state,
        ...{
          showNavigation: getFlag(payload, state.showNavigation)
        }
      }

    case ACTION_TYPES.VIEWER.PROGRESS_INFO_TOGGLE:
      return {
        ...state,
        ...{
          showProgress: getFlag(payload, state.showProgress)
        }
      }

    case ACTION_TYPES.VIEWER.SET_COMPONENT:
      return {
        ...state,
        ...payload
      }

    case ACTION_TYPES.VIEWER.DESTROY:
      return DEFAULT_COMPONENT_STATE

    default:
      return state
  }
}

export default combineReducers({
  status,
  config,
  data,
  components,
  id
})
