import React from "react";
import ContactUsButton from "../components/ContactUsButton";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import IndustriesLayout from "./../components/IndustriesLayout";
const Industries = () => {
  return (
    <>
      <IndustriesLayout />
      {/* Section 1 */}

      <div className="pt-16 select-none" >
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-3 pb-4"
              >
                <div className="flex items-center lg:justify-start justify-center md:ml-4">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor">
                    Serving Industries
                  </h1>
                </div>

                <div className="text-4xl lg:text-start text-center font-bold text-headingColor lg:ml-2 px-2 lg:px-0">
                  <h1>We serve a wide range of Industries</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading lg:text-start text-center lg:ml-2 px-2 lg:px-0">
                  <p>
                    AXSeva offers unparalleled expertise across a diverse range
                    of industries. Whether you’re in Healthcare, Manufacturing,
                    Public Sector or beyond, we’ll deliver bespoke solutions
                    that align perfectly with your challenges. By combining our
                    industry expertise with cutting-edge Microsoft technologies,
                    we can help your organization thrive in today’s
                    digital-first world, no matter the sector.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8"
              >
                <div className="flex justify-center items-center">
                  <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                    <img
                      class="w-full h-60"
                      src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_EquipmentDistributors.jpg"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 pt-4">
                      <div class="font-bold lg:text-start text-center text-headingColor text-xl mb-2">
                        Manufacturing Services
                      </div>
                      <p class="text-gray-700 text-base lg:text-start text-center ">
                        From smart factories to predictive maintenance to
                        inventory management, we help manufacturers unlock
                        deeper insights and improve production efficiency with
                        better manufacturing technology and AI solutions.
                      </p>
                    </div>
                    <div class="px-6 pb-4 flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                      >
                        <span class="relative z-10">Know More</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                    <img
                      class="w-full h-60"
                      src="https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 pt-4">
                      <div class="font-bold lg:text-start text-center  text-headingColor text-xl mb-2">
                        Financial Services
                      </div>
                      <p class="text-gray-700 text-base lg:text-start text-center ">
                        Our cloud and data solutions increase agility, support
                        data-driven decision making, and enable innovative,
                        secure customer experiences to keep pace with evolving
                        market demands.
                      </p>
                    </div>
                    <div class="px-6 pb-4 flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                      >
                        <span class="relative z-10">Know More</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                    <img
                      class="w-full h-60"
                      src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 pt-4">
                      <div class="font-bold lg:text-start text-center  text-headingColor text-xl mb-2">
                        Software Services
                      </div>
                      <p class="text-gray-700 text-base lg:text-start text-center ">
                        Our full suite of digital transformation services will
                        help maximize IT investments, meet business goals and
                        support the pace of change in the technology industry
                        using the dynamic capabilities.
                      </p>
                    </div>
                    <div class="px-6 pb-4 flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                      >
                        <span class="relative z-10">Know More</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center lg:pt-4">
                  <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                    <img
                      class="w-full h-60"
                      src="https://images.pexels.com/photos/7679444/pexels-photo-7679444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 pt-4">
                      <div class="font-bold lg:text-start text-center  text-headingColor text-xl mb-2">
                        Retail Services
                      </div>
                      <p class="text-gray-700 text-base lg:text-start text-center ">
                        Our retail cloud solutions enhance omni-channel customer
                        experiences, operational efficiency, and real-time
                        insights, helping you meet today’s customer demands.
                      </p>
                    </div>
                    <div class="px-6 pb-4 flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                      >
                        <span class="relative z-10">Know More</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center lg:pt-4">
                  <div class="max-w-md rounded overflow-hidden shadow md:mx-0 mx-2 border">
                    <img
                      class="w-full h-60"
                      src="https://images.pexels.com/photos/19374520/pexels-photo-19374520/free-photo-of-people-on-cicek-pasaji-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 pt-4">
                      <div class="font-bold lg:text-start text-center  text-headingColor text-xl mb-2">
                        Public Sector Services
                      </div>
                      <p class="text-gray-700 text-base lg:text-start text-center ">
                        Empower your citizens with modern cloud-based platforms
                        and management tools for permitting, business licensing,
                        code inspections, maintenance and more.
                      </p>
                    </div>
                    <div class="px-6 pb-4 flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                      >
                        <span class="relative z-10">Know More</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center lg:pt-4">
                  <div class="max-w-md rounded overflow-hidden shadow border md:mx-0 mx-2">
                    <img
                      class="w-full h-60"
                      src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Sunset in the mountains"
                    />
                    <div class="px-6 pt-4">
                      <div class="font-bold lg:text-start text-center  text-headingColor text-xl mb-2">
                        Health Care Services
                      </div>
                      <p class="text-gray-700 text-base lg:text-start text-center ">
                        Healthcare technology experts will help you leverage the
                        cloud to optimize operations, increase patient
                        engagement, improve data insights and much more
                        developments.
                      </p>
                    </div>
                    <div class="px-6 pb-4 flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative h-[40px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                      >
                        <span class="relative z-10">Know More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-12"
              ></motion.div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="lg:pt-28 pt-16 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full"
                >
                  <div className="flex items-center lg:justify-start justify-center md:ml-4">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor">
                      Transformative power
                    </h1>
                  </div>

                  <div className="text-4xl lg:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                    <h1>Industry Solutions: AI and Cloud Technology</h1>
                  </div>

                  <div className="md:text-lg text-base text-sideHeading lg:text-start text-center md:ml-2 px-2 md:px-0">
                    <p>
                      Our expert team is having a decade of expertise in
                      Microsoft Industry Modules. It doesn’t if it’s about your
                      Sales, Marketing, Supply chain, Finance, or managing the
                      whole business, we have all the solution. With modernize
                      solution, Make your repetitive task, Automatic. Make a
                      business Apps with no-coding experience. Imagine the whole
                      business in a data form and you can get it on one click
                      and make data centric decision for your business.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 px-2">
                    {/* <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>In-depth Product Knowledge</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Flexible Engagement Model</p>
                    </div>
                  </div> */}
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                      <div className="text-sideHeading font-semibold">
                        <p>Supply Chain Optimization</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                      <div className="text-sideHeading font-semibold">
                        <p>Complete Project Management</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                      <div className="text-sideHeading font-semibold">
                        <p>Global Compliance Support</p>
                      </div>
                    </div>
                    <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                      <div className="text-sideHeading font-semibold">
                        <p>Strategic Advisor to CIOs</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex justify-center items-center w-[100%]"
                >
                  <div>
                    <img
                      src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                      width="612"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                      className="rounded lg:hidden block w-[90%]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsButton />

      <Footer />
    </>
  );
};

export default Industries;
