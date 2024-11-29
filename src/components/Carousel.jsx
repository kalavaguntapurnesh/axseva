import React from "react";
import { IoSettings } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { SiDynamics365 } from "react-icons/si";
import { BsPeopleFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiPowerautomate } from "react-icons/si";
import tick from "../assets/tick.svg";

const Carousel = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            <div className="w-full px-4 mx-auto max-w-[1400px] mt-20">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor ">
                  We are AX Seva
                </h1>
              </div>

              <div className="mx-auto max-w-[1000px] text-center mt-4">
                <h1 className="text-4xl font-bold text-headingColor">
                  Our Products
                </h1>
              </div>

              <div className="text-center mt-4">
                <h1 className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                  Discover the Comprehensive Suite of Microsoft Dynamics 365 and
                  other Microsoft Solutions for Your Business Transformation
                </h1>
              </div>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded  sm:p-6 md:p-8 ">
                    <div class="space-y-3">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center ">
                          <img
                            src="https://tripearltech.com/wp-content/uploads/2023/09/BusinessCentral_scalable.svg"
                            alt=""
                            className="w-16 h-16"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Business
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Create engaging experiences by unifying customer data
                          with real-time journeys and leveraging Copilot to
                          uncover insights for personalized interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded  sm:p-6 md:p-8 ">
                    <div class="space-y-3">
                      <div className="flex justify-center items-center ">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/Finance_scalable.svg"
                          alt=""
                          className="w-16 h-16"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Finance
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Strengthen your financial and business operating
                          models and get end-to-end financial visibility to make
                          faster growth decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded  sm:p-6 md:p-8 ">
                    <div class="space-y-3">
                      <div className="flex justify-center items-center ">
                        <img
                          src="https://www.confiz.com/wp-content/uploads/2023/10/supply-chain.png"
                          alt=""
                          className="w-16 h-16"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl text-headingColor font-bold text-center">
                          Dynamics 365 For Supply Chain
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Build a smart adaptable supply chain, meet the growing
                          eCommerce needs, optimize front-end and back-end
                          operations, and stay profitable.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded  sm:p-6 md:p-8 ">
                    <div class="space-y-3">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center ">
                          <img
                            src="https://play-lh.googleusercontent.com/9M9lQsb7XwwflId89QAgfWGfZZeuTW2NCZPM1Q8OegZmGvWgA1hzSuKmJ0m6D-aGak8I"
                            alt=""
                            className="w-16 h-16"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-2xl text-headingColor font-semibold text-center">
                          Dynamics 365 For Sales Management
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Empower your sales team with actionable sales
                          intelligence to improve customer relationships, sell
                          at scale and serve customers intelligently.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex justify-center items-center pt-4 pb-4">
                <a
                  href="/managed-it-services"
                  className="mt-8 inline-block px-12 py-3 border-[1px] border-mainColor text-mainColor rounded transition text-center font-semibold hover:bg-opacity-90"
                >
                  Know More
                </a>
              </div>

              <div class=" lg:grid-cols-2 grid-cols-1 gap-6 pt-8 hidden">
                <div class="flex md:justify-start justify-center w-full">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="space-y-6">
                      <div class="flex lg:justify-start justify-center items-center">
                        <img
                          src="https://uptimerobot.com/assets/images/monitor-icons/ssl-monitoring.svg"
                          alt=""
                          class="w-20 h-20"
                        />
                      </div>
                      <div class="flex lg:justify-start justify-center items-center">
                        <h1 class="text-2xl font-bold">Website monitoring</h1>
                      </div>

                      <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                        <p>
                          Is the email service still UP? How about the critical
                          database server? Let's check! Monitor any specific
                          service running on any port.
                        </p>
                      </div>

                      <div class="flex lg:justify-start justify-center">
                        <a
                          href="/contact"
                          class="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white hover:bg-brand rounded-3xl group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                          <span class="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                            Website monitoring
                          </span>
                          <span class="relative invisible">Button Text</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="space-y-6">
                      <div class="flex lg:justify-start justify-center items-center">
                        <img
                          src="https://uptimerobot.com/assets/images/monitor-icons/cron-job-monitoring.svg"
                          alt=""
                          class="w-20 h-20"
                        />
                      </div>
                      <div class="flex lg:justify-start justify-center items-center">
                        <h1 class="text-2xl font-bold">Cron job monitoring</h1>
                      </div>

                      <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                        <p>
                          Is the email service still UP? How about the critical
                          database server? Let's check! Monitor any specific
                          service running on any port.
                        </p>
                      </div>

                      <div class="flex lg:justify-start justify-center">
                        <a
                          href="/contact"
                          class="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold hover:bg-brand text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white rounded-3xl group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                          <span class="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                            Cron Job Monitoring
                          </span>
                          <span class="relative invisible">Button Text</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <div className="bg-white">
                <div className="w-full ">
                  <div className="w-full px-4 mx-auto max-w-[1400px]">
                    <div className="justify-center w-full ">
                      <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                        <div class="items-center px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
                          <div class="col-span-2 mb-8 space-y-3">
                            <div className="flex items-center md:justify-start justify-center ">
                              <div className="h-4 w-1 bg-mainColor"></div>
                              <h1 className="ml-2 text-lg font-bold text-mainColor ">
                                Services we offer
                              </h1>
                            </div>
                            <h1 className="text-4xl font-bold text-headingColor md:text-start text-center">
                              Dynamics 365 Finance: Services we Offer to You
                            </h1>

                            <div className="md:text-start text-center mt-4 mb-1">
                              <h1 className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                                AXSeva specializes in Dynamics AX
                                implementations with core focus on Dynamics AX +
                                Analytics. Our expertise with Dynamics AX
                                includes customization in X++.
                              </h1>
                            </div>
                            <div class="pt-6 mt-6 space-y-4 border-t-[2px] border-gray-200 dark:border-gray-700">
                              <div className="flex flex-row justify-between">
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
                              </div>
                            </div>
                          </div>
                          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                            <div className="flex flex-col lg:items-start items-center">
                              <FaMoneyBillTrendUp class="w-10 h-10 mb-2 text-mainColor" />
                              <h3 class="mb-2 text-2xl font-bold text-colorTwo ">
                                Financial Management
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                rate of visa approval to various countries.
                              </p>
                            </div>
                            <div className="flex flex-col lg:items-start items-center">
                              <SiDynamics365 class="w-10 h-10 mb-2 text-mainColor" />
                              <h3 class="mb-2 text-2xl font-bold ">
                                Microsoft Ecosystem Integration
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                Students Sent From MAC to Various Universities.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <BsPeopleFill class="w-10 h-10 mb-2 text-mainColor" />
                              <h3 class="mb-2 text-2xl text-colorTwo font-bold ">
                                Integration and Scalability
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                Students Sent From MAC to Various Universities.
                              </p>
                            </div>

                            <div className="flex flex-col lg:items-start items-center">
                              <SiPowerautomate class="w-10 h-10 mb-2 text-mainColor" />
                              <h3 class="mb-2 text-2xl text-colorTwo font-bold ">
                                Process Automation
                              </h3>
                              <p class="font-normal text-gray-500 dark:text-gray-500">
                                Students Sent From MAC to Various Universities.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-12">
              <div className="flex justify-center items-center w-[100%] bg-[#f8f9fa]">
                <div>
                  <img
                    src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1010836040-2048x2048-1.jpg"
                    alt=""
                    width="612"
                    height="512"
                    className="rounded md:block hidden"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1010836040-2048x2048-1.jpg"
                    alt=""
                    className="rounded md:hidden block w-[90%]"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-6 w-full">
                <div className="text-4xl md:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                  <h1>Transforming Businesses Through Technology</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
                  <p>
                    AX Seva is engaged in mustering energy among people to
                    create a better world and solve critical business problems
                    through digital transformation.
                  </p>
                </div>

                <ul className="list-none text-sideHeading space-y-2 md:text-start text-center md:ml-2 px-2 md:px-0">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">
                      <img src={tick} alt="" className="w-6 h-6" />
                    </span>
                    <span>
                      Centralizes customer data, tracks interactions, and
                      automates sales.
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">
                      <img src={tick} alt="" className="w-6 h-6" />
                    </span>
                    <span>
                      Integrates financial, supply chain, and HR processes to
                      optimize business operation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">
                      <img src={tick} alt="" className="w-6 h-6" />
                    </span>
                    <span>
                      Uses AI to provide insights, forecast trends, and automate
                      decision-making{" "}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">
                      <img src={tick} alt="" className="w-6 h-6" />
                    </span>
                    <span>
                      {" "}
                      Modular system allows businesses to scale and customize
                      workflows{" "}
                    </span>
                  </li>
                </ul>

                <div className="md:flex items-center lg:justify-start justify-center hidden">
                  <a
                    href="/products"
                    className="bg-mainColor font-medium outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                  >
                    Let's get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
