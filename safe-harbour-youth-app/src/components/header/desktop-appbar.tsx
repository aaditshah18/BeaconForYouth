import React from "react";
import { Link } from "react-router-dom";
import { Button, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  AppbarContainer,
  MyList,
  Logo,
  TopbarContainer,
} from "../../styles/appbar-styles";
import logoImage from "../../../public/images/logo.png";

const ElevatedButton = styled(Button)({
  borderRadius: "20px",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "center",
  color: "var(--white)",
  marginLeft: "auto", // Merged style to align it right as per main branch suggestion
  boxShadow:
    "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  "&:hover": {
    backgroundColor: "green",
  },
});

const StyledListItemText = styled("span")({
  display: "inline-block",
  padding: "6px 12px",
  "&:hover": {
    color: "var(--primary)",
    cursor: "pointer",
  },
});

const StyledLoginButton = styled(Button)({
  "&:hover": {
    backgroundColor: "var(--secondary)",
    color: "var(--white)",
  },
  textDecoration: "none", // Maintaining no text decoration from the main branch
  marginTop: "3px",
  marginBottom: "3px",
});

const DonateButton = styled(Button)({
  backgroundColor: "var(--red)",
  color: "var(--white)",
  "&:hover": {
    backgroundColor: "var(--danger)",
  },
  borderRadius: "20px",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "20px",
  marginTop: "3px",
  marginBottom: "3px",
});

export default function DesktopAppBar() {
  return (
    <>
      <TopbarContainer>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <StyledLoginButton variant="outlined" color="secondary">
            Login
          </StyledLoginButton>
          <DonateButton variant="contained" startIcon={<FavoriteIcon />}>
            Donate
          </DonateButton>
        </div>
      </TopbarContainer>
      <AppbarContainer>
        <Logo>
          <img src={logoImage} alt="Logo" style={{ width: "100%" }} />
        </Logo>
        <MyList type="row">
          <Link to="home" style={{ textDecoration: "none" }}>
            <StyledListItemText>Home</StyledListItemText>
          </Link>
          <Link to="about" style={{ textDecoration: "none" }}>
            <StyledListItemText>About</StyledListItemText>
          </Link>
          <StyledListItemText>Complaints</StyledListItemText>
          <StyledListItemText>NGO</StyledListItemText>
          <StyledListItemText>Resources</StyledListItemText>
          <StyledListItemText>Donate</StyledListItemText>
        </MyList>
        <div style={{ marginLeft: "auto" }}>
          <Link to="../complaintform" style={{ textDecoration: "none" }}>
            <ElevatedButton variant="contained" color="secondary">
              File a complaint
            </ElevatedButton>
          </Link>
        </div>
      </AppbarContainer>
    </>
  );
}
