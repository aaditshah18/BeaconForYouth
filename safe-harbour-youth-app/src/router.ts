import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Register from "./pages/register";
import ComplaintForm from "./components/complaintform";
import ngodetail from "./components/ngoInnerpage/ngodetail";
import CampaignsPage from "./components/resource/campaingdetail";
import NGOAdminPanel from "./components/ngodashboard/ngohome";
import CampaignMenu from "./components/ngodashboard/ngocampaign";
import HomeLayout from "./pages/home-layout";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/home",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "ngoInnerpage/ngodetail",
        Component: ngodetail,
      },
      {
        path: "resource/campaingdetail",
        Component: CampaignsPage,
      },
    ]
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
  path: "/home/ngodashboard/ngohome",
  Component: NGOAdminPanel,
},

{
  path: "ngodashboard/ngocampaign",
  Component: CampaignMenu,
},

]);

export default router;
