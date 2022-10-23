import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextWrapper from "./context/context-wrapper";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>
);

reportWebVitals();
