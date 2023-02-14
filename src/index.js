import React from "react";
import ReactDOM from "react-dom/client";

// Importing the BrowserRouter component from react-router-dom
import { BrowserRouter } from "react-router-dom";

// Importing the App component
import App from "./app/app";

// Importing the main CSS files
import "./styles/tailwind.css";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
