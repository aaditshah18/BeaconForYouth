import React from "react";
import {Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
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
    <Box display="flex" justifyContent="center">
      <Card
        sx={{
          maxWidth: 350,
          m: 2,
          background: theme.palette.background.paper, // Use a theme color for the background or a custom one
          boxShadow: 2,
          "&:hover": {
            boxShadow: 3,
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: 180, objectFit: "cover" }}
          image={imageUrl}
          alt={title}
        />
        <CardContent sx={{ minHeight: 300 }}>
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
    </Box>
  );
};
