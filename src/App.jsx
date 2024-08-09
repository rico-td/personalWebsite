import React, { useState } from "react";

import "./App.sass";

import { ContactBanner, Topnav, Footer, LoadingScreen } from "./components";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.jsx";

import Hero from "./components/Hero/Hero.jsx";
import TopnavMobile from "./components/TopnavMobile/TopnavMobile.jsx";

function App() {
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {}, [setLoading]);

  return (
    <div className="app">
      <LoadingScreen />
      <Topnav />

      <Hero />

      {/* <ContactBanner /> */}
      <div className="h-[100vh] bg-[var(--highlight-bluish-light)]">
        {/* <TopnavMobile /> */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
