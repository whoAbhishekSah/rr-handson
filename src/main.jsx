import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader, action as rootAction }  from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contacts'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root />, 
    errorElement:<ErrorPage />, 
    loader: rootLoader,
    action: rootAction,
    children:[
      {
        path: "contacts/:contactId", 
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
