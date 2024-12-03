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

      <div className="pt-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="space-y-3">
                <div className="flex items-center md:justify-start justify-center md:ml-4">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    serving industries
                  </h1>
                </div>

                <div className="text-4xl md:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                  <h1>We serve a wide range of Industries</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
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
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-0 px-2">
                <div className="space-y-2">
                  <img
                    src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_EquipmentDistributors.jpg"
                    alt=""
                    className="rounded w-[100%] h-[280px]"
                  />
                  <div className="text-headingColor text-2xl font-medium md:text-start text-center">
                    <h1>Manufacturing Services</h1>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded w-[100%] h-[280px]"
                  />
                  <div className="text-headingColor text-2xl font-medium md:text-start text-center">
                    <h1>Software Services</h1>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded w-[100%] h-[280px]"
                  />
                  <div className="text-headingColor text-2xl font-medium md:text-start text-center">
                    <h1>Financial Services</h1>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-12 md:px-0 px-2">
                <div className="space-y-2">
                  <img
                    src="https://images.pexels.com/photos/7679444/pexels-photo-7679444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded w-[100%] h-[280px]"
                  />
                  <div className="text-headingColor text-2xl font-medium md:text-start text-center">
                    <h1>Retail Services</h1>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://images.pexels.com/photos/19374520/pexels-photo-19374520/free-photo-of-people-on-cicek-pasaji-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded w-[100%] h-[280px]"
                  />
                  <div className="text-headingColor text-2xl font-medium md:text-start text-center">
                    <h1>Public Sector Services</h1>
                  </div>
                </div>
                <div className="space-y-2">
                  <img
                    src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded w-[100%] h-[280px]"
                  />
                  <div className="text-headingColor text-2xl font-medium md:text-start text-center">
                    <h1>Health Care Services</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}

      <div className="lg:pt-28 pt-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full"
                >
                  <div className="flex items-center md:justify-start justify-center md:ml-4">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                      Transformative power
                    </h1>
                  </div>

                  <div className="lg:text-5xl text-4xl md:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                    <h1>Industry Solutions: AI and Cloud Technology</h1>
                  </div>

                  <div className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
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

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:px-0 px-2">
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
                        <p>Around the clock Support</p>
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
                      className="rounded md:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                      className="rounded md:hidden block w-[90%]"
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
