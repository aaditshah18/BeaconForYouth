import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import theme from "../styles/themes";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { registerNgo } from "../api/registrations";
import { registrationPayload } from "../api/registrations";

type CountryCode = {
  code: string;
  label: string;
};

const countryCodes: CountryCode[] = [
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "AUS (+61)" },
  // Add more country codes here
];

type CopyrightProps = {
  children?: React.ReactNode; // ReactNode includes undefined, but you can make this more specific if necessary
};

function Copyright(props: CopyrightProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        SafeHarbourYouth
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Register() {
  const [countryCode, setCountryCode] = useState<string>(countryCodes[0].code);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register at SafeHarbourYouth";
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload: registrationPayload = {
      type: "NGO",
      name: formData.get("name") as string,
      address: formData.get("address") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      phone: countryCode + (formData.get("phone") as string),
      description: formData.get("description") as string,
    };

    try {
      await onSubmit(payload);
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  const onSubmit = async (formData: registrationPayload) => {
    try {
      console.log("Submitting Registration: ", formData);
      await registerNgo(formData);
      navigate("/login"); // Use react-router-dom's navigate for SPA behavior
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleCountryCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountryCode(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="background-image"
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
              borderRadius: "10px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: theme.palette.secondary.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="street-address"
                    name="address"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="Latitude"
                    name="latitude"
                    required
                    fullWidth
                    id="lat"
                    label="Latitude"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="Longitude"
                    name="longitude"
                    required
                    fullWidth
                    id="long"
                    label="Longitude"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    select
                    fullWidth
                    label="Country Code"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    variant="outlined"
                  >
                    {countryCodes.map((option) => (
                      <MenuItem key={option.code} value={option.code}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <TextField
                    required
                    fullWidth
                    label="Phone"
                    name="phone"
                    autoComplete="tel"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {countryCode}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    id="description"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
