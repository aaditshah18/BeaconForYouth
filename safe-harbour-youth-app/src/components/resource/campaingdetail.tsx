import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CampaignBannerImage from "../resource/image/resourcebanner1.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DesktopAppBar from "../header/desktop-appbar.tsx";
import Footer from "../Footer/footer.tsx";
interface Campaign {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
}

interface Video {
  id: number;
  src: string;
  title: string;
}

const upcomingCampaigns: Campaign[] = [
  {
    id: 1,
    title: "2017 Public Awareness Campaign",
    description:
      "Youth Voices and Verses for Violence Prevention: Lessons in the Cycle In honor of National Youth Violence Prevention Awareness Week in April 2017, UYTC hosted an event with the purpose of encouraging members of the community to celebrate the important role of the arts in sustaining and supporting positive youth development.",
    image: "../images/uytc-annual-campaign.png",
    date: "June 5, 2024",
    location: "Local Park, Boston, MA",
  },
  {
    id: 2,
    title: "Talk. They Hear You",
    description:
      "The “Talk. They Hear You.” campaign aims to reduce underage drinking and other substance use among youths under the age of 21 by providing parents and caregivers with information and resources they need to address these issues with their children early and often.",
    image: "../images/talk.jpg",
    date: "July 12, 2024",
    location: "Long Beach, CA",
  },
];

const pastCampaigns: Campaign[] = [
  {
    id: 1,
    title: "Hi Anxiety",
    description:
      "Creating Social Media Campaigns that Promote Awareness and Support Adolescents’ Mental Health",
    image: "../images/free.png",
    date: "January 15, 2024",
    location: "Community Center, Boston, MA",
  },
  {
    id: 2,
    title: "Protecting Black Youths’ Emotional Lives",
    description:
      "Exposure to community violence, which disproportionately affects Black youth, erodes mental health. Mentoring programs help teens cope.",
    image: "../images/black-youth.jpg",
    date: "March 22, 2024",
    location: "Local Seminar Hall, New Jersey, NJ",
  },
];

const videos: Video[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/FnpAsWHQPTQ",
    title:
      "Saprea's Mission to Eradicate Child Sexual Abuse & Its Traumatic Effects",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/UbtSJCw_lqw",
    title: "Preventing Child Sexual Abuse",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/ACvqz9Ws9-w",
    title: "7 Ways to Protect Kids from Sexual Abuse | AAP",
  },

  {
    id: 4,
    src: "https://www.youtube.com/embed/M1SQue6khBA",
    title:
      "What Is Child Abuse and Neglect? Types, Symptoms, Treatment and Diagnosis",
  },

  {
    id: 5,
    src: "https://www.youtube.com/embed/i-FRmFBsJxQ",
    title: "Not Our Kids: Child Sexual Abuse Prevention ",
  },

  {
    id: 6,
    src: "https://www.youtube.com/embed/0I2gVdBmA-s",
    title: "How to Talk with Kids About Sexual Abuse",
  },
];

const CampaignsPage: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleOpen = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData, selectedCampaign);
    handleClose();
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <DesktopAppBar />
      <Box
        component="img"
        sx={{ width: "100%", height: "50", marginBottom: 2 }}
        alt="Campaign banner"
        src={CampaignBannerImage}
      />
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#82B440",
          fontWeight: "bold",
          py: 2,
        }}
      >
        Campaigns
      </Typography>
      <TextField
        label="Filter by location or date"
        variant="outlined"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        // sx={{ marginBottom: 4 }}
        sx={{
          marginBottom: 2,
          "& label.Mui-focused": {
            color: "orange",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "orange",
            },
          },
        }}
      />

      <Typography
        variant="h5"
        sx={{
          mt: 4,
          mb: 2,
          backgroundColor: "#343A40",
          color: "white",
          textAlign: "center",

          fontWeight: "bold",
          py: 2,
        }}
      >
        Upcoming Campaigns
      </Typography>
      <Grid container spacing={2}>
        {upcomingCampaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <Card sx={{ bgcolor: "lightorange", color: "white" }}>
              <CardMedia
                component="img"
                height="140"
                image={campaign.image}
                alt={campaign.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {campaign.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {campaign.description}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Date: {campaign.date}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Location: {campaign.location}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => handleOpen(campaign)}
                  sx={{
                    backgroundColor: "white",
                    color: "green",
                    "&:hover": { backgroundColor: "lightgreen" },
                  }}
                >
                  Join Us
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Join Campaign</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstName"
            label="First Name"
            fullWidth
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="lastName"
            label="Last Name"
            fullWidth
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phone"
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Join Now</Button>
        </DialogActions>
      </Dialog>

      <Typography
        variant="h5"
        sx={{
          mt: 4,
          mb: 2,
          backgroundColor: "#343A40",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          py: 2,
        }}
      >
        Past Campaigns
      </Typography>
      <Grid container spacing={2}>
        {pastCampaigns.map((campaign) => (
          <Grid item xs={12} sm={6} md={4} key={campaign.id}>
            <Card sx={{ bgcolor: "default", color: "text.primary" }}>
              <CardMedia
                component="img"
                height="140"
                image={campaign.image}
                alt={campaign.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {campaign.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {campaign.description}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Date: {campaign.date}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Location: {campaign.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={4} sx={{ padding: 2, marginTop: 4 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            py: 2,
            backgroundColor: "#343A40",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Campaign Videos
        </Typography>
        <Slider {...settings}>
          {videos.map((video) => (
            <Box key={video.id} sx={{ p: 2, textAlign: "center" }}>
              <iframe
                style={{ width: "100%", height: 200 }}
                src={video.src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <Typography variant="subtitle1">{video.title}</Typography>
            </Box>
          ))}
        </Slider>
      </Paper>
      <Footer />
    </Box>
  );
};

export default CampaignsPage;
