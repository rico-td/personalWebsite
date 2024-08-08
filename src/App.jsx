import "./App.sass";

import { ContactBanner, Navbar, Footer, LoadingScreen } from "./components";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.jsx";

import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <div className="app">
      <LoadingScreen />
      {/* <HamburgerMenu /> */}

      <Navbar />
      <Hero />

      {/* <ContactBanner /> */}
      <div className="h-[100vh] bg-[var(--highlight-bluish-light)]"></div>

      <Footer />
    </div>
  );
}

export default App;
