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

  // NGO list defined inside the component to access the `t` function
  const ListOfNGOProps: NGO[] = [
    {
      imageUrl: "../images/campaignban1.jpeg",
      title: t("UNAGBTitle"), // Key for translation
      description: t("UNAGBDescription"), // Key for translation
      readMoreText: t("learnHowToHelp"), // Key for translation
    },
    {
      imageUrl: "../images/campban2.jpeg",
      title: t("CeresTitle"), // Key for translation
      description: t("CeresDescription"), // Key for translation
      readMoreText: t("learnHowToHelp"), // Key for translation
    },
    {
      imageUrl: "../images/campban2.jpeg",
      title: t("ProjectHopeTitle"), // Key for translation
      description: t("ProjectHopeDescription"), // Key for translation
      readMoreText: t("learnHowToHelp"), // Key for translation
    },
    {
      imageUrl: "../images/campban2.jpeg",
      title: t("WorldEducationTitle"), // Key for translation
      description: t("WorldEducationDescription"), // Key for translation
      readMoreText: t("learnHowToHelp"), // Key for translation
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
