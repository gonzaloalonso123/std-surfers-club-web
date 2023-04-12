import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import BackgroundImage from "./components/backgroundImage/BackgroundImage";
import { Comic } from "./components/Comic/Comic";
import { Faq } from "./components/FAQ/Faq";
import { Footer } from "./components/Footer/Footer";
import { LagunaReef } from "./components/LagunaReef/LagunaReef";
import { RoadMap } from "./components/RoadMap/RoadMap";
import { TheTeam } from "./components/TheTeam/TheTeam";

function App() {
  return (
    <div>
      <BackgroundImage />
      <AboutUs />
      <RoadMap />
      <LagunaReef />
      <Comic />
      <TheTeam />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
