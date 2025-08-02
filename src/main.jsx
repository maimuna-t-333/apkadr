import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './MainLayout/MainLayout.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'services',
        element:<Services></Services>
      },
      {
        path: "contact",
        element:<Contact></Contact>
      }
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
