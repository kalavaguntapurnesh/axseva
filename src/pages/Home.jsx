import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import HomeFinal from "../components/HomeFinal";
import Bento from "../components/Bento";
import MainLayout from "./../components/MainLayout";
// import ContactUsButton from "../components/ContactUsButton";

const Home = () => {
  return (
    <>
      <MainLayout />
      <Carousel />
      <Bento />
      <HomeFinal />
      {/* <ContactUsButton /> */}
      <Footer />
    </>
  );
};

export default Home;
