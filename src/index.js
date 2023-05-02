import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "../src/routes/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App />
  </>,
  rootElement
);
