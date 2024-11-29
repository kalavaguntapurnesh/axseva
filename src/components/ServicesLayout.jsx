import React from "react";
import AboutHero from "./AboutHero";
import ServicesHero from "./ServicesHero";
import NavBar from "./Navbar";

const ServicesLayout = () => {
  return (
    <div className="flex flex-col h-screen animate-slidein [--slidein-delay:400ms] opacity-0">
      <NavBar />
      <ServicesHero />
    </div>
  );
};

export default ServicesLayout;
