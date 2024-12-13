import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import ContactUsButton from "../components/ContactUsButton";
import SolutionsLayout from "./../components/SolutionsLayout";

const Solutions = () => {
  const services3 = [
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-business-icon-download-in-svg-png-gif-file-formats--financial-growth-achievement-goals-startup-culture-pack-icons-29318.png?f=webp&w=512",
      title: "We make work simple",
      description:
        "Axseva simplifies complex processes with tailored solutions, seamless integrations, advanced analytics, streamlined workflows, and reliable ongoing support.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-business-icon-download-in-svg-png-gif-file-formats--group-team-leadership-cooperation-startup-culture-pack-icons-29324.png?f=webp&w=512",
      title: "We are masters of craft",
      description:
        "Axseva excels in delivering precision-crafted solutions, leveraging expertise in integrations, analytics, customization, and support to drive success.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-campaign-icon-download-in-svg-png-gif-file-formats--launch-startup-boostup-rocket-culture-pack-business-icons-29322.png?f=webp&w=512",
      title: "We work with trust & safety",
      description:
        "Axseva ensures secure solutions, fosters reliable partnerships, safeguards data integrity, promotes compliance, and builds confidence through tailored, trusted services.",
    },
  ];
  return (
    <>
      <SolutionsLayout />

      <div className="lg:pt-16 pt-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex items-center text-center justify-center "
                >
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor">
                    Solutions we offer
                  </h1>
                </motion.div>
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className=" text-4xl text-headingColor font-bold text-center"
                >
                  The future of your business is safe
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-base text-sideHeading text-center md:text-lg"
                >
                  AXSeva provides tailored business solutions, advanced
                  analytics, custom integrations, seamless workflows, and
                  continuous support for optimized operations.
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 pt-10 max-w-full"
                >
                  {services3.map((service, index) => (
                    <div
                      key={index}
                      className="flex md:justify-start justify-center"
                    >
                      <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center">
                            <img
                              src={service.imageUrl}
                              alt="services_five"
                              className="w-24 h-24"
                            />
                          </div>
                          <div className="flex justify-center items-center">
                            <h1 className="text-2xl text-headingColor font-bold text-center">
                              {service.title}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center text-gray-600 text-center">
                            <p>{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                {/* <div className="flex justify-center pt-6">
                  <a
                    href="/contact"
                    class="relative mt-2 flex h-[54px] lg:w-1/4 w-[90%] items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                  >
                    <span class="relative z-10">Speak with us now</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}

      <div className="lg:pt-16 pt-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex items-center text-center justify-center "
                >
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor">
                    How it works
                  </h1>
                </motion.div>
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className=" text-4xl text-headingColor font-bold text-center"
                >
                  A new paradigm for your enterprise
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-base text-sideHeading text-center md:text-lg"
                >
                  Whether it’s a better way to manage customers, track
                  inventory, we create custom solutions that make work easier.
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="pt-8"
                >
                  <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-3 gap-4 lg:h-[600px] h-[1000px]">
                    {/* First Card */}
                    <div className="lg:row-span-2 row-span-1 lg:col-span-1 relative rounded overflow-hidden">
                      {/* Background Image */}
                      <img
                        src="https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Overlay Content */}
                      <div className="absolute flex space-y-2 flex-col inset-0 p-5 bg-opacity-40 bg-black items-start justify-start">
                        <h2 className="text-white text-2xl font-semibold">
                          Fully Managed Service
                        </h2>
                        <p className="text-white">
                          AXSeva collaborates with you from scoping to rollout,
                          ensuring regular check-ins and communication
                          throughout the process.
                        </p>
                      </div>
                    </div>

                    {/* Second Card */}
                    <div className="lg:row-span-1 lg:col-span-1 bg-[#f2f2f3] rounded relative overflow-hidden">
                      <img
                        src="https://www.tectura.com/wp-content/uploads/2023/04/Services_ApplicationManagementServices.jpg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="inset-0 absolute flex flex-col space-y-2 p-5 bg-opacity-40 bg-black items-start justify-start">
                        <h1 className="text-white font-semibold text-2xl">
                          Faster Development
                        </h1>
                        <p className="text-white">
                          Axseva can deliver faster services by leveraging
                          efficient workflows, expert teams
                        </p>
                      </div>
                    </div>

                    {/* Third Card */}
                    <div className="lg:row-span-1 lg:col-span-1 bg-[#f2f2f3] rounded overflow-hidden relative">
                      <img
                        src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1303809341-2048x2048-1.jpg"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-opacity-40 bg-black flex flex-col space-y-2 p-5 justify-start items-start">
                        <h1 className="text-2xl text-white font-semibold">
                          Our team is your team
                        </h1>
                        <p className="text-white">
                          AXSeva is a new type of development partnership built
                          for your success.
                        </p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* last section */}

      <div className="lg:pt-16 pt-12 pb-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="mx-auto max-w-[1000px] bg-[#f6f8f9] shadow lg:h-[280px] h-[300px] rounded">
                <div className="space-y-6">
                  <div class="flex justify-center items-center lg:pt-12 pt-8 text-headingColor">
                    <h1 class="md:mx-0 mx-2 md:text-4xl text-center text-3xl font-bold">
                      Transform your business with us
                    </h1>
                  </div>

                  <div class="flex justify-center items-center text-gray-600 text-center max-w-lg mx-auto ">
                    <p className="md:mx-0 mx-2 text-center">
                      Your Expert in Microsoft Dynamics 365 Finance & Operations
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      hrefLang="/"
                      href="/con"
                      class="bg-mainColor transition duration-1000 text-white py-3 px-12 rounded"
                    >
                      Contact us now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <ContactUsButton />

      <Footer />
    </>
  );
};

export default Solutions;
