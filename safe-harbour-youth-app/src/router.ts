import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginForm from "./pages/login-form";
import Register from "./pages/register";
import ComplaintForm from "./components/complaintform";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: LoginForm,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/complaintform",
    Component: ComplaintForm,
  },
]);

export default router;
