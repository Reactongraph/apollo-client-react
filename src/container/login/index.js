
import React, { Component } from 'react'
import CommonHelper from '../../utils/Helper'
import { connect } from 'react-redux'
import LoginContent from './Login'

const helper = new CommonHelper()

class Login extends Component {
  
  state = { error: {} }

  static getDerivedStateFromProps = (props, state) => {
    if (props.login.error && (!state.error.type))
      return { error: { message: props.login.error.description } }
    return null
  }

  onKeyPress = (e) => {
    const { email, password, error } = this.state;
    if (e.which === 13 && email && password && error.message === '')
      this.handleSubmit()
  }

  emailValidation = (e) => {
    let isValidEmail = helper.isEmailValidate(e.target.name, e.target.value)
    this.setState({ error: { ...isValidEmail, type: 'email' }, [e.target.name]: e.target.value })
  }

  passwordValidate = (e) => {
    let isValidPassword = helper.isPasswordValidate(e.target.value)
    this.setState({ error: { ...isValidPassword, type: 'password' }, [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    this.setState({ error: {} })
    this.props.dispatch({ type: 'LOGIN', payload: this.state })
  }

  renderClass(type) {
    const { error } = this.state;
    if (error.message !== '' && error.type === type)
      return 'form-control error-border'
    else return 'form-control'
  }

  resetPassword = () => {
    const { email, error } = this.state;
    if (email && error.message === '')
      console.log('reset password')
  }

  render() {
    return (
      <div>
        <LoginContent
          {...this.props}
          {...this.state}
          emailValidation={this.emailValidation}
          passwordValidate={this.passwordValidate}
          handleSubmit={this.handleSubmit}
          renderClass={this.renderClass}
          onKeyPress={this.onKeyPress}
          resetPassword={this.resetPassword}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(Login)
