import React from "react";
import User from "../../redux/Query/User";
import { Mutation, Query } from "react-apollo";
import { gql } from "apollo-boost";

const user = new User();

const Signup = ({
  name,
  userName,
  password,
  email,
  phoneNo,
  onChange,
  userSignup
}) => {
  const variables = {
    name,
    username: userName,
    email,
    phone_no: phoneNo,
    password
  };
  return (
    <Mutation
      mutation={gql`
        ${user.createUser()}
      `}
      onCompleted={userSignup}
    >
      {(userSignup, { loading, error, data }) =>
        !loading && (
          <div className="container">
            <div className="child-container">
              <div>
                <div className="field">
                  Name: <input onChange={onChange} name="name" />
                </div>
                <div className="field">
                  UserName: <input onChange={onChange} name="userName" />
                </div>
                <div className="field">
                  Password: <input onChange={onChange} name="password" />
                </div>
                <div className="field">
                  Email: <input onChange={onChange} name="email" />
                </div>
                <div className="field">
                  Phone No: <input onChange={onChange} name="phoneNo" />
                </div>
              </div>
              <button onClick={() => userSignup({ variables })}>Signup</button>
            </div>
          </div>
        )
      }
    </Mutation>
  );
};

export default Signup;
