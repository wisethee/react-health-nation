import React from "react";
import ReactDOM from "react-dom/client";

// Importing the BrowserRouter component from react-router-dom
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./app/core/contexts/user";
import { DataProvider } from "./app/core/contexts/data";

// Importing the App component
import App from "./app/app";
import ScrollToTop from "./app/core/layout/scroll/scroll";

// Importing the main CSS files
import "./styles/tailwind.css";
import "./styles/main.css";
import { CheckoutProvider } from "./app/core/contexts/checkout";

// Rendering the App component inside the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DataProvider>
          <CheckoutProvider>
            <ScrollToTop />
            <App />
          </CheckoutProvider>
        </DataProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
