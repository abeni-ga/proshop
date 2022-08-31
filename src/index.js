import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const token = localStorage.getItem("Token");

const link = new HttpLink({
  uri: "https://limboback.herokuapp.com/api/v1",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

reportWebVitals();
