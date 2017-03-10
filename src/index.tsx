import { render } from 'react-dom'
import React from 'react'
import { browserHistory, hashHistory, match } from 'react-router'
import createRoutes from './routes/createRoutes'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './configureStore'
import rootSaga from './sagas'
import helpers from './helpers'
import AppContainer from './components/AppContainer'
import Root from './components/Root'

const routerHistory = helpers.isServerRoutingEnabled()
  ? browserHistory
  : hashHistory

const store = configureStore()
const history = syncHistoryWithStore(routerHistory as any, store) as any
const rootEle = document.getElementById('root')

store.runSaga(rootSaga)

const renderApp = routes => {
  match({ history, routes }, (error, redirectLocation, renderProps) => {
    render(
      <AppContainer>
        <Root
          store={store}
          renderProps={renderProps}
          />
      </AppContainer>,
      rootEle
    )
  })
}

if (module.hot) {
  module.hot.accept('./routes/createRoutes', () => {
    console.info('hot patching')

    const createRoutesNext = require('./routes/createRoutes').default
    renderApp(createRoutesNext())
  })
}

renderApp(createRoutes())