import React, { useState, useEffect} from 'react';
import { Grid, Typography, Grow, CardContent } from '@mui/material';
import {
  Root,
  Heading,
  StyledCard,
  StyledMedia,
  SectionTitle,
} from '../../styles/aboutus-styles';
import { content, Section } from '../../content/about-us-content';

const AboutUs: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const sections: Section[] = ['Our Mission', 'Our Vision', 'Core Values That Guide Us'];

  return (
    <Root >
      <div id='about'>
          <Heading variant="h4" gutterBottom>
          About Us
          </Heading>
          <Grid container spacing={4} justifyContent="center">
            {sections.map((section, index) => (
              <Grow in={checked} key={section} {...(checked ? { timeout: 1000 * index } : {})}>
                <Grid item xs={12} sm={6} md={4}>
                  <StyledCard>
                    <StyledMedia image={content[section].img} title={section} />
                    <CardContent style={{ textAlign: 'center', padding: '1rem' }}>
                      <SectionTitle variant="h5" gutterBottom>
                        {section}
                      </SectionTitle>
                      <Typography>
                        {content[section].text}
                      </Typography>
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