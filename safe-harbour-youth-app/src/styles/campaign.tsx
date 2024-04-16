import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Stack,
  useTheme,
} from "@mui/material";

interface CampaignItemProps {
  imageUrl: string;
  title: string;
  description: string;
  readMoreText: string;
  // joinCampaignText: string;
}

export const CampaignItem: React.FC<CampaignItemProps> = ({
  imageUrl,
  title,
  description,
  readMoreText,
  // joinCampaignText,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        bgcolor: theme.palette.background.paper, // Use a theme color for the background or a custom one
        boxShadow: 1, // Adjust box shadow as needed
        "&:hover": {
          boxShadow: 3, // Adjust hover box shadow as needed
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 180, objectFit: "cover" }} // 'cover' will ensure the image covers the area without stretching
        image={imageUrl}
        alt={title}
      />
      <CardContent sx={{ minHeight: 220 }}>
        <Typography gutterBottom variant="subtitle1" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Stack direction="column" spacing={1}>
          <Button variant="outlined" sx={{ justifyContent: "flex-start" }}>
            {readMoreText}
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            {/* {joinCampaignText} */}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
