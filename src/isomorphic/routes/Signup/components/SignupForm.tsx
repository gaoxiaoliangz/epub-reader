import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { sendNotification } from '../../../store/actions'
import { Input, Button } from '../../../elements/_form'
import validation from '../../../data/validation'

interface Props {
  initialValues?: any
  onSave: (data: any) => void
}

interface AllProps extends Props {
  routing: any
  sendNotification: any
  handleSubmit: any
  fields: any
}

interface State {
}

@reduxForm({
  form: 'formName',
  fields: ['username', 'email', 'password'],
  validate: values => {
    return validation(values)
  }
})
class SignupForm extends Component<AllProps, State> {

  constructor(props) {
    super(props)
  }

  render() {
    const {
      fields: { username, email, password },
      handleSubmit,
      onSave
    } = this.props

    return (
      <div>
        <Input placeholder="用户名" {...username} />
        <Input placeholder="邮箱" {...email} />
        <Input placeholder="密码" type="password" {...password} />
        <Button
          color="blue"
          onClick={handleSubmit(data => {
            onSave(data)
          })}>注册</Button>
      </div>
    )
  }
}

export default connect<{}, {}, Props>(
  (state, ownProps) => {
    return {
      initialValues: ownProps.initialValues,
      routing: state.routing.locationBeforeTransitions
    }
  },
  { sendNotification }
)(SignupForm)
