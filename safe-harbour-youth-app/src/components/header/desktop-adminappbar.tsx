import React, { useState } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

export default function AdminDesktopAppBar() {
  const [adminImage, setAdminImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setAdminImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/home");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "250px",
        height: "100vh",
        backgroundColor: "blue",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="body1">John Doe</Typography>
        <Typography variant="body2">Administrator</Typography>
        <Divider sx={{ margin: "1rem 0", width: "100%" }} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<LogoutIcon />}
          fullWidth
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
