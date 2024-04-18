import React from "react";
import { AppbarContainer, MyList, Logo } from "../../styles/appbar-styles";
import logoImage from "../../../public/images/logo.png";
import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const ElevatedButton = styled(Button)({
  borderRadius: "20px", // Set border radius to make ends rounded
  padding: "10px 20px", // Add padding for better button appearance
  display: "flex",
  justifyContent: "center",
  color: "var(--white)",
  marginLeft: "20px", // Added from main branch
  boxShadow:
    "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)", // Add elevation (shadow)
  "&:hover": {
    backgroundColor: "green", // Change background color on hover
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
    <AppbarContainer>
      <Logo>
        <img src={logoImage} alt="Logo" style={{ width: "100%" }} />
      </Logo>
      <MyList type="row">
        <StyledListItemText>Home</StyledListItemText>
        <StyledListItemText>About</StyledListItemText>
        <StyledListItemText>Complaints</StyledListItemText>
        <StyledListItemText>NGO</StyledListItemText>
        <StyledListItemText>Resources</StyledListItemText>
        <StyledListItemText>Donate</StyledListItemText>
      </MyList>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <StyledLoginButton variant="outlined" color="secondary">
          Login
        </StyledLoginButton>
      </Link>
      <Link to="../complaintform" style={{ textDecoration: "none" }}>
        {/* Update the to prop to the route path */}{" "}
        <ElevatedButton variant="contained" color="secondary">
          File a complaint{" "}
        </ElevatedButton>{" "}
      </Link>
    </AppbarContainer>
  );
}

//
