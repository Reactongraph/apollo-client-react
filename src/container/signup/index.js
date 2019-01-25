import React, { Component } from 'react'
import CommonHelper from '../../utils/Helper'
import { connect } from 'react-redux'
import SignupContent from './SignupForm'

const helper = new CommonHelper()

class Signup extends Component {

  state = { error: {}, }

  static getDerivedStateFromProps = (props, state) => {
    if (props.signup.error && (!state.error.type))
      return { error: { message: props.signup.error.description } }
    return null
  }

  componentDidMount() {
    helper.isUserLoggedIn() && this.props.history.goBack()
  }
  
  onKeyPress = (e) => {
    const { email, password, confirmPassword, error } = this.state;
    if (e.which === 13 && email && password && confirmPassword && error.message === '')
      this.handleSubmit()
  }

  handleOnChange = (e, data) => {
    let err = this.state.error
    if (data.name === "password") {
      err = { ...helper.isPasswordValidate(e.target.value), type: 'password' }
    }
    if (data.name === "email") {
      err = { ...helper.isEmailValidate("email", e.target.value), type: 'email' }
    }
    if (data.name === "confirmPassword") {
      if (this.state.password !== e.target.value)
        err = { type: 'confirmPassword', message: "Password doesn't match" }
      else {
        err = { type: 'confirmPassword', message: "" }
      }
    }
    if (data.name === "dob") {
      let timeDiff = Math.abs(new Date().getTime() - new Date(e.target.value).getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays < (18 * 365)) {
        err = { type: 'dob', message: "Your Age should be greater than 18 years!" }
      } else {
        err = { type: 'dob', message: "" }
      }
    }
    this.setState({ [data.name]: e.target.value, error: err })
  }

  handleSubmit = () => {
    this.setState({ error: {} })
    this.props.dispatch({ type: 'SIGNUP', payload: this.state })
  }

  renderClass(type) {
    const { error } = this.state;
    if (error.message !== '' && error.type === type)
      return ' error-border'
    else return ''
  }

  render() {
    return (
      <div>
        <SignupContent
          {...this.props}
          {...this.state}
          handleSubmit={this.handleSubmit}
          onKeyPress={this.onKeyPress}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state }
}

export default connect(mapStateToProps)(Signup)
