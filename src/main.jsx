import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/index.css";

import AppRouter from "./routes";
import { store } from "./utils/redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
