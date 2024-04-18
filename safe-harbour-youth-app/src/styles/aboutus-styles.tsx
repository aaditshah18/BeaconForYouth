import { styled } from "@mui/material/styles";
import { Card, CardMedia, Typography } from "@mui/material";

export const Root = styled("div")({
  flexGrow: 1,
  padding: "1rem",
  backgroundColor: "var(--white)",
  overflow: "hidden",
});

export const Heading = styled(Typography)({
  textAlign: "center",
  color: "var(--primary)",
  margin: "1rem 0",
});

export const StyledCard = styled(Card)({
  minHeight: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0.5rem",
  padding: "1rem",
  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s",
  "&:hover": {
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.3)",
  },
});

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  width: "100%",
});

export const SectionTitle = styled(Typography)({
  textAlign: "center",
  color: "var(--primary)",
});
