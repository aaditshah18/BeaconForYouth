import { Link } from 'react-scroll';
import { Button, styled } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppbarContainer, MyList, Logo, TopbarContainer } from "../../styles/appbar-styles";
import logoImage from '../../../public/images/logo.png';

const ElevatedButton = styled(Button)({
  borderRadius: '20px',
  padding: '10px 20px',
  color: 'var(--white)',
  marginLeft: 'auto',
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
  '&:hover': {
    backgroundColor: 'green',
  },
});

const StyledListItemText = styled('span')({
  display: 'inline-block',
  padding: '6px 12px',
  '&:hover': {
    color: 'var(--primary)',
    cursor: 'pointer'
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
                        <LoginButton variant="outlined" color="primary">Login</LoginButton>
                    <DonateButton variant="contained" startIcon={<FavoriteIcon />}>Donate</DonateButton>
                </div>
            </TopbarContainer>
            <AppbarContainer>
                <Logo>
                    <img src={logoImage} alt="Logo" style={{ width: '100%' }} />
                </Logo>
                <MyList type="row" >
                    <Link to="carouselExampleIndicators" style={{ textDecoration: 'none' }} spy={true}  duration={500}>
                        <StyledListItemText>Home</StyledListItemText>
                    </Link>
                    <Link to="about" style={{ textDecoration: 'none' }} spy={true} duration={500}>
                    <StyledListItemText>About</StyledListItemText>
                    </Link> 
                    <StyledListItemText>NGO</StyledListItemText>
                    <StyledListItemText>Resources</StyledListItemText>
                </MyList>
                <div style={{ marginLeft: 'auto' }}>
                    <ElevatedButton variant="contained" color="secondary">File a complaint</ElevatedButton>
                </div>
            </AppbarContainer>
        </>
    );
}
