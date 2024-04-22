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
    imageUrl: "../images/uytc-annual-campaign.png",
    title:
      "2017 Public Awareness Campaign",
    description: "Youth Voices and Verses for Violence Prevention: Lessons in the Cycle In honor of National Youth Violence Prevention Awareness Week in April 2017, UYTC hosted an event with the purpose of encouraging members of the community to celebrate the important role of the arts in sustaining and supporting positive youth development.",
    learnMoreUrl: "https://example.com/link1",
  },
  {
    imageUrl: "../images/talk.jpg",
    title:"Talk. They Hear You",
    description: "The “Talk. They Hear You.” campaign aims to reduce underage drinking and other substance use among youths under the age of 21 by providing parents and caregivers with information and resources they need to address these issues with their children early and often.",
    readMoreText: "Learn How to Help",

  },
  {
    imageUrl: "../images/free.png",
    title:
      "Hi Anxiety",
    description: "Creating Social Media Campaigns that Promote Awareness and Support Adolescents’ Mental Health",
    readMoreText: "Learn How to Help",

  },
  {
    imageUrl: "../images/black-youth.jpg",
    title:
      "Protecting Black Youths’ Emotional Lives",
    description: "Exposure to community violence, which disproportionately affects Black youth, erodes mental health. Mentoring programs help teens cope.",
    readMoreText: "Learn How to Help",

  },
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
    <Box sx={{ overflow: "hidden", padding: 3, bgcolor: "var(--secondary)" }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ color: "var(--white)", textAlign: "center", fontWeight: "bold" }}
      >
        Our Campaigns
      </Typography>
      {/* Slider */}
      <Slider {...settings}>
        {campaigns.map((campaign, index) => (
          
          <CampaignItem
            key={index}
            imageUrl={campaign.imageUrl}
            title={campaign.title}
            description={campaign.description}
            readMoreText="Learn More"
          />
        ))}
      </Slider>
      {/* See All Campaigns Link */}
    </Box>
  );
};

export default CampaignSection;