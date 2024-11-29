import React from "react";
import NavBar from "./Navbar";
import AboutHero from "./AboutHero";

const AboutLayout = () => {
  return (
    <div className="flex flex-col h-screen animate-slidein [--slidein-delay:400ms] opacity-0">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <AboutHero />
    </div>
  );
};

export default AboutLayout;
