import React from "react";
import NavBar from "./Navbar";
import SolutionsHero from "./SolutionsHero";

const SolutionsLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <SolutionsHero />
    </div>
  );
};

export default SolutionsLayout;
