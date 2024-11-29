import React from "react";
import NavBar from "./Navbar";
import IndustriesHero from "./IndustriesHero";

const IndustriesLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <IndustriesHero />
    </div>
  );
};

export default IndustriesLayout;
