import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import { CampaignItem } from "../styles/campaign.tsx"; // Adjust the import path if needed
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const campaigns = [
  {
    imageUrl: "../images/campaignban1.jpeg",
    title:
      "CHILDREN AND FAMILIES IN NORTHERN GAZA ARE JUST WEEKS AWAY FROM FAMINE",
    description: "Help us bring awareness and support to those in need.",
    readMoreText: "Learn How to Help",
    // joinCampaignText: "Join Campaign",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title:
      "CHILDREN AND FAMILIES IN NORTHERN GAZA ARE JUST WEEKS AWAY FROM FAMINE",
    description: "Help us bring awareness and support to those in need.",
    readMoreText: "Learn How to Help",
    // joinCampaignText: "Join Campaign",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title:
      "CHILDREN AND FAMILIES IN NORTHERN GAZA ARE JUST WEEKS AWAY FROM FAMINE",
    description: "Help us bring awareness and support to those in need.",
    readMoreText: "Learn How to Help",
    // joinCampaignText: "Join Campaign",
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
    <Box sx={{ overflow: "hidden", padding: 3, bgcolor: "green.100" }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Our Campaigns
      </Typography>
      {/* See All Campaigns Link */}
      <Box textAlign="center" mb={2}>
        <Link to="/campaigns" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            See all campaigns -&gt;
          </Typography>
        </Link>
      </Box>
      {/* Slider */}
      <Slider {...settings}>
        {campaigns.map((campaign, index) => (
          <CampaignItem
            key={index}
            imageUrl={campaign.imageUrl}
            title={campaign.title}
            description={campaign.description}
            readMoreText={campaign.readMoreText}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default CampaignSection;
