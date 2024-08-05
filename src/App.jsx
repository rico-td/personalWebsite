import "./App.css";
import { ContactBanner, Navbar, Footer, LoadingScreen } from "./components";

import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <LoadingScreen />
      <Navbar />
      <Hero />
      {/* <ContactBanner /> */}
      <div className="h-[100vh] bg-[var(--background-light)]"></div>

      <Footer />
    </div>
  );
}

export default App;
