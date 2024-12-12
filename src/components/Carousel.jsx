import React, { useState } from "react";
import { Tabs, Tab } from "../components/Tabs";
import success from "../assets/success.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Carousel = () => {
  return (
    <div>
      <div className="relative select-none">
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
                <p className="ml-2 text-lg font-bold text-mainColor">
                  We are AXSeva
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mx-auto max-w-[1000px] text-center mt-4"
              >
                <h3 className="text-4xl font-bold text-headingColor">
                  Our Products
                </h3>
              </motion.div>

              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="text-center mt-4"
              >
                <p className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                  Discover the Comprehensive Suite of Microsoft Dynamics 365 and
                  other Microsoft Solutions for Your Business Transformation
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8"
              >
                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/BusinessCentral_scalable.svg"
                          alt="c_twelve"
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h3 className="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Business
                        </h3>
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
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/Finance_scalable.svg"
                          alt="c_thirteen"
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h3 className="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Finance
                        </h3>
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
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://www.confiz.com/wp-content/uploads/2023/10/supply-chain.png"
                          alt="c_fourteen"
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h3 className="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Supply Chain
                        </h3>
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
                </div>

                <div className="flex md:justify-start justify-center">
                  <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                    <div className="space-y-3">
                      <div className="flex justify-center items-center">
                        <img
                          src="https://www.encorebusiness.com/wp-content/uploads/2024/11/Sales_scalable.svg"
                          alt="c_fifteen"
                          className="w-16 h-16"
                        />
                      </div>
                      <div className="flex justify-center items-center">
                        <h3 className="text-2xl text-headingColor font-semibold text-center">
                          Dynamics 365 For Sales Management
                        </h3>
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
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center items-center pt-4 pb-4"
              >
                <a
                  href="/contact"
                  class="relative h-[50px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                >
                  <span class="relative z-10">Know More</span>
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
                            variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            class="col-span-2 mb-8 space-y-3"
                          >
                            <div className="flex items-center lg:justify-start justify-center ">
                              <div className="h-4 w-1 bg-mainColor"></div>
                              <p className="ml-2 text-lg font-bold text-mainColor ">
                                Services we offer
                              </p>
                            </div>
                            <h3 className="text-4xl font-bold text-headingColor lg:text-start text-center">
                              Driving Innovation with Microsoft Dynamics
                              Expertise
                            </h3>

                            <div className="lg:text-start text-center mt-4 mb-1">
                              <p className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                                AXSeva specializes in Dynamics AX
                                implementations with core focus on Dynamics AX +
                                Analytics. Our expertise with Dynamics AX
                                includes customization in X++, Business
                                intelligence with SSRS, Analytics with OLAP,
                                Power BI and AX Integration with external
                                systems.
                              </p>
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
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11h1a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
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
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11h1a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </a>
                                </div>
                              </div> */}

                              <div className="flex lg:justify-start justify-center items-center pb-4">
                                {/* <a
                                  href="/contact"
                                  className="mt-8 inline-block px-12 py-3 border-[1px] border-mainColor hover:bg-white hover:text-mainColor transition duration-500 ease-in-out text-white bg-mainColor rounded  text-center font-medium hover:bg-opacity-90"
                                >
                                  Request a Demo
                                </a> */}
                                {/* <a
                                  href="/contact"
                                  class="relative h-12 w-40 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-white transition-all duration-200 before:absolute before:bottom-100 before:left-100 before:right-100 before:top-100 before:m-auto before:h-100 before:w-100 before:rounded-sm before:bg-white before:duration-300 before:ease-out hover:text-mainColor hover:shadow-mainColor hover:before:h-40 hover:before:w-40 hover:before:opacity-80 rounded"
                                >
                                  <span class="relative z-10">
                                    Request a Demo
                                  </span>
                                </a> */}

                                <a
                                  href="/contact"
                                  class="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
                                >
                                  <span class="relative z-10">
                                    Request a Demo
                                  </span>
                                </a>
                              </div>
                            </div>
                          </motion.div>
                          <motion.div
                            variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                            class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
                          >
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/benefit-4484739-3715579.png?f=webp&w=512"
                                alt="c_sixteen"
                                class="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h4 class="mb-2 text-2xl lg:text-start text-center font-bold text-colorTwo ">
                                Business Intelligence Analytics
                              </h4>
                              <p class="font-normal text-gray-500 dark:text-gray-500 lg:text-start text-center">
                                Seamless integration with apps, data and
                                processes.
                              </p>
                            </div>
                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/settings-1848708-1568040.png?f=webp&w=512"
                                alt="c_seventeen"
                                class="w-16 h-16 mb-2 text-mainColor"
                              />
                              <h4 class="mb-2 text-2xl font-bold lg:text-start text-center">
                                Dynamic 365 Finance & Operations
                              </h4>
                              <p class="font-normal text-gray-500 dark:text-gray-500 lg:text-start text-center">
                                Turn relevant and timely business data into
                                actionable insights.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/percentage-pie-chart-icon-download-in-svg-png-gif-file-formats--analytics-logo-graph-circle-circular-infographic-pack-infographics-icons-1813279.png?f=webp&w=512"
                                class="w-16 h-16 mb-2 text-mainColor"
                                alt="carousel_one"
                              />
                              <h4 class="mb-2 text-2xl text-colorTwo font-bold lg:text-start text-center">
                                Support & Managed Services
                              </h4>
                              <p class="font-normal text-gray-500 dark:text-gray-500 lg:text-start text-center">
                                Ongoing support and partnership after the
                                go-live activities.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <img
                                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/decision-tree-chart-icon-download-in-svg-png-gif-file-formats--hierarchy-organisational-family-infographic-pack-infographics-icons-1813297.png?f=webp&w=512"
                                class="w-16 h-16 mb-2 text-mainColor"
                                alt="carousel_two"
                              />
                              <h4 class="mb-2 text-2xl text-colorTwo font-bold md:text-start text-center">
                                Tailoring Applications in X++
                              </h4>
                              <p class="font-normal text-gray-500 dark:text-gray-500 md:text-start text-center">
                                Tailoring Dynamics AX to meet specific business
                                requirements.
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
                <p className="ml-2 text-lg font-bold text-mainColor">
                  We are AXSeva
                </p>
              </div>

              <div className="mx-auto max-w-[1000px] text-center mt-4">
                <h2 className="text-4xl font-bold text-headingColor">
                  Impact of Microsoft Dynamics 365
                </h2>
              </div>

              <div className="text-center mt-4">
                <p className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                  Check out the total economic impact of Dynamics 365 Finance
                  and Operations on businesses across the globe.
                </p>
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
                                  <h2 className="lg:text-4xl text-3xl font-bold text-black">
                                    Dynamic 365 Finance & Operations{" "}
                                    <span className="text-mainColor">
                                      innovation
                                    </span>
                                  </h2>
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
                                      alt="carousel_three"
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
                                      alt="carousel_four"
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
                                      alt="carousel_five"
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
                                  alt="carousel_six"
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
                                  <h2 className="lg:text-4xl text-3xl font-bold text-black">
                                    Dynamic 365 Supply Chain Management{" "}
                                    <span className="text-mainColor">
                                      features
                                    </span>
                                  </h2>
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
                                      alt="c_eighteen"
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
                                      alt="carousel_seven"
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
                                      alt="carousel_eight"
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
                                  alt="nine"
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
                                    href="/contact"
                                    class="relative mt-2 flex h-[44px] w-48 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
                                  >
                                    <span class="relative z-10">
                                      What we offer
                                    </span>
                                  </a>
                                </div>
                              </div>

                              <div className="w-[100%] flex justify-center items-center">
                                <img
                                  src="https://www.dynamicssmartz.com/img/dynamics-365-finance-info.png"
                                  alt="c_ten"
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
                                    href="/contact"
                                    class="relative mt-2 flex h-[44px] w-48 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
                                  >
                                    <span class="relative z-10">
                                      Learn More
                                    </span>
                                  </a>
                                </div>
                              </div>

                              <div className="w-[100%] flex justify-center items-center">
                                <img
                                  src="https://www.dynamicssmartz.com/img/supply-chain-management-info.png"
                                  alt="c_eleven"
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
