// AboutUs.jsx
import React, { useState, useEffect } from "react";
import { Grid, Typography, Grow, CardContent } from "@mui/material";
import { Root, Heading, StyledCard, StyledMedia, SectionTitle } from "../../styles/aboutus-styles";
import { useTranslation } from 'react-i18next';

// Define the structure for the content
type SectionContent = {
  titleKey: string;
  descriptionKey: string;
  img?: string;
};

// Create the content object with keys
export const content: Record<string, SectionContent> = {
  "Our Mission": {
    titleKey: "our_mission_title",
    descriptionKey: "our_mission_description",
    img: "images/mission.png",
  },
  "Our Vision": {
    titleKey: "our_vision_title",
    descriptionKey: "our_vision_description",
    img: "images/vision.png",
  },
  "Core Values That Guide Us": {
    titleKey: "core_values_title",
    descriptionKey: "core_values_description",
    img: "images/core-value.png",
  },
};

const AboutUs: React.FC = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  // Convert content object into an array for mapping
  const sections = Object.entries(content).map(([key, value]) => ({
    key,
    title: t(value.titleKey),
    description: t(value.descriptionKey),
    img: value.img,
  }));

  return (
    <Root>
      <div id="about">
        <Heading variant="h4" gutterBottom>
          {t("about_us_title")}
        </Heading>
        <Grid container spacing={4} justifyContent="center">
          {sections.map((section, index) => (
            <Grow
              in={checked}
              key={section.key}
              {...(checked ? { timeout: 1000 * index } : {})}
            >
              <Grid item xs={12} sm={6} md={4}>
                <StyledCard>
                  {section.img && (
                    <StyledMedia image={section.img} title={section.title} />
                  )}
                  <CardContent style={{ textAlign: "center", padding: "1rem" }}>
                    <SectionTitle variant="h5" gutterBottom>
                      {section.title}
                    </SectionTitle>
                    <Typography>{section.description}</Typography>
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
