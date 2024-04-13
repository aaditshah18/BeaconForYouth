import { createTheme } from '@mui/material/styles';
import '../index.css'

// Function to get the value of a CSS variable
const getCssVariable = (variableName: string): string => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
 };

const primaryColor = getCssVariable('--primary'); 
const seconaryColor = getCssVariable('--secondary'); 

const theme = createTheme({
    palette: {
        primary: {
          main: primaryColor,
        },
        secondary: {
          main: seconaryColor,
        },
      },
  components: {
    MuiButton: {
        defaultProps: {
            disableElevation: true,
            disableFocusRipple: true
        }
    },
    MuiDrawer: {
      styleOverrides: {
        paper:{
          width: 250,
          background: primaryColor,
          color: 'white',
          borderRadius:'80px 0px 0px 0px',
          borderLeft: `10px solid orange`,
          paddingLeft: '10px' 
        }
      }
    },
    MuiDivider: {
      styleOverrides:{
        root: {
          borderColor: 'white'
        }
      }
    }
  }
});

export default theme;