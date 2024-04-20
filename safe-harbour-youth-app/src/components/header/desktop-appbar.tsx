import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  styled,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DonationForm from "../DonationForm";
import {
  AppbarContainer,
  MyList,
  Logo,
  TopbarContainer,
} from "../../styles/appbar-styles";
import logoImage from "../../../public/images/logo.png";
const stripePromise = loadStripe(
  "pk_test_51P6e09Lt7UXFQWObdOjFW2xh0kGU6fFi3MKNpa11OS29aFwlJpBiRO2G17mqNIWT6AYX9q083TpcKKgBiDjjZVcS00R0h1T9LL"
);

const ElevatedButton = styled(Button)({
  borderRadius: "20px",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "center",
  color: "var(--white)",
  marginLeft: "auto",
  boxShadow:
    "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  "&:hover": { backgroundColor: "green" },
});

const StyledListItemText = styled("span")({
  display: "inline-block",
  padding: "6px 12px",
  "&:hover": { color: "var(--primary)", cursor: "pointer" },
});

const StyledLoginButton = styled(Button)({
  "&:hover": {
    backgroundColor: "var(--secondary)",
    color: "var(--white)",
  },
  textDecoration: "none",
  marginTop: "3px",
  marginBottom: "3px",
});

const DonateButton = styled(Button)({
  backgroundColor: "var(--red)",
  color: "var(--white)",
  "&:hover": { backgroundColor: "var(--danger)" },
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <TopbarContainer>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <RouterLink to="/login" style={{ textDecoration: "none" }}>
            <StyledLoginButton variant="outlined" color="secondary">
              Login
            </StyledLoginButton>
          </RouterLink>
          <DonateButton
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={handleOpen}
          >
            Donate
          </DonateButton>
        </div>
      </TopbarContainer>
      <AppbarContainer>
        <Logo>
          <img src={logoImage} alt="Logo" style={{ width: "100%" }} />
        </Logo>
        <MyList type="row">
          <ScrollLink
            to="carouselExampleIndicators"
            style={{ textDecoration: "none" }}
          >
            <StyledListItemText>Home</StyledListItemText>
          </ScrollLink>
          <ScrollLink to="about" style={{ textDecoration: "none" }}>
            <StyledListItemText>About</StyledListItemText>
          </ScrollLink>
          <StyledListItemText>NGOs</StyledListItemText>
          <StyledListItemText>Resources</StyledListItemText>
        </MyList>
        <div style={{ marginLeft: "auto" }}>
          <RouterLink to="/complaintform" style={{ textDecoration: "none" }}>
            <ElevatedButton variant="contained" color="secondary">
              File a complaint
            </ElevatedButton>
          </RouterLink>
        </div>
      </AppbarContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Donate to Our Cause</DialogTitle>
        <DialogContent>
          {/* Ensure Elements wraps DonationForm */}
          <Elements stripe={stripePromise}>
            <DonationForm onClose={handleClose} />
          </Elements>
        </DialogContent>
      </Dialog>
    </>
  );
}
