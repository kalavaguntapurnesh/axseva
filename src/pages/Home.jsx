import React from "react";
import Hero from "./../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Carousel from "../components/Carousel";
import HomeFinal from "../components/HomeFinal";
import Bento from "../components/Bento";

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <Bento />
      <HomeFinal />
      <Footer />
    </>
  );
};

export default Home;
