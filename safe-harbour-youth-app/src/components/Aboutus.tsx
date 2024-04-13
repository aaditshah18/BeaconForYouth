// AboutUs.tsx
import React, { ReactNode } from "react";
import { Grid, Paper, Typography, Grow } from "@mui/material";
import { useStyles } from "../styles/aboutus";

const AboutUs: React.FC = (): ReactNode => {
  // import { useStyles } from "../styles/aboutus";

  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <Grid container component="div" spacing={4} alignItems="stretch">
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.justifiedText}>
                About Us
              </Typography>
              <Typography
                className={`${classes.justifiedText} ${classes.contentSpacing}`}
              >
                Welcome to SafeHarbourYouth, a beacon of hope and a fortress of
                support for young individuals navigating through the turbulent
                waters of adversity. Born from a vision to create a world where
                every young person has the right to a safe and nurturing
                environment, SafeHarbourYouth stands as a testament to the
                collective effort of compassionate souls united against abuse
                and violence. Our foundation is built on the pillars of empathy,
                confidentiality, and proactive engagement, where the voices of
                the youth are heard, respected, and acted upon. With a network
                of trusted partner NGOs and a team dedicated to the cause, we
                bridge the gap between those in need and the help they deserve.
                At SafeHarbourYouth, we believe in the strength of community,
                the power of education, and the undeniable right of every
                individual to a life free from harm.
              </Typography>
            </Paper>
          </Grid>
        </Grow>
        <Grow in={checked} {...(checked ? { timeout: 1500 } : {})}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6" className={classes.justifiedText}>
                Our Mission
              </Typography>
              <Typography
                className={`${classes.justifiedText} ${classes.contentSpacing}`}
              >
                Our mission at SafeHarbourYouth is to empower, protect, and
                support young individuals facing any form of abuse or violence.
                Through our integrated platforms—the Youth Connect Portal, NGO
                Response Center, and Youth Empowerment Hub—we aim to offer a
                sanctuary for those in distress, a resource for knowledge and
                empowerment, and a channel for swift and sensitive intervention.
                We are committed to breaking the cycle of abuse by fostering
                awareness, facilitating accessible support, and advocating for
                the rights and well-being of youth. By mobilizing resources,
                expertise, and community support, our mission is to ensure that
                every young person has the opportunity to thrive in a safe and
                supportive environment, irrespective of their background or
                circumstances.
              </Typography>
            </Paper>
          </Grid>
        </Grow>
        <Grow in={checked} {...(checked ? { timeout: 2000 } : {})}>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6" className={classes.justifiedText}>
                Our Vision
              </Typography>
              <Typography className={classes.justifiedText}>
                Our vision is a future where youth everywhere are empowered to
                live their lives with dignity, respect, and freedom from abuse.
                At SafeHarbourYouth, we dream of a world where conversations
                about abuse and violence are met with understanding and action,
                rather than silence or stigma. We envision a society in which
                every young individual has access to the support, resources, and
                knowledge they need to protect themselves and seek help without
                fear. Through our unwavering dedication and collaborative
                efforts, we aspire to create a global community that champions
                the rights of the youth, nurtures their well-being, and paves
                the way for a future marked by resilience, empowerment, and
                hope. Together, we are not just envisioning change; we are
                laying the foundation for a safer, brighter future for all young
                people.
              </Typography>
            </Paper>
          </Grid>
        </Grow>
      </Grid>
    </div>
  );
};

export default AboutUs;
