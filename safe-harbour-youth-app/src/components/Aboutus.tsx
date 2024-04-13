import React, { useState, useEffect } from "react";
import { Grid, Typography, Grow } from "@mui/material";
import { Root, StyledPaper, JustifiedText, ContentSpacing } from "../styles/aboutus";

const AboutUs = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Root>
      <Grid container component="div" spacing={4} alignItems="stretch">
        {['About Us', 'Our Mission', 'Our Vision'].map((section, index) => (
          <Grow in={checked} key={section} {...(checked ? { timeout: 1000 * (index + 1) } : {})}>
            <Grid item xs={12} md={4}>
              <StyledPaper>
                <Typography variant={section === 'About Us' ? 'h5' : 'h6'} sx={{ textAlign: 'justify' }}>
                  {section}
                </Typography>
                <Typography sx={{ textAlign: 'justify', marginBottom: 2 }}>
                  {getTextForSection(section)}
                </Typography>
              </StyledPaper>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Root>
  );
};

export default AboutUs;

// Helper function to return text based on the section
function getTextForSection(section: string): string {
  switch (section) {
    case 'About Us':
      return `Welcome to SafeHarbourYouth, a beacon of hope and a fortress of support for young individuals navigating through the turbulent waters of adversity...`;
    case 'Our Mission':
      return `Our mission at SafeHarbourYouth is to empower, protect, and support young individuals facing any form of abuse or violence...`;
    case 'Our Vision':
      return `Our vision is a future where youth everywhere are empowered to live their lives with dignity, respect, and freedom from abuse...`;
    default:
      return '';
  }
}
