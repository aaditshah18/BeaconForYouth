import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from "react-router-dom";
import { Button, styled } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link as ScrollLink } from "react-scroll";
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
  const { t } = useTranslation();
  const stripeLink = "https://buy.stripe.com/test_5kA7wl8E20n33dK4gg"; // Stripe payment link URL here

  const handleDonateClick = () => {
    window.open(stripeLink, "_blank"); // Opens the Stripe payment link in a new tab
  };

  return (
    <>
      <TopbarContainer>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <RouterLink to="/login" style={{ textDecoration: "none" }}>
            <StyledLoginButton variant="outlined" color="secondary">
              {t('Login')}
            </StyledLoginButton>
          </RouterLink>
          <DonateButton
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={handleDonateClick}
          >
            {t('Donate')}
          </DonateButton>
        </div>
      </TopbarContainer>
      <AppbarContainer>
        <Logo>
          <img src={logoImage} alt={t('Logo')} style={{ width: "100%" }} />
        </Logo>
        <MyList type="row">
          <ScrollLink to="carouselExampleIndicators" style={{ textDecoration: "none" }}>
            <StyledListItemText>{t('Home')}</StyledListItemText>
          </ScrollLink>
          <ScrollLink to="about" style={{ textDecoration: "none" }}>
            <StyledListItemText>{t('About')}</StyledListItemText>
          </ScrollLink>
          <RouterLink to="../ngoInnerpage/ngodetail" style={{ textDecoration: "none", color: "inherit" }}>
            <StyledListItemText>{t('NGO')}</StyledListItemText>
          </RouterLink>
          <RouterLink to="../resource/campaingdetail" style={{ textDecoration: "none", color: "inherit" }}>
            <StyledListItemText>{t('Resource')}</StyledListItemText>
          </RouterLink>
        </MyList>
        <div style={{ marginLeft: "auto" }}>
          <RouterLink to="/complaintform" style={{ textDecoration: "none" }}>
            <ElevatedButton variant="contained" color="secondary">
              {t('File a Complaint')}
            </ElevatedButton>
          </RouterLink>
        </div>
      </AppbarContainer>
    </>
  );
}
