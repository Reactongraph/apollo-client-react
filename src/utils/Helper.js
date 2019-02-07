import client from "../redux/ApolloClient";
class CommonHelper {
  isEmailValidate(fieldName, data) {
    let hasError = false;
    let message = "";
    let isVerified = false;

    const EMAILREGEX = /\S+@\S+\.\S+/;
    if (fieldName === "email" && (data === "" || typeof data === "undefined")) {
      message = "Email I'D required";
      hasError = true;
      isVerified = false;
      return { hasError, message, isVerified };
    } else if (fieldName === "email" && !EMAILREGEX.test(data)) {
      message = "Please Enter a valid Email Address";
      hasError = true;
      isVerified = false;
      return { hasError, message, isVerified };
    } else {
      message = "";
      hasError = false;
      isVerified = true;
      return { hasError, message, isVerified };
    }
  }

  isPasswordValidate(data) {
    let hasError = false;
    let message = "";
    let isVerified = false;
    if (data === "" || typeof data === "undefined") {
      message = "Password Required";
      hasError = true;
      return { hasError, message, isVerified };
    } else if (data.length < 5) {
      message = "Password length should be greater than 5";
      hasError = true;
      return { hasError, message, isVerified };
    } else if (
      !/[a-z]/.test(data) ||
      !/[A-Z]/.test(data) ||
      !/[0-9]/.test(data) ||
      !/[_!@#\$%\^&]/.test(data)
    ) {
      message = "Should be a valid Password!";
      hasError = true;
      return { hasError, message, isVerified };
    } else {
      message = "";
      hasError = false;
      isVerified = true;
      return { hasError, message, isVerified };
    }
  }

  isUserLoggedIn() {
    if (localStorage.getItem("access_token")) return true;
    else return false;
  }

  store(token) {
    localStorage.setItem("token", token);
  }

  clearStorage() {
    localStorage.clear();
  }

  reserGraphQL() {
    client.resetStore();
  }

  clearStore(_this) {
    _this.props.dispatch({ type: "LOGOUT" });
  }

  logout(_this) {
    this.clearStorage();
    this.reserGraphQL();
    this.clearStore(_this);
  }
}

export default CommonHelper;
