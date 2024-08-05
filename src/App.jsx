import "./App.css";
import { ContactBanner, Navbar, LoadingScreen } from "./components";

import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <LoadingScreen />
      <Navbar />
      <Hero />
      {/* <ContactBanner /> */}
      <div className="h-[100vh] bg-[var(--polish-metal)]"></div>
      <div className="h-[100vh] bg-[var(--background-gray)]"></div>
      <div className="h-[100vh] bg-[var(--ruined-smores)]"> </div>
      {/* <div className="h-[100vh] bg-[var(--stargazing)]"></div> */}
      {/* <div className="h-[100vh] bg-[var(--armor-wash)]"></div> */}
      {/* <div className="h-[100vh] bg-[var(--absolute-zero)]"></div> */}
    </div>
  );
}

export default App;
