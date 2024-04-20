import React, { useState } from "react";
import { Box, Button, Grid, List, ListItemText, Stack, Typography, Dialog, DialogTitle, DialogContent} from "@mui/material";
import { FooterTitle, SubscrieTF } from "../../styles/footer-styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonationForm from "../DonationForm";


const stripePromise = loadStripe(
  "pk_test_51P6e09Lt7UXFQWObdOjFW2xh0kGU6fFi3MKNpa11OS29aFwlJpBiRO2G17mqNIWT6AYX9q083TpcKKgBiDjjZVcS00R0h1T9LL"
);

export default function Footer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        background: "var(--dark)",
        color: "var(--white)",
        pt: 8,
        pb: 2,
        px: 2,
        fontSize: { xs: "12px", md: "14px" },
        width: "100%",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={7} md={3}>
          <FooterTitle variant="body1" sx={{ fontWeight: "bold" }}>
            About
          </FooterTitle>
          <Typography
            variant="caption"
            sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
          >
            Safe Harbour Youth is committed to empowering youth and preventing
            violence. Join us in creating a safer future for all.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: "var(--primary)",
              "& svg": {
                fontSize: { xs: "1.2rem", md: "1.5rem" }, // Adjust icon size responsively
              },
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon sx={{ mr: 1 }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={3} sx={{ ml: { md: 6 } }}>
          <FooterTitle variant="body1" sx={{ fontWeight: "bold" }}>
            Explore
          </FooterTitle>
          <List>
          <ScrollLink to="about" style={{ textDecoration: "none" }}>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                About
              </Typography>
            </ListItemText>
          </ScrollLink>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                NGOs
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Resources
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption" onClick={handleOpen}>
                Donation
              </Typography>
            </ListItemText>
            <RouterLink to="/login" style={{ textDecoration: "none" }}>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Login
              </Typography>
            </ListItemText>
            </RouterLink>
            <RouterLink  to="/complaintform" style={{ textDecoration: "none" }}>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                File a Complaint
              </Typography>
            </ListItemText>
            </RouterLink>
          </List>
        </Grid>
        <Grid item xs={12} sm={7} md={3}>
          <FooterTitle variant="body1" sx={{ fontWeight: "bold" }}>
            Newsletter
          </FooterTitle>
          <Stack>
            <SubscrieTF
              label="Email address"
              variant="standard"
              InputLabelProps={{ style: { color: "var(--white)" } }}
            />
            <Button
              startIcon={<SendIcon sx={{ color: "var(--white)" }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {/* Copyright Notice */}
      <Box sx={{ pt: 4, pb: 2, textAlign: "center" }}>
        <Typography variant="caption">
          © 2024 Youth Devs - Aadit, Sohni, Sushma, Vinay
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Donate to Our Cause</DialogTitle>
        <DialogContent>
          {/* Ensure Elements wraps DonationForm */}
          <Elements stripe={stripePromise}>
            <DonationForm onClose={handleClose} />
          </Elements>
        </DialogContent>
      </Dialog>
    </Box>
    
  );
}
