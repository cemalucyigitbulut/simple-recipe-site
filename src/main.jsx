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
import Navbar from "./Components/Navbar";
import "./Css/Home.css";
import Weekly from "./WeeklyMenu";
import Footer from "./Components/Footer";


const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/> 
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
        path: "/weekly",
        element: <Weekly/>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
