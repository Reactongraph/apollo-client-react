import React, { Component } from "react";
import { connect } from "react-redux";
import UserContent from "./user";

class User extends Component {
  render() {
    return <UserContent {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(User);
