// support explorer 11
import "react-app-polyfill/ie11";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./stylesheets/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
