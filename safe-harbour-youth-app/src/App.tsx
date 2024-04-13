import { ThemeProvider } from "@mui/system";
import "./App.css"; // Importing the CSS file
import { useEffect } from "react";
import { Container } from "@mui/material";
import theme from "./styles/themes";
import Appbar from "./components/appbar";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./components/ui-context";
import AboutUs from "./components/Aboutus.tsx";
import CampaignSection from "./components/campaignsec.tsx";
// import ComplaintForm from "./components/ComplaintForm.tsx";

function App() {
  console.log("App component is rendering");

  useEffect(() => {
    console.log("Changing title");
    document.title = "SafeHarbourYouth";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <UIProvider>
          <Appbar />
          {/* <ComplaintForm
            handleClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          /> */}
          <AboutUs />
          <CampaignSection />

          <AppDrawer />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
