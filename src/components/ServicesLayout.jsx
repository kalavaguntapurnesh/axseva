import React from "react";
import ServicesHero from "./ServicesHero";
import NavBar from "./Navbar";

const ServicesLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <ServicesHero />
    </div>
  );
};

export default ServicesLayout;
