import { Divider, Drawer, List, ListItemButton, ListItemText, Button } from "@mui/material";
import {styled} from '@mui/system';
import { useUIContext } from "./ui-context";
import { DrawerCloseButton } from "../../styles/appbar-styles";
import CloseIcon from "@mui/icons-material/Close";

const MiddleDivider = styled((props)=>(
    <Divider variant="middle" {...props}/>
))``;

export default function AppDrawer(){

    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
        {drawerOpen && (<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon
                sx={{
                    fontSize: '2.5rem',
                    color: 'white'
                }}
                />
        </DrawerCloseButton>)}
        <Drawer anchor="right" open={drawerOpen}>
          <List>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText primary="About" />
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText primary="Complaints" />
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText primary="NGO" />
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText primary="Resources" />
            </ListItemButton>
            <MiddleDivider />
            <ListItemButton>
              <ListItemText primary="Donate" />
            </ListItemButton>
            <MiddleDivider />
            <Button
                variant="contained"
                sx={{
                    color: 'primary',
                    backgroundColor: 'var(--white)',
                    '&:hover': {
                        backgroundColor: 'var(--orange)',
                        color: 'var(--white)',
                    },
                    marginTop: '10px',
                    marginLeft: '10px',
                    paddingLeft: '20px' ,
                }}
                >
                Login
            </Button>
          </List>
        </Drawer>
        </>
      );
      
}