import AboutUs from "../components/AboutUs/about-us";
import CampaignSection from "../components/campaignsec";
import NGOLists from "../components/NGOLists";
import Slider from "../components/Slider/hero-slider";
import TrackComplaint from "../components/trackComplaint";

export default function Home() {
  return (
    <>
      <Slider />
      <AboutUs />
      <CampaignSection />
      <NGOLists />
      <TrackComplaint />
    </>
  );
}
