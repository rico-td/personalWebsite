import "./App.css";
import { ContactBanner, Navbar, LoadingScreen } from "./components";

// import backgroundPic from "../public/assets/images/hero_kurz.png";

function App() {
  return (
    <>
      <Navbar />
      <LoadingScreen />
      <ContactBanner />

      <div className="h-[100vh] bg-[var(--background-gray)]"> </div>
      <div className="h-[100vh] bg-[var(--ruined-smores)]"> </div>
      <div className="h-[100vh] bg-[var(--polish-metal)]"></div>
      <div className="h-[100vh] bg-[var(--stargazing)]"></div>
      <div className="h-[100vh] bg-[var(--armor-wash)]"></div>
      <div className="h-[100vh] bg-[var(--absolute-zero)]"></div>
    </>
  );
}

export default App;
