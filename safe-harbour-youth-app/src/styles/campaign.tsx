// import React from "react";
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
// } from "@mui/material";

// interface CampaignItemProps {
//   imageUrl: string;
//   title: string;
//   buttonText: string;
// }

// export const CampaignItem: React.FC<CampaignItemProps> = ({
//   imageUrl,
//   title,
//   buttonText,
// }) => {
//   return (
//     <Grid item xs={12} sm={4} sx={{ maxWidth: 345, m: 2 }}>
//       <Card>
//         <CardMedia
//           component="img"
//           sx={{ height: 140 }}
//           image={imageUrl}
//           alt="Campaign Image"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="h2">
//             {title}
//           </Typography>
//           <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//             {buttonText}
//           </Button>
//         </CardContent>
//       </Card>
//     </Grid>
//   );
// };

import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

interface CampaignItemProps {
  imageUrl: string;
  title: string;
  buttonText: string;
}

export const CampaignItem: React.FC<CampaignItemProps> = ({
  imageUrl,
  title,
  buttonText,
}) => {
  const cardWidth = { xs: "100%", sm: "100%", md: "33.3333%" };

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ maxWidth: "100%", m: 2 }}>
      <Card>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image={imageUrl}
          alt="Campaign Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
          >
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
