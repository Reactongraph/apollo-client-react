import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import Store from "./redux/Store";
import * as serviceWorker from "./serviceWorker";
import Routes from "./routes";
import client from "./redux/ApolloClient";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={Store}>
      <Routes />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
