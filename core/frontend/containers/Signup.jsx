import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Appbar, Container, Form, Input, Textarea, Button } from 'muicss/react'
import { Link, browserHistory } from 'react-router'
import ApiRoots from 'constants/ApiRoots'
import callApi from 'utils/callApi'
import { fetchUserAuthInfo, handleNotification } from 'actions'
import Notification from 'components/Notification'
import Branding from 'components/Branding'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  handleSignup(event) {
    event.preventDefault()

    let params = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    callApi(`${ApiRoots.LOCAL}users`, 'POST', params).then(res => {
      console.log(res);
      this.props.handleNotification('注册成功！')
      setTimeout(function(){
        browserHistory.push('/')
      }, 600)
    }, err => {
      this.props.handleNotification(err.message)
    })
  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="page-signup">
        <Branding />
        <Container>
          <Form className="content-container" method="post" action="/signup">
            <Notification notification={this.props.notification} />
            <h1 className="page-title">加入 Readr</h1>
            <Input onChange={this.handleInput.bind(this)} value={this.state.username} name="username" hint="用户名" />
            <Input onChange={this.handleInput.bind(this)} value={this.state.email} name="email" hint="邮箱" />
            <Input onChange={this.handleInput.bind(this)} value={this.state.password} name="password" hint="密码 "type="password" />
            <Button onClick={this.handleSignup.bind(this)} variant="raised">注册</Button>
            <p className="hint">没有账号？<Link to="/signin">登录</Link></p>
          </Form>
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    notification: state.notification,
    user: state.user
  }),
  { handleNotification, fetchUserAuthInfo }
)(Signup)
