// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Stack,
//   useTheme,
// } from "@mui/material";

// interface ListOfNGOProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   readMoreText: string;
// }
// export const ListOfNGO: React.FC<ListOfNGOProps> = ({
//   imageUrl,
//   title,
//   description,
//   readMoreText,
// }) => {
//   const theme = useTheme();

//   return (
//     <Card
//       sx={{
//         maxWidth: 345,
//         m: 2,
//         bgcolor: theme.palette.background.paper,
//         boxShadow: 1,
//         "&:hover": { boxShadow: 3 },
//       }}
//     >
//       <CardMedia
//         component="img"
//         sx={{ height: 180, objectFit: "cover" }}
//         image={imageUrl}
//         alt={title}
//       />
//       <CardContent sx={{ minHeight: 220 }}>
//         <Typography gutterBottom variant="subtitle1" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//           {description}
//         </Typography>
//         <Stack direction="column" spacing={1}>
//           <Button variant="outlined" sx={{ justifyContent: "flex-start" }}>
//             {readMoreText}
//           </Button>
//           {/* If you need another button, you can add it here. */}
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Stack,
//   useTheme,
//   Box,
// } from "@mui/material";

// interface ListOfNGOProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   readMoreText: string;
// }

// export const ListOfNGO: React.FC<ListOfNGOProps> = ({
//   imageUrl,
//   title,
//   description,
//   readMoreText,
// }) => {
//   const theme = useTheme();

//   return (
//     <Card
//       sx={{
//         width: 345, // Fixed width
//         m: 2,
//         bgcolor: theme.palette.background.paper,
//         boxShadow: 1,
//         "&:hover": { boxShadow: 3 },
//       }}
//     >
//       <CardMedia
//         component="img"
//         sx={{ height: 140, objectFit: "cover" }} // Fixed height for image
//         image={imageUrl}
//         alt={title}
//       />
//       <CardContent sx={{ height: 220 }}>
//         {" "}
//         {/* Fixed height for content */}
//         <Typography
//           gutterBottom
//           variant="subtitle1"
//           component="div"
//           sx={{ height: 60 }}
//         >
//           {" "}
//           {/* Fixed height for title */}
//           {title}
//         </Typography>
//         <Box
//           sx={{
//             height: 80, // Fixed height for description
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             display: "-webkit-box",
//             WebkitLineClamp: 3,
//             WebkitBoxOrient: "vertical",
//           }}
//         >
//           <Typography variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//         </Box>
//         <Stack direction="column" spacing={1}>
//           <Button variant="outlined" sx={{ justifyContent: "flex-start" }}>
//             {readMoreText}
//           </Button>
//           {/* If you need another button, you can add it here. */}
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Stack,
//   Box,
// } from "@mui/material";

// interface ListOfNGOProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   readMoreText: string;
// }

// export const ListOfNGO: React.FC<ListOfNGOProps> = ({
//   imageUrl,
//   title,
//   description,
//   readMoreText,
// }) => {
//   return (
//     <Card
//       sx={{
//         maxWidth: 345, // Match width in the design
//         m: 2,
//         borderRadius: 2, // Adjusted for rounded corners
//         boxShadow: 3, // Adjust shadow to match design
//       }}
//     >
//       <CardMedia
//         component="img"
//         sx={{ height: 194 }} // Adjusted to match aspect ratio from the design
//         image={imageUrl}
//         alt={title}
//       />
//       <CardContent>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ fontWeight: "bold", mb: 1 }}
//         >
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//           {description}
//         </Typography>
//         <Box sx={{ textAlign: "center", mt: 2 }}>
//           <Button variant="contained" color="primary" sx={{ borderRadius: 1 }}>
//             {readMoreText}
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Stack,
//   Box,
// } from "@mui/material";

// interface ListOfNGOProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   readMoreText: string;
// }

// export const ListOfNGO: React.FC<ListOfNGOProps> = ({
//   imageUrl,
//   title,
//   description,
//   readMoreText,
// }) => {
//   return (
//     <Card
//       sx={{
//         maxWidth: 345, // Match width in the design
//         m: 2,
//         borderRadius: 2, // Adjusted for rounded corners
//         boxShadow: 3, // Adjust shadow to match design
//         // Set a fixed height for the card
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <CardMedia
//         component="img"
//         sx={{ height: 194 }} // Adjusted to match aspect ratio from the design
//         image={imageUrl}
//         alt={title}
//       />
//       <CardContent
//         sx={{
//           flexGrow: 1, // Allows the card content to fill the space
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between", // Distributes space between title/description and button
//         }}
//       >
//         <Typography
//           gutterBottom
//           variant="h6"
//           component="div"
//           sx={{
//             fontWeight: "bold",
//             height: "3rem", // Fixed height for title
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             display: "-webkit-box",
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: "vertical",
//           }}
//         >
//           {title}
//         </Typography>
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{
//             mb: 2,
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             display: "-webkit-box",
//             WebkitLineClamp: 4,
//             WebkitBoxOrient: "vertical",
//           }}
//         >
//           {description}
//         </Typography>
//         <Stack direction="column" spacing={1}>
//           <Button variant="contained" color="primary" sx={{ borderRadius: 1 }}>
//             {readMoreText}
//           </Button>
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// import React from "react";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
//   Stack,
//   Box,
// } from "@mui/material";

// interface ListOfNGOProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   readMoreText: string;
// }

// export const ListOfNGO: React.FC<ListOfNGOProps> = ({
//   imageUrl,
//   title,
//   description,
//   readMoreText,
// }) => {
//   return (
//     <Card
//       sx={{
//         width: "315.99px", // Set fixed width
//         height: "500px", // Set fixed height
//         m: 2,
//         borderRadius: 2, // Adjusted for rounded corners
//         boxShadow: 3, // Adjust shadow to match design
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between", // Ensures button sticks to the bottom
//       }}
//     >
//       <CardMedia
//         component="img"
//         sx={{ height: 140, objectFit: "cover" }} // Adjust the height as needed
//         image={imageUrl}
//         alt={title}
//       />
//       <CardContent
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <Typography
//           gutterBottom
//           variant="h6"
//           component="div"
//           sx={{
//             fontWeight: "bold",
//             display: "-webkit-box",
//             WebkitLineClamp: 2,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//           }}
//         >
//           {title}
//         </Typography>
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           sx={{
//             display: "-webkit-box",
//             WebkitLineClamp: 4,
//             WebkitBoxOrient: "vertical",
//             overflow: "hidden",
//             textOverflow: "ellipsis",
//             mb: 2,
//           }}
//         >
//           {description}
//         </Typography>
//         <Box>
//           <Button variant="contained" color="primary" sx={{ borderRadius: 1 }}>
//             {readMoreText}
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

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
