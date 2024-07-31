import "./App.css";
import { ContactBanner, Navbar, LoadingScreen } from "./components";

// import backgroundPic from "../public/assets/images/hero_kurz.png";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <LoadingScreen />
        <ContactBanner />

        <div className="h-[100vh] bg-[var(--background-dark)]"></div>
        <div className="h-[100vh] bg-white"></div>
        <div className="h-[100vh] bg-red-500"></div>
      </main>
    </>
  );
}

export default App;
