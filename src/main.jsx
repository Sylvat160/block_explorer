import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalContextProvider } from "./context/index.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router>
        <App />
      </Router>
    </GlobalContextProvider>
  </React.StrictMode>
);
