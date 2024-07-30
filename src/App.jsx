import "./App.css";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import Navbar from "./components/Navbar/Navbar";

import backgroundPic from "../public/assets/images/hero_kurz.png";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  return (
    <>
      <Navbar />
      <LoadingScreen />
      <ContactBanner />

      <div className="h-[100vh] bg-black"></div>
      <div className="h-[100vh] bg-white"></div>
      <div className="h-[100vh] bg-red-500"></div>
    </>
  );
}

export default App;
