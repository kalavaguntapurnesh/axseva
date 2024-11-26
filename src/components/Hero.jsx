import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/02/img_v2_b89f65cc-04c0-4ada-b7c1-bcb856ff202h1.jpg",
      heading: "Empowering Your Business",
      paragraph: "Transform your business with cutting-edge solutions tailored for you.",
      buttonText: "Discover More",
      buttonLink: "/discover",
    },
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/05/shutterstock_1852757821-scaled.jpg",
      heading: "Innovative Solutions",
      paragraph: "Stay ahead in the market with our innovative and reliable services.",
      buttonText: "Learn More",
      buttonLink: "/learn-more",
    },
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/01/Mask-Group-30.png",
      heading: "Seamless Integration",
      paragraph: "We ensure smooth implementation and ongoing support for your success.",
      buttonText: "Get Started",
      buttonLink: "/get-started",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      {/* Static Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          {slides[currentIndex].heading}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          {slides[currentIndex].paragraph}
        </p>
        <a
          href={slides[currentIndex].buttonLink}
          className="mt-8 inline-block px-6 py-3 bg-mainColor text-white rounded-lg text-lg font-medium transition hover:bg-opacity-90"
        >
          {slides[currentIndex].buttonText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
