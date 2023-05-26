import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from "./routes/root";
import Index from './routes';
import Hosting from './routes/hosting';
import Features from './routes/features';
import Email from './routes/email';
import Domains from './routes/domains';
import NameGenerator from './routes/nameGenerator';
import WebsiteBuilder from './routes/websiteBuilder';
import CreateBlog from './routes/createBlog';
import Pricing from './routes/pricing';
import LogoMaker from './routes/logoMaker';
import Google from './routes/google';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Index />
      },
      {
        path: "hosting",
        element: <Hosting />
      },
      {
        path: "features",
        element: <Features />
      },
      {
        path: "professional-email",
        element: <Email />
      },
      {
        path: "domains",
        element: <Domains />
      },
      {
        path: "business-name-generator",
        element: <NameGenerator />
      },
      {
        path: "website-builder",
        element: <WebsiteBuilder />
      },
      {
        path: "create-blog",
        element: <CreateBlog />
      },
      {
        path: "pricing",
        element: <Pricing />
      },
      {
        path: "logo-maker",
        element: <LogoMaker />
      },
      {
        path: "google",
        element: <Google />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
