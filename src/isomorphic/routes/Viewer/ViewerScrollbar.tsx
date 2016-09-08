import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
const styles: any = require('./_viewer-scrollbar.scss')

interface Props {
  current: number
  total: number
  visible: boolean
}

@CSSModules(styles)
class ViewerScrollbar extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  render() {
    const { current, total } = this.props
    const percentage = ((current / total) * 100).toFixed(2) + '%'

    return (
      this.props.visible && (
        <div styleName="loc-info">
          <div><strong>{current}</strong>/{total}</div>
          <div styleName="sub-info">{percentage}</div>
        </div>
      )
    )
  }
}

export default ViewerScrollbar
