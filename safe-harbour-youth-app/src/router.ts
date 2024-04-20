import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import ComplaintForm from "./components/complaintform";
import ngodetail from "./components/ngoInnerpage/ngodetail";
import CampaignsPage from "./components/resource/campaingdetail";

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
},
{
  path: "resource/campaingdetail",
  Component: CampaignsPage,
}
]);

export default router;
