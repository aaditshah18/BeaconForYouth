import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileAppBar from "./mobile-appbar";
import DesktopAppBar from "./desktop-appbar";

export default function Appbar(){

    const theme = useTheme();
     const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
         {matches ? <MobileAppBar /> : <DesktopAppBar />}
        </>

      );

}