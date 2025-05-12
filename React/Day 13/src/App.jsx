import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Listing from './components/Listing'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

export default function App() {
  const routers = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/:categorySlug?",
            element: <Listing />
          },
          {
            path: "/details/:productId",
            element: <ProductDetails />
          },
          {
            path: "/cart",
            element: <Cart />
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={routers} />
  )
}
