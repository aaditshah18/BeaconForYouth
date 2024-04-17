import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

interface ListOfNGOProps {
  imageUrl: string;
  title: string;
  description: string;
  readMoreText: string;
}

export const ListOfNGO: React.FC<ListOfNGOProps> = ({
  imageUrl,
  title,
  description,
  readMoreText,
}) => {
  return (
    <Card
      sx={{
        width: "100%", // The card will take up 100% of the container's width
        maxWidth: "400px", // Set the maximum width you desire
        height: "500px", // Fixed height
        m: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 140, objectFit: "cover" }}
        image={imageUrl}
        alt={title}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            mb: 2,
          }}
        >
          {description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 1 }}>
            {readMoreText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
