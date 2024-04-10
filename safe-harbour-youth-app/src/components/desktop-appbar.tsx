import { AppbarContainer, MyList, Logo} from "../styles/appbar-styles";
import logoImage from '../../public/images/logo.png';
import { ListItemText, Button, styled } from "@mui/material";

const ElevatedButton = styled(Button)({
    borderRadius: '20px', // Set border radius to make ends rounded
    padding: '10px 20px', // Add padding for better button appearance
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', // Add elevation (shadow)
    '&:hover': {
        backgroundColor: 'green', // Change background color on hover
    },
});

export default function DesktopAppBar() {



    return (
            <AppbarContainer>
            <Logo>
                <img src={logoImage} alt="Logo" style={{ width: '100%' }} />
            </Logo>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="About" />
                <ListItemText primary="Complaints" />
                <ListItemText primary="NGO Dashboard" />
                <ListItemText primary="Resources" />
                <ListItemText primary="Donate" />
            </MyList>
            <ElevatedButton variant="contained" color="secondary">File a complaint</ElevatedButton>
        </AppbarContainer>
        
    );
}
