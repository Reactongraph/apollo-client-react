import React, { Component } from "react";
import CommonHelper from "../../utils/Helper";
import { connect } from "react-redux";
import SignupContent from "./SignupForm";

const helper = new CommonHelper();

class Signup extends Component {
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  handleUserSignup = data => {
    const { name, userName, password, email, phoneNo } = this.state;
    if (name && userName && password && email && phoneNo) {
      this.props.dispatch({
        type: "SIGNUP_SUCCESS",
        payload: data
      });
      this.props.history.push("/user");
    }
  };

  render() {
    return (
      <div>
        <SignupContent
          {...this.props}
          {...this.state}
          userSignup={this.handleUserSignup}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Signup);
