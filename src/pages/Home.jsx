import React from "react";
import Hero from "./../components/Hero";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Carousel from "../components/Carousel";
import HomeFinal from "../components/HomeFinal";
import Bento from "../components/Bento";
import MainLayout from "./../components/MainLayout";

const Home = () => {
  return (
    <>
      <MainLayout />
      <Carousel />
      <Bento />
      <HomeFinal />
      <Footer />
    </>
  );
};

export default Home;
