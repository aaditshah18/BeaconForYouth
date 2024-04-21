import { IconButton, List, ListProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

interface StyledListProps extends ListProps {
  type: "row" | "block"; // Define the valid types for the prop
}

//container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "2px 0px",
  margin: "0px",
  height: "85px",
  boxSizing: "border-box",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 1100,
  background: "var(--white)",
  boxShadow:
    "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
}));

export const TopbarContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  padding: "2px 0px",
  margin: "0px",
  boxSizing: "border-box",
  background: "var(--dark)",
}));

// Logo container
export const Logo = styled(Box)(() => ({
  width: "120px",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "80px",
}));

export const MyList = styled(List)<StyledListProps>(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
}));

export const ActionIconContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const ActionIconContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: "white",
  position: "fixed",
  botton: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  boarderTop: "1px solid ${primary}",
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "fixed",
  top: 10,
  right: "250px",
  zIndex: 2999,
  color: "white",
}));
