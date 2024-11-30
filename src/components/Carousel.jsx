import React, { useState } from "react";
import { Tabs, Tab } from "../components/Tabs";
import success from "../assets/success.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Carousel = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            <div className="w-full px-4 mx-auto max-w-[1400px] mt-20">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-center text-center justify-center "
              >
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor ">
                  We are AXSeva
                </h1>
              </motion.div>

              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mx-auto max-w-[1000px] text-center mt-4"
              >
                <h1 className="text-4xl font-bold text-headingColor">
                  Our Products
                </h1>
              </motion.div>

              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="text-center mt-4"
              >
                <h1 className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                  Discover the Comprehensive Suite of Microsoft Dynamics 365 and
                  other Microsoft Solutions for Your Business Transformation
                </h1>
              </motion.div>

              <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8"
              >
                <a href="#" className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/BusinessCentral_scalable.svg"
                          alt=""
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h1 className="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Business
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Create engaging experiences by unifying customer data
                          with real-time journeys and leveraging Copilot to
                          uncover insights for personalized interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="#" className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/Finance_scalable.svg"
                          alt=""
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h1 className="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Finance
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Strengthen your financial and business operating
                          models and get end-to-end financial visibility to make
                          faster growth decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="#" className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://www.confiz.com/wp-content/uploads/2023/10/supply-chain.png"
                          alt=""
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h1 className="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Supply Chain
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Build a smart adaptable supply chain, meet the growing
                          eCommerce needs, optimize front-end and back-end
                          operations, and stay profitable.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="#" className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://www.encorebusiness.com/wp-content/uploads/2024/11/Sales_scalable.svg"
                          alt=""
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h1 className="text-2xl text-headingColor font-semibold text-center">
                          Dynamics 365 For Sales Management
                        </h1>
                      </div>
                      <div className="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Empower your sales team with actionable sales
                          intelligence to improve customer relationships, sell
                          at scale and serve customers intelligently.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>

              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center items-center pt-4 pb-4"
              >
                <a
                  href="/managed-it-services"
                  className="mt-8 inline-block px-12 py-3 border-[1px] border-mainColor hover:bg-mainColor hover:text-white transition duration-500 ease-in-out text-mainColor rounded  text-center font-semibold hover:bg-opacity-90"
                >
                  Know More
                </a>
              </motion.div>
            </div>

            <div className="pt-16">
              <div className="bg-white">
                <div className="w-full ">
                  <div className="w-full px-4 mx-auto max-w-[1400px]">
                    <div className="justify-center w-full ">
                      <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                        <div class="items-center px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
                          <motion.div
                            variants={fadeIn("right", 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            class="col-span-2 mb-8 space-y-3"
                          >
                            <div className="flex items-center md:justify-start justify-center ">
                              <div className="h-4 w-1 bg-mainColor"></div>
                              <h1 className="ml-2 text-lg font-bold text-mainColor ">
                                Services we offer
                              </h1>
                            </div>
                            <h1 className="text-4xl font-bold text-headingColor md:text-start text-center">
                              What is Microsoft Dynamics 365 Finance &
                              Operations?
                            </h1>

                            <div className="md:text-start text-center mt-4 mb-1">
                              <h1 className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                                Dynamics 365 Finance & Operations takes center
                                stage among the flagship business solutions
                                launched by Microsoft. It is an advanced ERP
                                solution that integrates finance, supply chain,
                                and operations to enjoy maximum visibility and
                                control to grow more than your competitors.
                              </h1>
                            </div>
                            <div class=" mt-6 space-y-4 border-t-[2px] border-gray-200 dark:border-gray-700">
                              {/* <div className="flex flex-row justify-between">
                                <div className="lg:block hidden">
                                  <a
                                    href="/services"
                                    class="inline-flex items-center text-base font-medium text-colorOne hover:text-colorTwo transition duration-1000 ease-in-out"
                                  >
                                    Explore our unique services
                                    <svg
                                      class="w-5 h-5 ml-1"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                                <div className="lg:block hidden">
                                  <a
                                    href="/features"
                                    class="inline-flex items-center text-base font-medium text-colorOne hover:text-colorTwo transition duration-1000 ease-in-out"
                                  >
                                    Visit our various features
                                    <svg
                                      class="w-5 h-5 ml-1"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </div> */}

                              <div className="flex md:justify-start justify-center items-center pb-4">
                                <a
                                  href="/managed-it-services"
                                  className="mt-8 inline-block px-12 py-3 border-[1px] border-mainColor hover:bg-white hover:text-mainColor transition duration-500 ease-in-out text-white bg-mainColor rounded  text-center font-medium hover:bg-opacity-90"
                                >
                                  Request a Demo
                                </a>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                            variants={fadeIn("left", 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
                          >
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/benefit-4484739-3715579.png?f=webp&w=512"
                                class="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h3 class="mb-2 text-2xl font-bold text-colorTwo ">
                                Financial Management
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                rate of visa approval to various countries.
                              </p>
                            </div>
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/settings-1848708-1568040.png?f=webp&w=512"
                                class="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h3 class="mb-2 text-2xl font-bold ">
                                Microsoft Ecosystem Integration
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                Students Sent From MAC to Various Universities.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/percentage-pie-chart-icon-download-in-svg-png-gif-file-formats--analytics-logo-graph-circle-circular-infographic-pack-infographics-icons-1813279.png?f=webp&w=512"
                                class="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h3 class="mb-2 text-2xl text-colorTwo font-bold ">
                                Integration and Scalability
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                Students Sent From MAC to Various Universities.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/decision-tree-chart-icon-download-in-svg-png-gif-file-formats--hierarchy-organisational-family-infographic-pack-infographics-icons-1813297.png?f=webp&w=512"
                                class="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h3 class="mb-2 text-2xl text-colorTwo font-bold ">
                                Process Automation
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                Students Sent From MAC to Various Universities.
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              variants={fadeIn("down", 0.1)} // Fade in from top to bottom
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="pt-8"
            >
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor ">
                  We are AXSeva
                </h1>
              </div>

              <div className="mx-auto max-w-[1000px] text-center mt-4">
                <h1 className="text-4xl font-bold text-headingColor">
                  Impact of Microsoft Dynamics 365
                </h1>
              </div>

              <div className="text-center mt-4">
                <h1 className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                  Check out the Total Economic Impact of Dynamics 365 Finance
                  and Dynamics 365 Supply Chain Management on businesses across
                  the globe.
                </h1>
              </div>
            </motion.div>

            <div className="bg-white">
              <div className="relative">
                <div className="w-full">
                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="w-full px-4 mx-auto max-w-[1400px]"
                  >
                    <div className="lg:block hidden">
                      <Tabs>
                        <Tab
                          label="Dynamic 365 Finance & Operations"
                          className="text-sm text-sideHeading"
                        >
                          <div className="py-4">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                              <div className="space-y-6 flex flex-col pl-8">
                                <div className=" md:text-start text-center">
                                  <h1 className="lg:text-4xl text-3xl font-bold text-black">
                                    Dynamic 365 Finance & Operations{" "}
                                    <span className="text-mainColor">
                                      innovation
                                    </span>
                                  </h1>
                                </div>
                                <div className="mt-4 md:text-start text-center text-gray-700 text-[18px]">
                                  <p>
                                    Microsoft Dynamics 365 Finance & Operations
                                    streamlines financial processes, enhances
                                    operational efficiency, and provides
                                    real-time insights for informed
                                    decision-making.
                                  </p>
                                </div>

                                <div className="flex flex-col space-y-3 text-sideHeading text-lg">
                                  <div className="flex flex-row items-center">
                                    <img
                                      src={success}
                                      alt=""
                                      className="w-4 h-4"
                                    />
                                    <p className="ml-4">
                                      Streamline business processes with
                                      integrated finance and operations systems.
                                    </p>
                                  </div>
                                  <div className="flex flex-row items-center">
                                    <img
                                      src={success}
                                      alt=""
                                      className="w-4 h-4"
                                    />
                                    <p className="ml-4">
                                      Supports growth through cloud-based
                                      architecture and customizable solutions.
                                    </p>
                                  </div>
                                  <div className="flex flex-row items-center">
                                    <img
                                      src={success}
                                      alt=""
                                      className="w-4 h-4"
                                    />
                                    <p className="ml-4">
                                      Enhance decision-making with AI-driven
                                      analytics and financial visibility.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[100%] flex justify-center items-center">
                                <img
                                  src="https://www.dynamicssmartz.com/img/dynamics-365-finance-info.png"
                                  alt=""
                                  className="h-auto w-auto"
                                />
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          label="Dynamic 365 Supply Chain Management"
                          className="text-sm text-sideHeading"
                        >
                          <div className="py-4">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                              <div className="space-y-6 flex flex-col pl-8">
                                <div className=" md:text-start text-center">
                                  <h1 className="lg:text-4xl text-3xl font-bold text-black">
                                    Dynamic 365 Supply Chain Management{" "}
                                    <span className="text-mainColor">
                                      features
                                    </span>
                                  </h1>
                                </div>
                                <div className="mt-4 md:text-start text-center text-gray-700 text-[18px]">
                                  <p>
                                    Microsoft Dynamics 365 Supply Chain
                                    Management offers advanced analytics,
                                    real-time inventory tracking, demand
                                    forecasting, and seamless integration with
                                    other Microsoft tools.
                                  </p>
                                </div>

                                <div className="flex flex-col space-y-3 text-sideHeading text-lg">
                                  <div className="flex flex-row items-center">
                                    <img
                                      src={success}
                                      alt=""
                                      className="w-4 h-4"
                                    />
                                    <p className="ml-4">
                                      Streamline workflows using AI-powered,
                                      automated supply chain processes.
                                    </p>
                                  </div>
                                  <div className="flex flex-row items-center">
                                    <img
                                      src={success}
                                      alt=""
                                      className="w-4 h-4"
                                    />
                                    <p className="ml-4">
                                      Connect operations with ERP, CRM, and
                                      third-party systems effectively.
                                    </p>
                                  </div>
                                  <div className="flex flex-row items-center">
                                    <img
                                      src={success}
                                      alt=""
                                      className="w-4 h-4"
                                    />
                                    <p className="ml-4">
                                      ptimize operations with data-driven,
                                      real-time analytics capabilities.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="w-[100%] flex justify-center items-center">
                                <img
                                  src="https://www.dynamicssmartz.com/img/supply-chain-management-info.png"
                                  alt=""
                                  className="h-auto w-auto"
                                />
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>

                    <div className="lg:hidden block">
                      <Tabs>
                        <Tab
                          label="Dynamic 365 Finance & Operations"
                          className=" px-1 text-sideHeading"
                        >
                          <div className="py-4 ">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                              <div className="space-y-6 flex flex-col px-2">
                                <div className=" md:text-start text-center">
                                  <h1 className="lg:text-4xl text-3xl font-bold text-black">
                                    Dynamic 365 Finance & Operations{" "}
                                    <span className="text-mainColor">
                                      innovation?
                                    </span>
                                  </h1>
                                </div>
                                <div className="mt-4 md:text-start text-center text-gray-700">
                                  <p>
                                    Microsoft Dynamics 365 Finance & Operations
                                    streamlines financial processes, enhances
                                    operational efficiency, and provides
                                    real-time insights for informed
                                    decision-making.
                                  </p>
                                </div>

                                <div className="flex items-center lg:justify-start justify-center">
                                  <a
                                    href="/login"
                                    className="bg-mainColor outline-none
                              rounded over:shadow-form transition font-medium duration-1000 ease-in-out md:text-base text-sm text-white px-12 py-3 text-center"
                                  >
                                    What we offer
                                  </a>
                                </div>
                              </div>

                              <div className="w-[100%] flex justify-center items-center">
                                <img
                                  src="https://www.dynamicssmartz.com/img/dynamics-365-finance-info.png"
                                  alt=""
                                  className="h-auto w-auto"
                                />
                              </div>
                            </div>
                          </div>
                        </Tab>
                        <Tab
                          label="Dynamic 365 Supply Chain Management"
                          className=" px-1 text-sideHeading"
                        >
                          <div className="py-4">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                              <div className="space-y-6 flex flex-col px-2">
                                <div className=" md:text-start text-center">
                                  <h1 className="lg:text-4xl text-3xl font-bold text-black">
                                    Empowering Connections, Cultivating
                                    <span className="text-mainColor">
                                      {" "}
                                      Success
                                    </span>
                                  </h1>
                                </div>
                                <div className="mt-4 md:text-start text-center text-gray-700">
                                  <p>
                                    Microsoft Dynamics 365 Supply Chain
                                    Management offers advanced analytics,
                                    real-time inventory tracking, demand
                                    forecasting, and seamless integration with
                                    other Microsoft tools.
                                  </p>
                                </div>

                                <div className="flex items-center lg:justify-start justify-center">
                                  <a
                                    href="/login"
                                    className="bg-mainColor outline-none
                              rounded over:shadow-form transition font-medium duration-1000 ease-in-out md:text-base text-sm text-white px-12 py-3 text-center"
                                  >
                                    Learn More
                                  </a>
                                </div>
                              </div>

                              <div className="w-[100%] flex justify-center items-center">
                                <img
                                  src="https://www.dynamicssmartz.com/img/supply-chain-management-info.png"
                                  alt=""
                                  className="h-auto w-auto"
                                />
                              </div>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* <div className="relative w-64 h-64 mx-auto">
              {icons.map((icon, index) => {
                const angle = (360 / icons.length) * index; // Calculate angle for each icon
                const x = 50 + 40 * Math.cos((angle * Math.PI) / 180); // X position
                const y = 50 + 40 * Math.sin((angle * Math.PI) / 180); // Y position

                return (
                  <img
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: `${y}%`,
                      left: `${x}%`,
                    }}
                  />
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
