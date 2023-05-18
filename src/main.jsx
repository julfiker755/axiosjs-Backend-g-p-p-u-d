import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Add from './components/Add/Add.jsx';
import User from './components/User/User.jsx';
import Update from './components/Update/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    children:[
      {
        path:'/add',
        element:<Add></Add>,
      },{
        path:'/user',
        element:<User></User>
      },
      {
        path:'/update/:id',
        element:<Update></Update>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
