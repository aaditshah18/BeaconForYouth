// import { makeStyles, Theme } from "@material-ui/core";

// export const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//     background: "linear-gradient(to right, #ffffff 50%, #f7f7f7 50%)",
//     overflow: "hidden",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     color: theme.palette.text.secondary,
//     background: theme.palette.background.paper,
//     boxShadow: theme.shadows[3],
//     textAlign: "justify",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     height: "100%",
//     transition: theme.transitions.create(["background-color", "transform"], {
//       duration: theme.transitions.duration.standard,
//     }), // Smooth transition for background color and transform
//     "&:hover": {
//       backgroundColor: "rgba(0, 0, 0, 0.04)", // Slightly darker on hover
//       transform: "scale(1.03)", // Slight scale on hover for an interactive effect
//     },
//   },
//   justifiedText: {
//     textAlign: "justify",
//   },
//   contentSpacing: {
//     marginBottom: theme.spacing(2), // Adjust space below the content if needed
//   },
// }));

import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    // Adjust the gradient stop to extend the grey background to cover "Our Mission"
    background: "linear-gradient(to right, #ffffff 33%, #f7f7f7 33%)",
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    textAlign: "justify",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    transition: theme.transitions.create(["background-color", "transform"], {
      duration: theme.transitions.duration.standard,
    }), // Smooth transition for background color and transform
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)", // Slightly darker on hover
      transform: "scale(1.03)", // Slight scale on hover for an interactive effect
    },
  },
  justifiedText: {
    textAlign: "justify",
  },
  contentSpacing: {
    marginBottom: theme.spacing(2), // Adjust space below the content if needed
  },
}));

// import { makeStyles, Theme } from "@mui/material";

// export const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(4),
//     background: "linear-gradient(to right, #ffffff 33%, #f7f7f7 33%)",
//     overflow: "hidden",
//   },
//   paper: {
//     padding: theme.spacing(2),
//     color: theme.palette.text.secondary,
//     background: theme.palette.background.paper,
//     boxShadow: theme.shadows[3],
//     textAlign: "justify",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     height: "100%",
//     transition: theme.transitions.create(["background-color", "transform"], {
//       duration: theme.transitions.duration.standard,
//     }),
//     "&:hover": {
//       // Change to very light green on hover
//       backgroundColor: "rgba(144, 238, 144, 0.3)", // This is light green with some transparency
//       transform: "scale(1.03)",
//     },
//   },
//   justifiedText: {
//     textAlign: "justify",
//   },
//   contentSpacing: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// export default useStyles;
