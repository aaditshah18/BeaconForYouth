import { ThemeProvider } from '@mui/system';
import './App.css'
import { useEffect } from 'react'
import { Container } from '@mui/material';
import theme from './styles/themes';
import Appbar from './components/appbar';
import AppDrawer from './components/drawer';
import { UIProvider } from './components/ui-context';

function App() {
  console.log("App component is rendering");

  useEffect(() => {
    console.log("Changing title");
    document.title = "SafeHarbourYouth";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <UIProvider>
        <Appbar />
        <AppDrawer/>
        </UIProvider>

      </Container>
    </ThemeProvider>
  );
}

export default App;
