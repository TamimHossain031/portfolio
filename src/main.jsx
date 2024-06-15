import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {SingleDataProvider} from "./Context/Provider/SingleDataProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SingleDataProvider>
      <App />
    </SingleDataProvider>
  </React.StrictMode>
);
