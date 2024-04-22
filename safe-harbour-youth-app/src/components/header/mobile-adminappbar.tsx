import { AppbarContainer, Logo } from "../../styles/appbar-styles";
import logoImage from "../../../public/images/logo.png";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useUIContext } from "./ui-context";

export default function AdminMobileAppBar() {
  const { setDrawerOpen } = useUIContext();

  return (
    <AppbarContainer style={{ justifyContent: "space-between" }}>
      <Logo>
        <img src={logoImage} alt="Logo" style={{ width: "100%" }} />
      </Logo>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
    </AppbarContainer>
  );
}
