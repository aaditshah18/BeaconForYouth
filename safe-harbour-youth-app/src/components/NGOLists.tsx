import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ListOfNGO } from "../styles/ListofNGO.tsx";  // Ensure this import path is correct

interface NGO {
  imageUrl: string;
  title: string;
  description: string;
  readMoreText: string;
}

const NGOLists: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Define the NGO list inside the component
  const ListOfNGOProps: NGO[] = [
    {
      imageUrl: "../images/campaignban1.jpeg",
      title: t("United Nations Association of Greater Boston"),
      description: t("The United Nations Association of Greater Boston (UNAGB) is dedicated to building a strong multigenerational network of global citizens."),
      readMoreText: t("Learn How to Help"),
    },
    {
      imageUrl: "../images/campban2.jpeg",
      title: t("Ceres"),
      description: t("Ceres is a sustainability nonprofit organization leading the most influential investors and companies to build leadership and drive solutions throughout the economy."),
      readMoreText: t("Learn How to Help"),
    },
    {
      imageUrl: "../images/campban2.jpeg",
      title: t("Project Hope Boston"),
      description: t("Project Hope is a multi-service agency at the forefront of efforts in Boston to move families beyond homelessness and poverty."),
      readMoreText: t("Learn How to Help"),
    },
    {
      imageUrl: "../images/campban2.jpeg",
      title: t("World Education Services"),
      description: t("We are education development experts who believe that everyone has the right to a high-quality education. Our work is driven by the belief that education is a powerful tool to improve the quality of life and increase economic opportunities for people worldwide."),
      readMoreText: t("Learn How to Help"),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIcon style={{ color: theme.palette.text.primary }} />,
    prevArrow: <ArrowBackIcon style={{ color: theme.palette.text.primary }} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Box sx={{ overflow: "hidden", padding: 3, bgcolor: "green.100" }} id="NGO">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {t('NGOsAssociated')}
      </Typography>
      <Box textAlign="center" mb={2}>
        <Link to="/all-ngos" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="primary" sx={{ display: "inline-flex", alignItems: "center" }}>
            {t('seeAllNGOs')} -&gt;
          </Typography>
        </Link>
      </Box>
      <Slider {...settings}>
        {ListOfNGOProps.map((ngo, index) => (
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
