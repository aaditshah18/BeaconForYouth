import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import { ListOfNGO } from "../styles/ListofNGO.tsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const ListOfNGOProps = [
  {
    imageUrl: "../images/campaignban1.jpeg",
    title: " United Nations Association of Greater Boston",
    description:
      "The United Nations Association of Greater Boston (UNAGB) is dedicated to building a strong multigenerational network of global citizens.",
    readMoreText: "Learn How to Help",
    // joinCampaignText: "Join Campaign",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title: "Ceres",
    description:
      "Ceres is a sustainability nonprofit organization leading the most influential investors and companies to build leadership and drive solutions throughout the economy.",
    readMoreText: "Learn How to Help",
    // joinCampaignText: "Join Campaign",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title: "Project Hope Boston",
    description:
      "Project Hope is a multi-service agency at the forefront of efforts in Boston to move families beyond homelessness and poverty.",
    readMoreText: "Learn How to Help",
    // joinCampaignText: "Join Campaign",
  },
  {
    imageUrl: "../images/campban2.jpeg",
    title: "World Education Services",
    description:
      "We are education development experts who believe that everyone has the right to a high-quality education. Our work is driven by the belief that education is a powerful tool to improve the quality of life and increase economic opportunities for people worldwide.",
    readMoreText: "Learn How to Help",
    // joinCampaignText: "Join Campaign",
  },
];

const NGOLists: React.FC = () => {
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
    <Box sx={{ overflow: "hidden", padding: 3, bgcolor: "green.100" }} id="NGO">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        NGOs Associated
      </Typography>

      {/* See All NGOs Link moved above the Slider */}
      <Box textAlign="center" mb={2}>
        <Link to="/all-ngos" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            See all NGOs -&gt;
          </Typography>
        </Link>
      </Box>

      {/* Slider with NGO list */}
      <Slider {...settings}>
        {ListOfNGOProps.map((ngo: any, index: number) => (
          <ListOfNGO
            key={index}
            imageUrl={ngo.imageUrl}
            title={ngo.title}
            description={ngo.description}
            readMoreText={ngo.readMoreText}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default NGOLists;
