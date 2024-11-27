import React from "react";
import NavBar from "./Navbar";
import SupportHero from "./SupportHero";

const SupportLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <SupportHero />
    </div>
  );
};

export default SupportLayout;
