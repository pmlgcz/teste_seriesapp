import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import Home from './routes/Home/Home';
import  Catalogo  from './routes/Catalogo/catalogo';
import Cadastro from './routes/Cadastro/Cadastro';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalogo",
        element: <Catalogo/>
      },
      {
        path: "/planos",
        element: <Planos />
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
