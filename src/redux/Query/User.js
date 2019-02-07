class User {
  // Query
  users = () => `
    {
      users {
        name
        username
        phone_no
        email
      }
    }
  `;
  user = () => `
    query User($token: String!){
      user(token:$token) {
        name
        username
        phone_no
        email
      }
    }
  `;
  login = () => `
    query Login($username: String!, $password: String!){
      login(username:$username, password:$password ) {
        name
        username
        phone_no
        email
        token
      }
    }
    `;

  // Mutation
  createUser = () => `mutation CreateUser($name:String!, $username:String!, $password:String!, $phone_no: String!, $email: String!){
    register(name:$name, username:$username, password:$password, phone_no:$phone_no, email:$email){
      name, username, phone_no, email, token
    }
  }`;
}

export default User;
