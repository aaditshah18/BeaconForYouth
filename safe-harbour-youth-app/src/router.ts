import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import ComplaintForm from "./components/complaintform";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/complaintform",
    Component: ComplaintForm,
  },
]);

export default router;
