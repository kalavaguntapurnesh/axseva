import React from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen animate-slidein [--slidein-delay:400ms] opacity-0">
      {/* NavBar */}
      <NavBar />
      {/* Hero */}
      <Hero />
    </div>
  );
};

export default MainLayout;
