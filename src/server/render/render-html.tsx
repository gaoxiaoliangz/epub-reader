import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import getStore from './get-store'
import matchRoute from './match-route'
import NotFoundErrorPage from '../../isomorphic/containers/NotFoundErrorPage'
import InternalServerErrorPage from '../../isomorphic/containers/InternalServerErrorPage'
import Page from '../../isomorphic/containers/Page'
import print from '../utils/print'
import _ from 'lodash'
import DocContainer from '../../isomorphic/containers/DocContainer'
const fs: any = require('fs')

function getManifest() {
  try {
    const chunkManifest = JSON.parse(fs.readFileSync(`${process.cwd()}/assets/built/chunks.manifest.json`, 'utf8'))
    const cssManifest = JSON.parse(fs.readFileSync(`${process.cwd()}/assets/built/css.manifest.json`, 'utf8'))

    return _.assign({}, chunkManifest, cssManifest)
  } catch (error) {
    print.error('Manifest file not found! ')
    return {}
  }
}

type RenderConfig = {
  reqUrl: string
  routes: Object
  isProd: boolean
  fetchData: boolean
  isHot: boolean
}
function renderHtml(config: RenderConfig) {
  const { reqUrl, routes, isProd, fetchData, isHot } = config

  return matchRoute(routes, reqUrl).then(result => {
    return getStore(result.renderProps, fetchData).then(store => {
      const page = (bodyClass, title) => <Page
        title={title}
        store={store}
        renderProps={result.renderProps}
        isProd={isProd}
        manifest={isProd && getManifest() }
        renderPageContent={fetchData}
        includeLocalStylesheets={!isHot}
        bodyClass={bodyClass}
        />

      let html = renderToStaticMarkup(page(null, null))
      const data = DocContainer.rewind() || {}

      // rewind 必须在 render 之后调用，所以只能调用两次 render
      // 没有更好的方法之前先这样
      html = renderToStaticMarkup(page(data.bodyClass, data.title))

      return html
    }, err => {
      return Promise.reject({
        htmlString: renderToStaticMarkup(<InternalServerErrorPage message={err.message} />),
        statusCode: 500
      })
    })
  }, err => {
    return Promise.reject({
      htmlString: renderToStaticMarkup(<NotFoundErrorPage message={err.message} />),
      statusCode: 404
    })
  })
}

export default renderHtml
