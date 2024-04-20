import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginForm from "./pages/login-form";
import Register from "./pages/register";
import ComplaintForm from "./components/complaintform";
import ngodetail from "./components/ngoInnerpage/ngodetail";

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
{
    path: "ngoInnerpage/ngodetail",
    Component: ngodetail,
}
]);

export default router;
