import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import LoginForm from "./components/Auth/LoginForm.jsx";
import Signup from "./components/Auth/Signup.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginForm />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);