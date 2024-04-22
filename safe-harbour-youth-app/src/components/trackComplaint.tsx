import React, { useState } from "react";
import { Box, TextField, Button, Typography, Icon } from "@mui/material";
import { EmojiEmotions } from "@mui/icons-material";

export const TrackComplaint: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const handleTrackClick = () => {
    // Placeholder function for now
    // Replace this with the logic to fetch the status message based on the tracking number
    setStatusMessage("Complaint status: In progress");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        height: "200px",
        bgcolor: "background.default",
        boxShadow: 3,
        borderRadius: 1,
        backgroundImage: "url(path-to-your-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginBottom: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "secondary.main",
          mb: 2,
        }}
      >
        TRACK COMPLAINT
      </Typography>
      <TextField
        label="Enter Complaint Number"
        variant="outlined"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="secondary" onClick={handleTrackClick}>
        TRACK NOW!
      </Button>
      {statusMessage && (
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography variant="body1" sx={{ color: "red", mr: 1 }}>
            {statusMessage}
          </Typography>
          <Icon component={EmojiEmotions} sx={{ color: "green" }} />
        </Box>
      )}
    </Box>
  );
};

export default TrackComplaint;
