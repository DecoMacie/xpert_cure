import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HospitalInformation from "./components/HospitalInformation";
import DocumentUpload from "./components/DocumentUpload";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/HospitalInformation",
    element: <HospitalInformation />,
  },
  {
    path: "/HospitalInformation/DocumentUpload",
    element: <DocumentUpload />,
  },
]);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);
