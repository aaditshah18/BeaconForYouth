import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import { CampaignItem } from "../styles/campaign.tsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIosNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// This should reflect your actual campaigns data structure including the new button texts
const campaigns = [
  {
    imageUrl: "../images/campaignban1.jpeg",
    title:
      "CHILDREN AND FAMILIES IN NORTHERN GAZA ARE JUST WEEKS AWAY FROM FAMINE",
    description: "Help us bring awareness and support to those in need.",
    readMoreText: "Learn More",
    joinCampaignText: "Join Campaign",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title: "HUNGER IS THE GREATEST THREAT TO CHILDREN AROUND THE WORLD",
    description:
      "Your help can change lives and provide hope for a better future.",
    readMoreText: "Learn How to Help",
    joinCampaignText: "Join Campaign",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title: "UKRAINE: FIGHTING AND DISPLACEMENT HAVE BECOME A NEW NORMAL",
    description:
      "Stand with Ukraine by joining our campaign to provide relief.",
    readMoreText: "Read More",
    joinCampaignText: "Join Campaign",
  },
  // ... Add more campaigns as needed
];

const CampaignSection: React.FC = () => {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <ArrowForwardIcon style={{ color: theme.palette.text.primary }} />
    ),
    prevArrow: <ArrowBackIcon style={{ color: theme.palette.text.primary }} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // <Box sx={{ overflow: "hidden", padding: 3, bgcolor: "background.paper" }}>
    <Box
      sx={{
        overflow: "hidden",
        padding: 3,
        bgcolor: "green.100", // This is where you set the light background for the section
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Our Campaigns
      </Typography>
      <Slider {...settings}>
        {campaigns.map((campaign, index) => (
          <CampaignItem
            key={index}
            imageUrl={campaign.imageUrl}
            title={campaign.title}
            description={campaign.description}
            readMoreText={campaign.readMoreText}
            joinCampaignText={campaign.joinCampaignText}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default CampaignSection;
