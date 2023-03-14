import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import './Home.css'
import First from "./First";


const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
    
      {
        path: "/first",
        element: <First/>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
