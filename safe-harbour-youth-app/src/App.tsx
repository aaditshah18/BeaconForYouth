import { ThemeProvider } from "@mui/system";
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

function App() {
  console.log("App component is rendering");

  useEffect(() => {
    console.log("Changing title");
    document.title = "SafeHarbourYouth";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}  sx={{ background: "#fff" }} disableGutters>
        <UIProvider>
          <Appbar />
          <AppDrawer />
          <Outlet></Outlet>
        </UIProvider>
        <Slider />
        <AboutUs />
        <CampaignSection />
        <NGOLists />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
