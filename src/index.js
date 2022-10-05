import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { store } from "./stores/rootStore";
import "./assets/styles/css/index.css";
import { Provider } from "react-redux";
import React from "react";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "http://192.168.1.70:3443";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
