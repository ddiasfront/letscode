import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const loadApp = async () => {
  try {
    const token = await axios.post("http://localhost:3333/login/", {
      login: "letscode",
      senha: "lets@123",
    });
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.headers = {
          Authorization: token.data
        };
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch {
    window.alert("Erro ao fazer login");
  }
};

loadApp();
