/* eslint-disable no-unused-vars */
import React from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
