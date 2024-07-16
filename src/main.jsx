import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Resume from './components/Resume.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Navbar />
      },
      {
        path: "cv",
        element: <Resume />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactProvider router={router}/>
  </React.StrictMode>,
)
