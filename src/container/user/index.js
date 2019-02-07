import React, { Component } from "react";
import { connect } from "react-redux";
import UserContent from "./user";
import CommonHelper from "../../utils/Helper";

const Helper = new CommonHelper();

class User extends Component {
  logout = () => {
    Helper.logout(this);
    this.props.history.push("/");
  };

  render() {
    return <UserContent {...this.props} logout={this.logout} />;
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(User);
