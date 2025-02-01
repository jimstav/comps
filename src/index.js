import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { NavigationProvider } from "./context/navigation.js";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
