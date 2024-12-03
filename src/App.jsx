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
import Lottie from "lottie-react";
import { useState } from "react";
import Loading from "./assets/Loading.json";
import PrivacyPolicy from "./pages/Privacy";
import Industries from "./pages/Industries";
import Support from "./pages/Support";
import Benefits from "./pages/Benefits";
import MicrosoftDynamics365 from "./pages/Services/MicrosoftDynamics365";
import MicrosoftDynamics365Finance from "./pages/Services/MicrosoftDynamics365Finance";
import TermsAndConditions from "./pages/TermsAndConditions";
function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // setTimeout(() => {
  //   setIsLoading(false);
  // }, 1500);
  return (
    <BrowserRouter>
      {/* {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex justify-center items-center">
            <Lottie
              animationData={Loading}
              loop={true}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      ) : ( */}
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
        <Route
          path="/services-microsoft-dynamics-365"
          element={<MicrosoftDynamics365 />}
        />
        <Route
          path="/services-microsoft-dynamics-365-finance"
          element={<MicrosoftDynamics365Finance />}
        />
      </Routes>
      {/* )} */}
    </BrowserRouter>
  );
}

export default App;
