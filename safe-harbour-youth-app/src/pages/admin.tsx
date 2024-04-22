import { ThemeProvider } from "@mui/system";
import "../App.css";
import { useEffect } from "react";
import { Container } from "@mui/material";
import theme from "./../styles/themes";
import AdminAppbar from "../components/header/admin-appbar";
import AdminContent from "../components/admin-content"
import DesktopAppBar from "../components/header/desktop-appbar";
import AdminDesktopAppBar from "../components/header/desktop-adminappbar";



export default function Admin() {
    useEffect(() => {
        console.log("Changing title");
        document.title = "SafeHarbourYouth";
      }, []);
    return(
        <ThemeProvider theme={theme}>
            <Container maxWidth={false} sx={{ background: "#fff", padding: 0, margin: 0, maxWidth: '100vw', height: '100vh' }} disableGutters>
            <AdminAppbar />
        <AdminContent />
      </Container>

        </ThemeProvider>
    );

}