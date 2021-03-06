import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import _ from 'lodash'
import { loadUsers } from '../../actions/api'
import InfoTable from '../../components/InfoTable'
import * as selectors from '../../selectors'
import DocContainer from '../../components/DocContainer'
import ContentPage from '../../components/ContentPage'

interface Props {
  loadUsers: typeof loadUsers
  users: State.Pagination
  routing: State.Routing
}

class ManageUsers extends Component<Props, {}> {

  constructor(props) {
    super(props)
  }

  loadUsers(props = this.props) {
    this.props.loadUsers(_.get(props, 'routing.query.page', 1))
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (!_.isEqual(nextProps.routing, this.props.routing)) {
      document.body.scrollTop = 0
      this.loadUsers(nextProps)
    }
  }

  componentWillMount() {
    this.loadUsers()
  }

  render() {
    const { users } = this.props
    const userEntities = _.get(users, ['pages', users.currentPage], [])
    const rows = userEntities
      .map(row => {
        return [
          row.username,
          row.email,
          row.password,
          row.role,
          row.id,
          moment(new Date(row.createdAt).valueOf()).format('YYYY年MM月DD日')
        ]
      })

    return (
      <DocContainer title="用户管理">
        <ContentPage
          pagination={{
            name: 'users'
          }}
        >
          <InfoTable
            header={['用户名', 'email', '密码', '角色', 'ID', '创建日期']}
            rows={rows}
          />
        </ContentPage>
      </DocContainer>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: selectors.pagination.userList(state),
    routing: selectors.routing(state)
  }
}

export default connect(
  mapStateToProps,
  { loadUsers }
)(ManageUsers as any)
