import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FooterTitle, SubscrieTF } from "../../styles/footer-styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
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
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                About
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                NGO
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Resources
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Donation
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption">
                File a Complaint
              </Typography>
            </ListItemText>
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
    </Box>
  );
}
