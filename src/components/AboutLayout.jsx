import React from "react";
import NavBar from "./Navbar";
import AboutHero from "./AboutHero";

const AboutLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <AboutHero />
    </div>
  );
};

export default AboutLayout;
