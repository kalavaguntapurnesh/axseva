import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import ServicesLayout from "../components/ServicesLayout";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import ContactUsButton from "../components/ContactUsButton";

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
      <ServicesLayout />

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

      {/* last section */}

      <div className="lg:pt-16 pt-12 pb-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="mx-auto max-w-[1000px] bg-[#f6f8f9] shadow h-[280px] rounded">
                <div className="space-y-6">
                  <div class="flex justify-center items-center pt-12 text-headingColor">
                    <h1 class="md:text-4xl text-3xl font-bold">
                      Transform your business with us
                    </h1>
                  </div>

                  <div class="flex justify-center items-center text-gray-600 text-center max-w-lg mx-auto ">
                    <p className="md:mx-0 mx-2">
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
