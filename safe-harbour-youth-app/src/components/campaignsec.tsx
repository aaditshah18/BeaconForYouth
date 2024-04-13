import React from "react";
import { CampaignItem } from "../styles/campaign.tsx";
import { Grid, Typography, Box } from "@mui/material";

const campaigns = [
  {
    imageUrl: "../images/campaignban1.jpeg",
    title:
      "CHILDREN AND FAMILIES IN NORTHERN GAZA ARE JUST WEEKS AWAY FROM FAMINE",
    buttonText: "Learn More",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title: "HUNGER IS THE GREATEST THREAT TO CHILDREN AROUND THE WORLD",
    buttonText: "Learn How to Help",
  },
  {
    imageUrl: "../images/campaignban1.jpeg",
    title: "UKRAINE: FIGHTING AND DISPLACEMENT HAVE BECOME A NEW NORMAL",
    buttonText: "Read More",
  },
];

const CampaignSection: React.FC = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Our Campaigns
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {campaigns.map((campaign, index) => (
          <CampaignItem
            key={index}
            imageUrl={campaign.imageUrl}
            title={campaign.title}
            buttonText={campaign.buttonText}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default CampaignSection;
