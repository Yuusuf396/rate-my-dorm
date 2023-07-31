// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
  // Route,
  // Link,
} from "react-router-dom";
import HostelDescription from './pages/[schoolId].jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "Dorm",
    element: <div>About</div>,
  },
  {
    path: "dorm/:schoolId",
    element: <HostelDescription/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  ,
)
