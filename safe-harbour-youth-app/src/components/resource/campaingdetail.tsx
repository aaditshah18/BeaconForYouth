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
    title: "Reforestation Drive",
    description:
      "Join us in planting 10,000 trees to help reforest local parks!",
    image: "https://yourimageurl.com/upcoming1.jpg",
    date: "June 5, 2024",
    location: "Local Park",
  },
  {
    id: 2,
    title: "Beach Cleanup",
    description: "Help us clean up our beaches. Every hand makes a difference!",
    image: "https://yourimageurl.com/upcoming2.jpg",
    date: "July 12, 2024",
    location: "Local Beach",
  },
];

const pastCampaigns: Campaign[] = [
  {
    id: 1,
    title: "Winter Clothing Drive",
    description:
      "Thanks to everyone who donated clothes for the homeless this winter!",
    image: "https://yourimageurl.com/past1.jpg",
    date: "January 15, 2024",
    location: "Community Center",
  },
  {
    id: 2,
    title: "Save the Wetlands Seminar",
    description:
      "Our seminar on wetland preservation was a success, with over 300 attendees!",
    image: "https://yourimageurl.com/past2.jpg",
    date: "March 22, 2024",
    location: "Local Seminar Hall",
  },
];

const videos: Video[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/first_video_id",
    title: "First Campaign",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/second_video_id",
    title: "Second Campaign",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/third_video_id",
    title: "Third Campaign",
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
        sx={{ marginBottom: 4 }}
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
    </Box>
  );
};

export default CampaignsPage;
