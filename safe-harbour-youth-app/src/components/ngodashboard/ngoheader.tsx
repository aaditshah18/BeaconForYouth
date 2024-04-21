import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  logoUrl: string;
}

const NGOHeader: React.FC<HeaderProps> = ({ logoUrl }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src={logoUrl}
          alt="NGO Logo"
          style={{ marginRight: 20, height: 50 }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NGO Dashboard
        </Typography>
        <Button
          color="inherit"
          onClick={() => navigate("/ngodashboard/ngohome")}
        >
          Home
        </Button>
        <Button
          color="inherit"
          onClick={() => navigate("/ngodashboard/ngohome/ngocampaign")}
        >
          Campaign
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NGOHeader;
