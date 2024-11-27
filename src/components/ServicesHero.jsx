import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesHero = () => {
  const slides = [
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1303809341-2048x2048-1.jpg",
      heading: "Microsoft Dynamics 365 Finance & Operations",
      paragraph:
        "Unify capabilities with Dynamics 365—modern that help move your business forward",
      buttonText: "Discover More",
      buttonLink: "/discover",
    },
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/04/End-to-End-Retail-ERP-CRM-and-POS-Solutions-for-eCommerce-Online-Retail.jpg",
      heading: "Transforming Businesses by Technology",
      paragraph:
        "Stay ahead in the market with our innovative and reliable services.",
      buttonText: "Find Out More",
      buttonLink: "/learn-more",
    },
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/01/Mask-Group-30.png",
      heading: "SHAPE THE FUTURE OF YOUR BUSINESS",
      paragraph:
        "We ensure smooth implementation and ongoing support for your success.",
      buttonText: "Speak to us",
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
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl uppercase">
          {slides[currentIndex].heading}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light">
          {slides[currentIndex].paragraph}
        </p>
        <a
          href={slides[currentIndex].buttonLink}
          className="mt-8 inline-block px-6 py-3 border-[1px] border-navGray text-white rounded-lg text-lg font-light transition hover:bg-opacity-90"
        >
          {slides[currentIndex].buttonText}
        </a>
      </div>
    </section>
  );
};

export default ServicesHero;
