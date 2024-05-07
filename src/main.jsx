import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Videos from './Videos.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { videosLoader } from './loaders'

const routes = [
  {
    element: <App />,
    path: '/',
    children: [
      { 
        index: true,
        element: <Home />
      },
      {
        element: <Videos />,
        path: 'videos',
        loader: videosLoader
      }
    ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
