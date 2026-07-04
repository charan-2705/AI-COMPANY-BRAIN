/*import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard"; // Uncomment only if Dashboard.jsx exists

// Protected Route
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" replace />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },

  {
    path: "/upload",
    element: (
      <PrivateRoute>
        <Upload />
      </PrivateRoute>
    ),
  },

  {
    path: "/chat",
    element: (
      <PrivateRoute>
        <Chat />
      </PrivateRoute>
    ),
  },

  {
    path: "/documents",
    element: (
      <PrivateRoute>
        <Documents />
      </PrivateRoute>
    ),
  },

  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);*/
import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";

// Temporary PrivateRoute for frontend testing
const PrivateRoute = ({ children }) => {
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },

  {
    path: "/upload",
    element: (
      <PrivateRoute>
        <Upload />
      </PrivateRoute>
    ),
  },

  {
    path: "/chat",
    element: (
      <PrivateRoute>
        <Chat />
      </PrivateRoute>
    ),
  },

  {
    path: "/documents",
    element: (
      <PrivateRoute>
        <Documents />
      </PrivateRoute>
    ),
  },

  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
]);