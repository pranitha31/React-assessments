import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import {PostProvider} from "./contexts/PostContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./Styles.css"

ReactDom.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <PostProvider>
      <App />
    <PostProvider>
  <ThemeProvider>
);