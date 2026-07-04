import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Chat from "./pages/Chat";
import Documents from "./pages/Documents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
]);