import React, { Component } from 'react'
import _ from 'lodash'
import HTMLObjectsRenderer from '../../../components/HTMLObjectsRenderer/HTMLObjectsRenderer'
import CSSModules from 'react-css-modules'
import styles from './BookContainer.scss'
import * as readerConfig from '../readerConfig'

interface Props {
  bookPages: Schema.BookPages
  // onLoadPage: (direction: 'prev' | 'next') => any
  config: {
    fontSize: number
    width: number
    lineHeight: number
    pageHeight: number
    theme: Viewer.Themes
  }
}

@CSSModules(styles)
export default class BookContainer extends Component<Props, void> {

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(this.state, nextState) || !_.isEqual(this.props, nextProps)
  }

  render() {
    const {
      bookPages: { totalCount, edges },
      config
    } = this.props
    const height = config.pageHeight
    const rendererConfig = {
      lineHeight: config.lineHeight,
      fontSize: config.fontSize,
      width: config.width
    }
    const containerStyle: React.CSSProperties = {
      height: totalCount * height,
      position: 'relative'
    }
    const containerClass = `page-container--${config.theme.toLocaleLowerCase()}`
    const isMobile = readerConfig.desktop.layout.width > config.width
    const getConfig = readerConfig.getLayoutConfig(isMobile)
    const contentMargin = getConfig('margin')

    return (
      <div style={containerStyle} styleName={containerClass}>
        {
          edges.map((edge, index) => {
            const page = edge.node.pageNo
            const pageWidth = rendererConfig.width + contentMargin * 2
            const pageStyle: React.CSSProperties = {
              overflow: 'hidden',
              height,
              position: 'absolute',
              width: pageWidth,
              top: (page - 1) * height,
              padding: `0 ${contentMargin}px`,
              left: '50%',
              marginLeft: - pageWidth / 2
            }

            return (
              <div key={index} style={pageStyle} className={`book-page book-page-${edge.node.pageNo}`}>
                <div styleName="page-no">{edge.node.pageNo}</div>
                <div
                  style={{
                    marginTop: edge.node.offset || 0,
                  }}
                >
                  <HTMLObjectsRenderer
                    htmlObjects={edge.node.nodes || []}
                    {...rendererConfig}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
