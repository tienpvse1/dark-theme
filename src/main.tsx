import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const theme = {
  dark: "antd.dark.css",
  light: "antd.css",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={theme} defaultTheme="light">
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
