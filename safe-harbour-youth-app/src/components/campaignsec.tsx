// CampaignSection.tsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { CampaignItem } from "../styles/campaign.tsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CampaignSection: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const campaigns = [
    {
      imageUrl: "../images/uytc-annual-campaign.png",
      title: t("2017 Public Awareness Campaign"),
      description: t(
        "Youth Voices and Verses for Violence Prevention: Lessons in the Cycle In honor of National Youth Violence Prevention Awareness Week in April 2017, UYTC hosted an event with the purpose of encouraging members of the community to celebrate the important role of the arts in sustaining and supporting positive youth development."
      ),
    },
    {
      imageUrl: "../images/talk.jpg",
      title: t("Talk. They Hear You"),
      description: t(
        "The “Talk. They Hear You.” campaign aims to reduce underage drinking and other substance use among youths under the age of 21 by providing parents and caregivers with information and resources they need to address these issues with their children early and often."
      ),
    },
    {
      imageUrl: "../images/free.png",
      title: t("Hi Anxiety"),
      description: t(
        "Creating Social Media Campaigns that Promote Awareness and Support Adolescents’ Mental Health"
      ),
    },
    {
      imageUrl: "../images/black-youth.jpg",
      title: t("Protecting Black Youths’ Emotional Lives"),
      description: t(
        "Exposure to community violence, which disproportionately affects Black youth, erodes mental health. Mentoring programs help teens cope."
      ),
    },
  ];

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
        {t("Our Campaigns")}
      </Typography>
      <Slider {...settings}>
        {campaigns.map((campaign, index) => (
          <CampaignItem
            key={index}
            imageUrl={campaign.imageUrl}
            title={campaign.title}
            description={campaign.description}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default CampaignSection;
