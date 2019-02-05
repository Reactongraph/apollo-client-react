import React from "react";
import { Query } from "react-apollo";
import User from "../../redux/Query/User";
import { gql } from "apollo-boost";

const user = new User();

const UserContent = props => {
  const { data } = props.login;
  let loginStatus = props.login.status;
  const { createUser } = props.signup;
  let signupStatus = props.signup.status;
  if (loginStatus === "success" || signupStatus === "success") {
    const { username, password } =
      data && data.user[0] ? data.user[0] : createUser;
    return (
      <Query
        query={gql`
          ${user.user()}
        `}
        variables={{ username, password }}
      >
        {({ loading, error, data }) => {
          let user = data && data.user && data.user[0];
          return (
            !loading &&
            user && (
              <div className="container">
                <div className="child-container">
                  <div>
                    <div className="field">
                      name: <div>{user.name}</div>
                    </div>
                    <div className="field">
                      UserName <div>{user.username}</div>
                    </div>
                    <div className="field">
                      Email: <div>{user.email}</div>
                    </div>
                    <div className="field">
                      Phone No: <div>{user.phone_no}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          );
        }}
      </Query>
    );
  }
  return <div>Please Try Again!</div>;
};

export default UserContent;
