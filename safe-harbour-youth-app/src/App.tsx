import { ThemeProvider } from "@mui/system";
import "./App.css";
import { useEffect } from "react";
import { Container } from "@mui/material";
import theme from "./styles/themes";
import Appbar from "./components/header/appbar";
import AppDrawer from "./components/header/drawer";
import { UIProvider } from "./components/header/ui-context";
import { Outlet } from "react-router";
import Footer from "./components/Footer/footer";
import Slider from "./components/Slider/hero-slider";
import AboutUs from "./components/AboutUs/about-us";
import CampaignSection from "./components/campaignsec";
import NGOLists from "./components/NGOLists";
import TrackComplaint from "./components/trackComplaint.tsx";

function App() {
  console.log("App component is rendering");

  useEffect(() => {
    console.log("Changing title");
    document.title = "SafeHarbourYouth";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}  sx={{ background: "#fff" }} disableGutters>
        <UIProvider>
          <Appbar />
          <AppDrawer />
          <Outlet></Outlet>
        </UIProvider>
        <Slider />
        <AboutUs />
        <CampaignSection />
        <NGOLists />
        <TrackComplaint />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;

// import { ThemeProvider } from "@mui/system";
// import "./App.css";
// import { useEffect } from "react";
// import { Container } from "@mui/material";
// import theme from "./styles/themes";
// import Appbar from "./components/header/appbar";
// import AppDrawer from "./components/header/drawer";
// import { UIProvider } from "./components/header/ui-context";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/footer";
// import Slider from "./components/Slider/hero-slider";
// import AboutUs from "./components/AboutUs/about-us";
// import CampaignSection from "./components/campaignsec";
// import NGOLists from "./components/NGOLists";
// import TrackComplaint from "./components/trackComplaint";
// import ComplaintForm from "./components/complaintform";

// function App() {
//   useEffect(() => {
//     document.title = "SafeHarbourYouth";
//   }, []);

//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <Container maxWidth="xl" sx={{ background: "#fff" }}>
//           <Appbar />
//           <Routes>
//             <Route
//               path="./components/Slider/hero-slider"
//               element={<Slider />}
//             />
//             <Route path="./components/AboutUs/about-us" element={<AboutUs />} />
//             <Route
//               path="./components/campaignsec"
//               element={<CampaignSection />}
//             />
//             <Route path="./components/NGOLists" element={<NGOLists />} />
//             <Route
//               path="./components/trackComplaint"
//               element={<TrackComplaint />}
//             />
//             <Route
//               path="./components/complaintform"
//               element={<ComplaintForm />}
//             />
//             {/* Define more routes as needed */}
//           </Routes>
//           <Footer />
//         </Container>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
