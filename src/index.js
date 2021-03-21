import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ShoesProvider } from "./context/ShoesContext";

ReactDOM.render(
  <React.StrictMode>
    <ShoesProvider>
      <App />
    </ShoesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
