import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { Container } from "@mui/material";
import theme from "./styles/themes";
import Appbar from "./components/header/appbar";
import AppDrawer from "./components/header/drawer";
import { UIProvider } from "./components/header/ui-context";
import { Outlet } from "react-router";
import Footer from "./components/Footer/footer";
import Slider from "./components/Slider/hero-slider";
import AboutUs from "./components/AboutUs/about-us";
import CampaignSection from "./components/campaignsec";
import NGOLists from "./components/NGOLists";
import TrackComplaint from "./components/trackComplaint.tsx";


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return null;
}

export default App;
