import React from "react";
import { Query } from "react-apollo";
import User from "../../redux/Query/User";
import { gql } from "apollo-boost";

const user = new User();

const UserContent = ({ logout }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return (
      <Query
        query={gql`
          ${user.user()}
        `}
        variables={{ token }}
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
                    <button onClick={logout}>Logout</button>
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
