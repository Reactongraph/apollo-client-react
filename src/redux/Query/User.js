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
  query User($username: String!, $password: String!){
    user(username:$username, password:$password ) {
      name
      username
      phone_no
      email
      password
    }
  }
`;

  // Mutation
  createUser = () => `mutation CreateUser($name:String!, $username:String!, $password:String!, $phone_no: String!, $email: String!){
    createUser(name:$name, username:$username, password:$password, phone_no:$phone_no, email:$email){
      id, name, username, phone_no, email, password
    }
  }`;
}

export default User;
