import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import { fetchCollections, sendNotification, fetchProfile } from '../../store/actions'
// import BookListSection from '../../components/BookListSection'
import { Button } from '../../elements/_form'
import { Tab, Tabs } from '../../elements/Tab'
import Container from '../../elements/_layout/Container'
import CSSModules from 'react-css-modules'
import _ from 'lodash'
const styles: any = require('./_profile.scss')

interface IProps {
  fetchBooks?: any
  newestBooks?: any
  fetchProfile?: any
  sendNotification?: any
  profile?: any
}

@CSSModules(styles)
class Profile extends Component<IProps, {}> {

  // static fetchData({store, params}) {
  //   return store.dispatch(fetch())
  // }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchBooks()
    this.props.fetchProfile()
  }

  render() {
    const { profile: { username } } = this.props

    return (
      <Container>
        <div styleName="profile">
          <div styleName="page-header">
            <div styleName="user-avatar">
              <img src="https://img3.doubanio.com/icon/ul43646706-43.jpg" alt="user_avatar"/>
            </div>
            <span styleName="username">{username}</span>
            <span styleName="tagline">暂无签名</span>
            <Button onClick={() => { this.props.sendNotification('该功能尚不可用', 'warning') }} styleName="edit">编辑</Button>
          </div>
          <Tabs>
            <Tab title="收藏">
              暂无数据
            </Tab>
            <Tab title="读过">
              暂无数据
            </Tab>
          </Tabs>
        </div>
      </Container>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    newestBooks: state.pagination.books.newest
      ? state.pagination.books.newest.ids.map(id => state.entities.books[id])
      : [],
    profile: _.get(state.payloads, 'profile', {})
  }
}

export default connect(
  mapStateToProps,
  { sendNotification, fetchCollections, fetchProfile }
)(Profile as any)
