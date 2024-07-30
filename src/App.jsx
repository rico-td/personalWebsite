import "./App.css";
import ContactBannerr from "./components/contactBanner/ContactBannerr";
import Navbar from "./components/navbar/Navbar";

import backgroundPic from "../public/assets/images/hero_kurz.png";

function App() {
  return (
    <>
      <ContactBannerr />
      <Navbar />
      <div className="h-[100vh] bg-black">
        <img
          className="object-scale-down h-[80%] top-0 left-0"
          src={backgroundPic}
          alt="pic"
        />
      </div>
      <div className="h-[100vh] bg-white"></div>
      <div className="h-[100vh] bg-red-500"></div>
      <div className="h-[100vh] bg-blue-500"></div>
    </>
  );
}

export default App;
