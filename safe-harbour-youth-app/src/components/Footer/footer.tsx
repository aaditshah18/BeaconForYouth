import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscrieTF } from "../../styles/footer-styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

export default function Footer() {
    return (
        <Box 
            sx={{ 
                background: 'var(--dark)',
                color: 'var(--white)',
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' },
                width: '100%',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About</FooterTitle>
                    <Typography variant="caption">
                    Safe Harbour Youth is committed to empowering youth and preventing violence. Join us in creating a safer future for all.
                    </Typography>
                    <Box sx={{
                        mt: 4,
                        color: 'var(--white)' 
                    }}>
                        <FacebookIcon sx={{mr: 1}}/>
                        <TwitterIcon sx={{mr: 1}}/>
                        <InstagramIcon sx={{mr: 1}}/>
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption">
                                About
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption">
                                Complaint
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption">
                                NGO
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption">
                                Resources
                            </Typography>
                        </ListItemText> 
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption">
                                Donation
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Quick Links</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption">
                                File a Complaint
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">Newsletter</FooterTitle>
                    <Stack>
                        <SubscrieTF 
                            label="Email address"
                            variant="standard"
                            InputLabelProps={{ style: { color: 'var(--white)' } }}
                        />
                        <Button startIcon={<SendIcon sx={{color: 'var(--white)'}}/>}
                        sx={{mt:4, mb:4}}
                        variant="contained"
                        >
                        Subscribe
                        </Button>
                    </Stack>
                </Grid>

            </Grid>
        </Box>
    );
}
