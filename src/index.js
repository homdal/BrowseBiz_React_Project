import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";

axios.defaults.baseURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";
axios.interceptors.request.use((config) => {
  const tokenLocal = localStorage.getItem("token");
  const tokenSession = sessionStorage.getItem("token");
  if (tokenLocal) {
    config.headers["x-auth-token"] = tokenLocal;
  } else if (tokenSession) {
    config.headers["x-auth-token"] = tokenSession;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
