import React from 'react'
import path from 'path'
import _ from 'lodash'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import DocContainer from '../../../app/components/DocContainer'
import ServerSideAppRoot from '../../../app/components/ServerSideAppRoot'
import AppDoc, { DOCTYPE } from '../../../app/components/AppDoc'
import manifest from '../../../../build/static/assets.manifest.json'
import getIP from '../../../app/helpers/getIP'

const CLIENT_ENV_VARS = ['PORT']
const LOCAL_IP = getIP()
const prefix = '/static'

const resolveDevAssets = (assetName) => {
  const assetUrl = `http://${LOCAL_IP}:${process.env.WEBPACK_PORT}/static/`

  return assetUrl + assetName
}

export const getCssLinks = (isProduction = false) => {
  if (isProduction) {
    return [
      path.join(prefix, manifest['base.global.css']),
      path.join(prefix, manifest['vendor.global.css']),
      path.join(prefix, manifest['modifiers.global.css']),
      path.join(prefix, manifest['app.css'])
    ]
  }
  return [
    resolveDevAssets('css/base.global.css'),
    resolveDevAssets('css/vendor.global.css'),
    resolveDevAssets('css/modifiers.global.css'),
    resolveDevAssets('css/app.css')
  ]
}

function renderView(isProduction) {
  const cssAssets = getCssLinks(isProduction)
  let jsAssets

  if (isProduction) {
    jsAssets = [
      path.join(prefix, manifest['vendor.js']),
      path.join(prefix, manifest['app.js'])
    ]
  } else {
    jsAssets = [
      resolveDevAssets('js/vendor.dll.js'),
      resolveDevAssets('js/app.js')
    ]
  }

  const clientEnv = {
    ..._.pick(process.env, CLIENT_ENV_VARS),
    ...{
      HOST: LOCAL_IP
    }
  }

  return (req, res) => {
    const { renderProps, statusCode } = req.locals.matchedResults
    const appRootMarkup = renderToString(<ServerSideAppRoot
      renderPageContent
      renderProps={renderProps}
      store={req.locals.store}
    />)

    // 需要在 render 之后调用
    // 不调用 rewind 会造成内存泄漏
    const { bodyClass, head } = DocContainer.rewind()
    const initialState = process.env.ENABLE_INITIAL_STATE === '1'
      ? req.locals.store.getState()
      : {}

    // todo: global var name
    const html = renderToStaticMarkup(
      <AppDoc
        appMarkup={appRootMarkup}
        helmetHeadObject={head}
        bodyClass={bodyClass}
        initialState={initialState}
        link={cssAssets}
        script={[
          { innerHTML: 'var __ENABLE_SERVER_ROUTING__ = true;' },
          { innerHTML: `var __ENV__ = ${JSON.stringify(clientEnv)}` }
        ].concat(jsAssets)}
      />
    )
    if (process.env.NODE_ENV !== 'production') {
      console.info('render-view: view rendered')
    }
    res.status(statusCode).send(DOCTYPE + html)
  }
}

export default renderView
