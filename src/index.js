import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import WorkDetail, { loader as projectLoader } from "./pages/workDetail";
import DummyWorkDetail from "./pages/DummyWorkDetail";
import ErrorPage from "./pages/error";
import Work, { loader as workLoader } from "./pages/work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Work />, loader: workLoader },
      {
        path: "/project/:projectId",
        element: <WorkDetail />,
        loader: projectLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dummy-project",
        element: <DummyWorkDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
