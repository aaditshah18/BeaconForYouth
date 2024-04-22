import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AdminDesktopAppBar from "./desktop-adminappbar";
import AdminMobileAppBar from "./mobile-adminappbar";

export default function AdminAppbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <AdminMobileAppBar /> : <AdminDesktopAppBar />}</>;
}