import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { loadDevTools } from "jira-dev-tool";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
loadDevTools(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
