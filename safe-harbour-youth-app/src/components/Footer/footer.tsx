import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { FooterTitle } from '../../styles/footer-styles';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import DonationForm from '../DonationForm';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const stripePromise = loadStripe("your_stripe_public_key");

export default function Footer() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ background: "var(--dark)", color: "var(--white)", pt: 8, pb: 2, px: 2, fontSize: { xs: "12px", md: "14px" }, width: "100%", borderTop: "1px solid rgba(255, 255, 255, 0.12)" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={7} md={3}>
          <FooterTitle variant="body1" sx={{ fontWeight: "bold" }}>
            {t('About')}
          </FooterTitle>
          <Typography variant="caption" sx={{ fontSize: { xs: "0.7rem", sm: "0.8rem" } }}>
            {t('Safe Harbour Youth is committed to empowering youth and preventing violence. Join us in creating a safer future for all.')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7} md={3} sx={{ ml: { md: 6 } }}>
          <FooterTitle variant="body1" sx={{ fontWeight: "bold" }}>
            {t('Explore')}
          </FooterTitle>
          <List>
            <ScrollLink to="about" style={{ textDecoration: "none" }}>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  {t('About')}
                </Typography>
              </ListItemText>
            </ScrollLink>
            <RouterLink to="/ngos" style={{ textDecoration: "none" }}>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  {t('NGOs')}
                </Typography>
              </ListItemText>
            </RouterLink>
            <RouterLink to="/resources" style={{ textDecoration: "none" }}>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  {t('Resource')}
                </Typography>
              </ListItemText>
            </RouterLink>
            <ListItemText onClick={handleOpen}>
              <Typography lineHeight={2} variant="caption">
                {t('Donation')}
              </Typography>
            </ListItemText>
            <RouterLink to="/login" style={{ textDecoration: "none" }}>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  {t('Login')}
                </Typography>
              </ListItemText>
            </RouterLink>
            <RouterLink to="/complaintform" style={{ textDecoration: "none" }}>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  {t('File a Complaint')}
                </Typography>
              </ListItemText>
            </RouterLink>
          </List>
        </Grid>
        <Grid item xs={12} sm={7} md={3}>
          <FooterTitle variant="body1" sx={{ fontWeight: "bold" }}>
            {t('Newsletter')}
          </FooterTitle>
          <List sx={{ width: '100%' }}>
            <ListItemText>
              <Typography sx={{ mt: 2 }} variant="body2" component="div">
                {t('Subscribe to our newsletter to stay updated.')}
              </Typography>
            </ListItemText>
            <ListItemText sx={{ mt: 2 }}>
              <input type="text" placeholder={t('Email address')} style={{ width: '100%' }} />
            </ListItemText>
            <Button
              sx={{ mt: 2, bgcolor: 'primary.main', color: 'white' }}
              variant="contained"
              onClick={() => console.log('Subscribed!')}
            >
              {t('Subscribe')}
            </Button>
          </List>
        </Grid>
      </Grid>
      <Box sx={{ pt: 4, pb: 2, textAlign: "center" }}>
        <Typography variant="caption">
          © 2024 Youth Devs - Aadit, Sohni, Sushma, Vinay
        </Typography>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('Donate to Our Cause')}</DialogTitle>
        <DialogContent>
          <Elements stripe={stripePromise}>
            <DonationForm onClose={handleClose} />
          </Elements>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
