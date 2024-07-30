import "./App.css";
import ContactBannerr from "./components/contactBanner/ContactBannerr";
import Navbar from "./components/navbar/Navbar";

import backgroundPic from "../public/assets/images/hero_kurz.png";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

function App() {
  return (
    <>
      <Navbar />
      <LoadingScreen />
      <ContactBannerr />

      <div className="h-[100vh] bg-black"></div>
      <div className="h-[100vh] bg-white"></div>
      <div className="h-[100vh] bg-red-500"></div>
      <div className="h-[100vh] bg-blue-500"></div>
    </>
  );
}

export default App;
