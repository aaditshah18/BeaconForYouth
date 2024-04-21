import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/footer";
import Appbar from "../components/header/appbar";
import AppDrawer from "../components/header/drawer";
import { UIProvider } from "../components/header/ui-context";
import theme from "../styles/themes";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} sx={{ background: "#fff" }} disableGutters>
        <UIProvider>
          <Appbar />
          <AppDrawer />
          <Outlet />
        </UIProvider>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
