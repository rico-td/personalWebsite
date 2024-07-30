import "./App.css";
import { ContactBanner, Navbar, LoadingScreen } from "./components";

// import backgroundPic from "../public/assets/images/hero_kurz.png";

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
