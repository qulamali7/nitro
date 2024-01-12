import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import SearchProvider from "./context/SearchContext";
import WishlistProvider from "./context/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SearchProvider>
       <WishlistProvider>
       <App />
       </WishlistProvider>
      </SearchProvider>
    </HelmetProvider>
  </React.StrictMode>
);
