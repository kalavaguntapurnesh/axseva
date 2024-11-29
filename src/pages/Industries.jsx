import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import IndustriesLayout from "./../components/IndustriesLayout";
const Industries = () => {
  return (
    <>
      <IndustriesLayout />
      {/* Section 1 */}

      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* grid 1 */}
                <div className="flex flex-col space-y-6 w-full justify-center">
                  <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-headingColor">
                    Industries
                  </div>
                  <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                    Power the growth of your industry by implementing Dynamics
                    365 Business applications. Our Dynamics 365 experts have the
                    expertise to assist you in any capacity you require.
                  </p>
                </div>
                {/* grid 2 */}
                <div className="flex justify-center items-center w-full">
                  <img
                    src="https://www.dynamicssquare.com/img/Dynamics-365-for-professional-services.png"
                    className="lg:w-full w-[80%] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
              <div className="flex  w-full justify-center">
                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-headingColor">
                  Choose Your Industry{" "}
                </div>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10 max-w-full">
                {/* grid 1 */}
                <div className="p-6 border space-y-8 flex flex-col items-center justify-around rounded-lg shadow-xl hover:shadow-lg transition-transform hover:-translate-y-4 ">
                  <h1 className="text-2xl font-bold mb-4">Start Up</h1>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-mainColor text-white p-4 rounded-lg">
                      <Link to="/contact">View More</Link>
                    </button>
                  </div>
                </div>
                {/* grid 2 */}
                <div className="p-6 border space-y-8 flex flex-col items-center justify-around rounded-lg shadow-xl hover:shadow-lg transition-transform hover:-translate-y-4 ">
                  <h1 className="text-2xl font-bold mb-4">Not for Profit</h1>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-mainColor text-white p-4 rounded-lg">
                      <Link to="/contact">View More</Link>
                    </button>
                  </div>
                </div>
                {/* grid 3*/}
                <div className="p-6 border space-y-8 flex flex-col items-center justify-around rounded-lg shadow-xl hover:shadow-lg transition-transform hover:-translate-y-4 ">
                  <h1 className="text-2xl font-bold mb-4">E-Commerce</h1>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-mainColor text-white p-4 rounded-lg">
                      <Link to="/contact">View More</Link>
                    </button>
                  </div>
                </div>
                {/* grid 4 */}
                <div className="p-6 border space-y-8 flex flex-col items-center justify-around rounded-lg shadow-xl hover:shadow-lg transition-transform hover:-translate-y-4 ">
                  <h1 className="text-2xl font-bold mb-4">
                    Manufacturing & Distribution
                  </h1>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-mainColor text-white p-4 rounded-lg">
                      <Link to="/contact">View More</Link>
                    </button>
                  </div>
                </div>
                {/* grid 5 */}
                <div className="p-6 border space-y-8 flex flex-col items-center justify-around rounded-lg shadow-xl hover:shadow-lg transition-transform hover:-translate-y-4 ">
                  <h1 className="text-2xl font-bold mb-4">
                    Professional Services
                  </h1>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-mainColor text-white p-4 rounded-lg">
                      <Link to="/contact">View More</Link>
                    </button>
                  </div>
                </div>
                {/* grid 6 */}
                <div className="p-6 border space-y-8 flex flex-col items-center justify-around rounded-lg shadow-xl hover:shadow-lg transition-transform hover:-translate-y-4 ">
                  <h1 className="text-2xl font-bold mb-4">Food & Beverages</h1>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-mainColor text-white p-4 rounded-lg">
                      <Link to="/contact">View More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Industries;
