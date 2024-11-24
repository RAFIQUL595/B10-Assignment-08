import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

import AllProducts from "./components/AllProducts/AllProducts.jsx";
import Computers from "./components/Computers/Computers.jsx";
import ViewDetails from "./components/ViewDetails/ViewDetails.jsx";
import Phones from "./components/Phones/Phones.jsx";
import SmartWatches from "./components/SmartWatches/SmartWatches.jsx";
import Chargers from "./components/Chargers/Chargers.jsx";
import MacBook from "./components/MacBook/MacBook.jsx";
import PowerBanks from "./components/PowerBanks/PowerBanks.jsx";
import Accessories from "./components/Accessories/Accessories.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import { Navigate } from "react-router-dom";
import Error from "./components/Error/Error.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import { toast, Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("/products.json"),
            element: <AllProducts></AllProducts>,
          },
          {
            path: "/products",
            loader: () => fetch("/products.json"),
            element: <AllProducts></AllProducts>,
          },
          {
            path: "/computers",
            loader: () => fetch("/products.json"),
            element: <Computers></Computers>,
          },
          {
            path: "/phones",
            loader: () => fetch("/products.json"),
            element: <Phones></Phones>,
          },
          {
            path: "/smartwatches",
            loader: () => fetch("/products.json"),
            element: <SmartWatches></SmartWatches>,
          },
          {
            path: "/chargers",
            loader: () => fetch("/products.json"),
            element: <Chargers></Chargers>,
          },
          {
            path: "/macbooks",
            loader: () => fetch("/products.json"),
            element: <MacBook></MacBook>,
          },
          {
            path: "/powerbanks",
            loader: () => fetch("/products.json"),
            element: <PowerBanks></PowerBanks>,
          },
          {
            path: "/accessories",
            loader: () => fetch("/products.json"),
            element: <Accessories></Accessories>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "",
            element: <Navigate to="cart" replace />,
          },
          {
            path: "cart",
            element: <Cart></Cart>,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/viewdetails/:productId",
        element: <ViewDetails></ViewDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
