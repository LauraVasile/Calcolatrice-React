
import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

const rootElement = document.getElementById("App");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);