import "./App.css";
import ContactBannerr from "./components/contactBanner/ContactBannerr";
import Navbar from "./components/navbar/Navbar";

function App() {
   return (
      <>
         <ContactBannerr />
         <Navbar />
         <div className="h-[100vh] bg-black"></div>
         <div className="h-[100vh] bg-white"></div>
         <div className="h-[100vh] bg-red-500"></div>
         <div className="h-[100vh] bg-blue-500"></div>
      </>
   );
}

export default App;
