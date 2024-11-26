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
import Industries from "./pages/Industries";
import Support from "./pages/Support";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/managed-it-services" element={< Services/>}/>
        <Route path="/industries" element={< Industries/>}/>
        <Route path="/dynamics-365-support-services" element={<Support/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
