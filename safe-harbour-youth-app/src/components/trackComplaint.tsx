import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export const TrackComplaint: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  // const history = useHistory(); // Uncomment this when you add routing

  const handleTrackClick = () => {
    // Placeholder function for now
    // This will be replaced with the logic to redirect to the tracking information page
    // e.g. history.push(`/track-complaint/${trackingNumber}`);
    console.log("Tracking Number: ", trackingNumber);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        height: "150px", // Further increased height
        bgcolor: "background.default",
        boxShadow: 3,
        borderRadius: 1,
        backgroundImage: "url(path-to-your-image.jpg)", // Add your background image path
        backgroundSize: "cover", // Cover the entire box area
        backgroundPosition: "center", // Center the image in the box
        backgroundRepeat: "no-repeat",
        marginBottom: 4, // Space after the section before the footer
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "secondary.main",
          mr: 2,
        }}
      >
        TRACK COMPLAINT
      </Typography>
      <TextField
        label="Enter Complaint Number"
        variant="outlined"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" color="secondary" onClick={handleTrackClick}>
        TRACK NOW!
      </Button>
    </Box>
  );
};

export default TrackComplaint;
