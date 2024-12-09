import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import CookieConsent from "./components/CookieConsent";
import PrivacyPolicy from "./pages/Privacy";
import Industries from "./pages/Industries";
import Support from "./pages/Support";
import Benefits from "./pages/Benefits";
import MicrosoftDynamics365 from "./pages/Services/MicrosoftDynamics365";
import MicrosoftDynamics365Finance from "./pages/Services/MicrosoftDynamics365Finance";
import TermsAndConditions from "./pages/TermsAndConditions";
import PageNotFound from "./pages/PageNotFound";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    // Disable right-click globally
    const disableRightClick = (e) => e.preventDefault();

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/managed-it-services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/dynamics-365-support-services" element={<Support />} />
        <Route path="/collaborate-with-us" element={<Benefits />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<PageNotFound />}></Route>
        <Route
          path="/services-microsoft-dynamics-365"
          element={<MicrosoftDynamics365 />}
        />
        <Route
          path="/services-microsoft-dynamics-365-finance"
          element={<MicrosoftDynamics365Finance />}
        />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
