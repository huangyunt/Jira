import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { loadDevTools } from "jira-dev-tool";
import { AppProviders } from "./context/index";
import "antd/dist/antd.less";

loadDevTools(() =>
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  )
);
