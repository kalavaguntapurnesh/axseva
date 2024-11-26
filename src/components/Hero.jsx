import React from "react";

const Hero = () => {
  return (
    <section className="flex-1 relative w-full">
      {/* Images Slider */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full">
          <div className="relative h-full overflow-hidden">
            <img
              src="https://www.tectura.com/wp-content/uploads/2023/02/img_v2_b89f65cc-04c0-4ada-b7c1-bcb856ff202h1.jpg"
              alt="Slide 1"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <img
              src="https://www.tectura.com/wp-content/uploads/2023/05/shutterstock_1852757821-scaled.jpg"
              alt="Slide 2"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <img
              src="https://www.tectura.com/wp-content/uploads/2023/01/Mask-Group-30.png"
              alt="Slide 3"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Welcome to AX Seva
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Your Trusted Partner in Solutions
        </p>
        <button className="mt-8 px-6 py-3 bg-mainColor text-white rounded-lg text-lg font-medium transition hover:bg-opacity-90">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
