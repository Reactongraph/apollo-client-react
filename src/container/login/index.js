import React, { Component } from "react";
import CommonHelper from "../../utils/Helper";
import { connect } from "react-redux";
import LoginContent from "./Login";

const helper = new CommonHelper();

class Login extends Component {
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  handleUserLogin = () => {
    const { userName, password } = this.state;
    if (userName && password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: { username: userName, password }
      });
      this.props.history.push("/user");
    }
  };
  render() {
    return (
      <div>
        <LoginContent
          {...this.props}
          {...this.state}
          userLogin={this.handleUserLogin}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Login);
