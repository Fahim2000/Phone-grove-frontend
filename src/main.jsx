import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import AddProduct from "./components/AddProduct.jsx";


import Phones from "./components/Phones.jsx";
import PhoneDetails from "./components/PhoneDetails.jsx";
import UpdatePhone from "./components/UpdatePhone.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/phone/:brand",
        element: <Phones></Phones>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/productdetail/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productdetail/${params.id}`),
      },
        {
    path: '/updatePhone/:id', 
    element: <UpdatePhone></UpdatePhone>, 
    loader: ({params}) => fetch(`http://localhost:5000/singlePhone/${params.id}`)
  },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
