import { useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import { styled } from "@mui/system";
import { useUIContext } from "./ui-context";
import { DrawerCloseButton } from "../../styles/appbar-styles";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonationForm from "../DonationForm";

const stripePromise = loadStripe(
  "pk_test_51P6e09Lt7UXFQWObdOjFW2xh0kGU6fFi3MKNpa11OS29aFwlJpBiRO2G17mqNIWT6AYX9q083TpcKKgBiDjjZVcS00R0h1T9LL"
);

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon sx={{ fontSize: "2.5rem", color: "white" }} />
        </DrawerCloseButton>
      )}
      <Drawer anchor="right" open={drawerOpen}>
        <List>
          <ScrollLink to="carouselExampleIndicators" style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemText primary={t('Home')} />
            </ListItemButton>
          </ScrollLink>
          <MiddleDivider />
          <ScrollLink to="about" style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemText primary={t('About')} />
            </ListItemButton>
          </ScrollLink>
          <MiddleDivider />
          <ScrollLink to="NGO" style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemText primary={t('NGO')} />
            </ListItemButton>
          </ScrollLink>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText primary={t('Resource')} />
          </ListItemButton>
          <MiddleDivider />
          <Button variant="contained" sx={{ ...styles }} onClick={handleOpen}>
            {t('Donate')}
          </Button>
          <MiddleDivider />
          <RouterLink to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ ...styles }}>
              {t('Login')}
            </Button>
          </RouterLink>
          <MiddleDivider />
          <RouterLink to="/complaintform" style={{ textDecoration: "none" }}>
            <Button variant="contained" sx={{ ...styles }}>
              {t('File a Complaint')}
            </Button>
          </RouterLink>
          <MiddleDivider />
        </List>
      </Drawer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('Donate to Our Cause')}</DialogTitle>
        <DialogContent>
          <Elements stripe={stripePromise}>
            <DonationForm onClose={handleClose} />
          </Elements>
        </DialogContent>
      </Dialog>
    </>
  );
}

const styles = {
  color: "primary",
  backgroundColor: "var(--white)",
  "&:hover": {
    backgroundColor: "var(--orange)",
    color: "var(--white)",
  },
  marginTop: "10px",
  marginBottom: "10px",
  marginLeft: "10px",
  paddingLeft: "15px",
};