import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  background: "linear-gradient(to right, #ffffff 33%, #f7f7f7 33%)",
  overflow: "hidden",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  textAlign: "justify",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  boxShadow: theme.shadows[3],
  transition: theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    transform: "scale(1.03)",
  },
}));

export const JustifiedText = styled('div')(() => ({
  textAlign: "justify",
}));


export const ContentSpacing = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const ElevatedButton = styled(Button)(() => ({
  borderRadius: '20px',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '20px',
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
  '&:hover': {
    backgroundColor: 'green',
  },
}));

