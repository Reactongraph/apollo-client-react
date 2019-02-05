import React from "react";
import "./style.css";

const Login = ({ onChange, userLogin }) => {
  return (
    <div className="container">
      <div className="child-container">
        <div>
          <div className="field">
            UserName: <input onChange={onChange} name="userName" />
          </div>
          <div className="field">
            Password: <input onChange={onChange} name="password" />
          </div>
        </div>
        <button onClick={userLogin}>Login</button>
      </div>
    </div>
  );
};
export default Login;
