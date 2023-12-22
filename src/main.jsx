import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signin from './pages/Signin.jsx'

const router =createBrowserRouter([
  {
    path:"/next-app/",
    element:<App/>,
    children:[
      {
        path:"/next-app/",
        element:<Login />
      },
      {
        path:"/next-app/signin",
        element:<Signin />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
