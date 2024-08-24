
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from "./App";
import "./index.css"
import Tvshow from "./pages/Tvshow";
import Movies from "./pages/Movies";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },

  {
     path:"tvshow",
     element:(<Tvshow/>)
  },

  {
    path:"movies",
    element:(
      
    <Movies/>)
  },
 


]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);