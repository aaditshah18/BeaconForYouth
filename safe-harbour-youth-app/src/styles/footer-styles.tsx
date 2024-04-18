import { styled } from "@mui/system";
import { TextField, Typography } from "@mui/material";
import "../index.css";

const primary = "";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscrieTF = styled(TextField)(() => ({
  ".MuiInputlabel-root": {
    color: "primary",
  },
  ".MuiInput-root::before": {
    borderBottem: `1px solid ${primary}`,
  },
}));
