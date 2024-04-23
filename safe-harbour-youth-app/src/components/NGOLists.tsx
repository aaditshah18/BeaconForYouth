import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Slider from "react-slick";
import { ListOfNGO } from "../styles/ListofNGO";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchAllNgos, NgoDetails } from "./../api/ngo"; // Adjust the import path as necessary

const NGOLists: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  // Correctly typing the useState for ngos
  const [ngos, setNgos] = useState<NgoDetails[]>([]);

  useEffect(() => {
    const loadNgos = async () => {
      try {
        const fetchedNgos = await fetchAllNgos();
        setNgos(fetchedNgos); // fetchedNgos should be of type NgoDetails[]
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };

    loadNgos();
  }, []);

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
        {t("NGOs Associated")}
      </Typography>

      <Box textAlign="center" mb={2}>
        <Link to="../ngoInnerpage/ngodetail" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            color="primary"
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            {t("See all NGOs ->")}
          </Typography>
        </Link>
      </Box>

      <Slider {...settings}>
        {ngos.map((ngo, index) => (
          <ListOfNGO
            key={index}
            imageUrl={ngo.imageUrl || "../images/default-image.jpeg"} // Default image if none is provided
            title={ngo.name}
            description={ngo.description}
            readMoreText={"Learn How to Help"}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default NGOLists;
