import { AppbarContainer, MyList, Logo, TopbarContainer } from "../../styles/appbar-styles";
import logoImage from '../../../public/images/logo.png';
import { Button, styled } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const ElevatedButton = styled(Button)({
    borderRadius: '20px', // Set border radius to make ends rounded
    padding: '10px 20px', // Add padding for better button appearance
    color: 'var(--white)',
    marginLeft: 'auto',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', // Add elevation (shadow)
    '&:hover': {
        backgroundColor: 'green', // Change background color on hover
    },
});

const StyledListItemText = styled('span')({
    display: 'inline-block',
    padding: '6px 12px',
    '&:hover': {
        color: 'var(--primary)',
        cursor: 'pointer'
    },
    '&:not(:last-child)': {
        marginRight: '18px', // Add right margin to all buttons except the last one
      },
});

const LoginButton = styled(Button)({
    '&:hover': {
        backgroundColor: 'var(--primary)',
        color: 'var(--white)',
    },
    textDecoration: 'none',
    marginTop: '3px',
    marginBottom: '3px',
});

const DonateButton = styled(Button)({
    backgroundColor: 'var(--red)', 
    color: 'var(--white)',
    '&:hover': {
      backgroundColor: 'var(--danger)', 
    },
    borderRadius: '20px',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px', 
    marginTop: '3px',
    marginBottom: '3px',
  });

export default function DesktopAppBar() {
    return (
        <>
        <TopbarContainer>
            <div style={{ marginLeft: 'auto', display: 'flex' }}> 
                <Link to="/login" style={{ textDecoration: 'none' }}>
                <LoginButton variant="outlined" color="primary">Login</LoginButton>
                </Link> 
                <DonateButton variant="contained" startIcon={<FavoriteIcon />}>Donate</DonateButton>
            </div>
        </TopbarContainer>
        <AppbarContainer>
            <Logo>
                <img src={logoImage} alt="Logo" style={{ width: '100%' }} />
            </Logo>
            <MyList type="row" >
                <StyledListItemText>Home</StyledListItemText>
                <StyledListItemText>About</StyledListItemText>
                <StyledListItemText>NGO</StyledListItemText>
                <StyledListItemText>Resources</StyledListItemText>
            </MyList>
                <div style={{ marginLeft: 'auto' }}>
                    <ElevatedButton variant="contained" color="secondary">File a complaint</ElevatedButton>
                </div>
        </AppbarContainer></>
        
    );
}
