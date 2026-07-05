import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { router } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="750544393804-pj86bmv70eo8m5fccq5si1v1365b0seu.apps.googleusercontent.com">
      <CssBaseline />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);