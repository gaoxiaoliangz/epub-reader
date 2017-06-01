import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
import Switcher from '../../components/Switcher'
import EditableField from '../../components/EditableField/EditableField'
import styles from './PreferenceList.scss'
import Button from '../../components/Button/Button'

interface IProps {
  displayName: string
  username: string
  email: string
  showFav: boolean
  onSave: (data: any) => void
  onRequestChangePW: () => void
}

interface IState {
}

@CSSModules(styles, {
  allowMultiple: true
})
class PreferenceList extends Component<IProps, IState> {

  constructor(props) {
    super(props)
    this._handleChangePWClick = this._handleChangePWClick.bind(this)
  }

  _handleSave(key) {
    return (val) => {
      this.props.onSave({
        ..._.pick(this.props, ['username', 'email']),
        [key]: val
      })
    }
  }

  _handleChangePWClick() {
    this.props.onRequestChangePW()
  }

  render() {
    const { username, email, showFav, displayName } = this.props

    return (
      <div styleName="settings">
        <div className="page-content">
          <div className="page-header">
            <h1 style={{ marginBottom: 0 }} className="page-title">设置</h1>
          </div>
          <ul styleName="options">
            <li styleName="option">
              <EditableField
                label="昵称"
                initialValue={displayName}
                onSave={this._handleSave('displayName')}
              />
            </li>
            <li styleName="option">
              <EditableField
                label="用户名"
                display={<span>readrweb.com/@<strong>{username}</strong></span>}
                initialValue={username}
                onSave={this._handleSave('username')}
              />
            </li>
            <li styleName="option">
              <EditableField
                label="邮箱"
                initialValue={email}
                onSave={this._handleSave('email')}
              />
            </li>
            <li styleName="option" className="clearfix">
              <div className="left">
                <h2>密码</h2>
                <span styleName="option-input">• • • • • • • •</span>
              </div>
              <div className="right">
                <Button color="white" onClick={this._handleChangePWClick}>修改密码</Button>
              </div>
            </li>
            <li styleName="option">
              <h2>公开展示我的收藏</h2>
              <span styleName="option-desc">关闭后其他用户将无法查看您的收藏</span>
              <Switcher
                styleName="switcher"
                value={showFav}
                onChange={newValue => {
                  this.setState({
                    showFav: newValue as boolean
                  })
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PreferenceList
