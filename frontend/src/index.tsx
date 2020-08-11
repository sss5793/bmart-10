// support explorer 11
import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import "./stylesheets/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
