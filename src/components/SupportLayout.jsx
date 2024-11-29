import React from "react";
import NavBar from "./Navbar";
import SupportHero from "./SupportHero";

const SupportLayout = () => {
  return (
    <div className="flex flex-col h-screen animate-slidein [--slidein-delay:400ms] opacity-0">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <SupportHero />
    </div>
  );
};

export default SupportLayout;
