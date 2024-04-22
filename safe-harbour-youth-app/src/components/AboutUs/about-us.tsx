import React, { useState, useEffect } from "react";
import { Grid, Typography, Grow, CardContent } from "@mui/material";
import {
  Root,
  Heading,
  StyledCard,
  StyledMedia,
  SectionTitle,
} from "../../styles/aboutus-styles";
import { content, Section } from "../../content/about-us-content";
import { useTranslation } from 'react-i18next';

interface ContentStructure {
  img: string;
  text: string;
}

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const sections: Section[] = [
    t("Our Mission"),
    t("Our Vision"),
    t("Core Values That Guide Us"),
  ];

  const contents: { [key: string]: ContentStructure } = {
    [t("Our Mission")]: {
      img: "/path/to/mission.jpg",
      text: t("Mission Description")
    },
    [t("Our Vision")]: {
      img: "/path/to/vision.jpg",
      text: t("Vision Description")
    },
    [t("Core Values That Guide Us")]: {
      img: "/path/to/values.jpg",
      text: t("Values Description")
    }
  };

  return (
    <Root>
      <div id="about">
        <Heading variant="h4" gutterBottom>
          {t("About Us")}
        </Heading>
        <Grid container spacing={4} justifyContent="center">
          {sections.map((section, index) => (
            <Grow
              in={checked}
              key={section}
              {...(checked ? { timeout: 1000 * index } : {})}
            >
              <Grid item xs={12} sm={6} md={4}>
                <StyledCard>
                  <StyledMedia image={contents[section].img} title={section} />
                  <CardContent style={{ textAlign: "center", padding: "1rem" }}>
                    <SectionTitle variant="h5" gutterBottom>
                      {section}
                    </SectionTitle>
                    <Typography>{contents[section].text}</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            </Grow>
          ))}
        </Grid>
      </div>
    </Root>
  );
};

export default AboutUs;
