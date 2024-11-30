import React from "react";
import { motion } from "framer-motion";

const Bento = () => {
  const images = [
    "https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div>
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            {/* <div className="flex items-center text-center justify-center ">
              <div className="h-4 w-1 bg-mainColor"></div>
              <h1 className="ml-2 text-lg font-bold text-mainColor ">
                Best of the sector
              </h1>
            </div> */}

            {/* <div className="mx-auto max-w-[1000px] text-center mt-4">
              <h1 className="text-4xl font-bold text-headingColor">
                Get the Best Solutions for Business Growth
              </h1>
            </div> */}

            {/* <div className="text-center mt-4 mx-auto max-w-[1000px]">
              <h1 className="leading-relaxed tracking-wide font-normal text-base text-gray-600 dark:text-gray-800 ">
                Automate your business, simplify operations, and redefine the
                way you deal with new opportunities using powerful Dynamics 365
                solutions from the renowned Microsoft Dynamics 365 partner in
                the USA.
              </h1>
            </div> */}

            {/* <div className=" w-[100%] rounded mt-8 md:p-8 p-3">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-2 ">
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex flex-row md:justify-start justify-center items-center md:w-[80%] ">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/BusinessCentral_scalable.svg"
                          alt=""
                          className="w-12 h-12"
                        />
                        <h1 className="ml-4 text-xl text-headingColor font-bold">
                          Dynamics 365 Business Central
                        </h1>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600 md:text-start text-center">
                        <p>
                          An all-in-one business management solution
                          specifically designed for SMBs and startups that
                          offers a 360-degree holistic view of the entire
                          business with full transparency across different
                          operations.
                        </p>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600">
                        <MdArrowRightAlt size={24} className="text-mainColor" />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex flex-row md:justify-start justify-center items-center md:w-[80%] ">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/Finance_scalable.svg"
                          alt=""
                          className="w-12 h-12"
                        />
                        <h1 className="ml-4 text-xl text-headingColor font-bold">
                          Dynamics 365 Finance Software
                        </h1>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600 md:text-start text-center">
                        <p>
                          Simplify complex financial operations while getting
                          real-time data analytics and accurate insights. Avail
                          automation, minimize investment costs, and monitor
                          financial processes with data-driven insights.
                        </p>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600">
                        <MdArrowRightAlt size={24} className="text-mainColor" />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex flex-row md:justify-start justify-center items-center md:w-[80%] ">
                        <img
                          src="https://tripearltech.com/wp-content/uploads/2023/09/SupplyChainManagement_scalable.svg"
                          alt=""
                          className="w-12 h-12"
                        />
                        <h1 className="ml-4 text-xl text-headingColor font-bold">
                          Dynamics 365 Supply Chain
                        </h1>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600 md:text-start text-center">
                        <p>
                          Automate your entire supply chain process with
                          Dynamics 365 Supply Chain Management. Boost
                          efficiency, cut costs, enhance accuracy, gain
                          real-time insights, and improve customer service.
                        </p>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600">
                        <MdArrowRightAlt size={24} className="text-mainColor" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="hidden md:grid md:grid-cols-2 grid-cols-1 gap-2 mt-4">
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-2">
                      <div class="flex justify-start items-center">
                        <h1 class="text-4xl text-mainColor font-bold text-start">
                          86%
                        </h1>
                      </div>
                      <div class="flex justify-start items-center">
                        <p class="text-2xl text-colorTwo font-semibold text-start">
                          Improved Cost Saving
                        </p>
                      </div>

                      <div class="flex items-center justify-start">
                        <p>
                          Businesses that have upgraded to Microsoft ERP or CRM
                          solutions have reported improved cost savings while
                          limiting resources.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-2">
                      <div class="flex justify-start items-center">
                        <h1 class="text-4xl text-mainColor font-bold text-start">
                          2x
                        </h1>
                      </div>
                      <div class="flex justify-start items-center">
                        <p class="text-2xl text-colorTwo font-semibold text-start">
                          Businesses Meet Expected ROI
                        </p>
                      </div>

                      <div class="flex items-center justify-start">
                        <p>
                          Different businesses have achieved the expected ROI on
                          time after the successful implementation of the
                          Microsoft ERP solution.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-2 mt-4">
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex flex-row md:justify-start justify-center items-center md:w-[80%] ">
                        <img
                          src="https://www.dynamicssquare.com/img/finace-icons.svg"
                          alt=""
                        />
                        <h1 className="ml-4 text-xl text-colorTwo font-bold">
                          Dynamics 365 Sales
                        </h1>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600 md:text-start text-center">
                        <p>
                          Get an omnichannel connection between the sales team,
                          customers, and partners for a collaborative growth
                          approach. Track the sales pipeline, get insights,
                          maximize profit, and close more deals with the minimum
                          resources.
                        </p>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600">
                        <MdArrowRightAlt size={24} className="text-mainColor" />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex flex-row md:justify-start justify-center items-center md:w-[80%] ">
                        <img
                          src="https://www.dynamicssquare.com/img/powerbilogo.png"
                          alt=""
                        />
                        <h1 className="ml-4 text-xl text-colorTwo font-bold">
                          Microsoft Power BI
                        </h1>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600 md:text-start text-center">
                        <p>
                          Analyze and visualize the huge stack of data with
                          interactive graphical representations to make
                          data-driven decisions in real-time. Transform your
                          data to make it accessible and valuable to refine
                          decision-making.
                        </p>
                      </div>
                      <div class="flex md:justify-start justify-center items-center text-gray-600">
                        <MdArrowRightAlt size={24} className="text-mainColor" />
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex flex-row md:justify-start justify-center items-center md:w-[80%] ">
                        <img
                          src="https://www.dynamicssquare.com/img/home/NAV_scalable.png"
                          alt=""
                        />
                        <h1 className="ml-4 text-xl text-colorTwo font-bold">
                          Microsoft Dynamics NAV
                        </h1>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600 md:text-start text-center">
                        <p>
                          A simple yet powerful ERP solution to manage, control,
                          and track entire business operations with full
                          visibility. Connect different departments, automate
                          sales, and manage all back-end processes with ease.
                        </p>
                      </div>

                      <div class="flex md:justify-start justify-center items-center text-gray-600">
                        <MdArrowRightAlt size={24} className="text-mainColor" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}

            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-6">
              <div className="flex flex-col space-y-6 w-full">
                <div className=" text-4xl md:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                  <h1>Wondering why we are the best in market?</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
                  <p>
                    Microsoft Dynamics 365 excels with seamless integration of
                    CRM and ERP, AI-driven insights, scalability, and
                    adaptability across industries. Its cloud-based platform
                    ensures accessibility, while tight integration with
                    Microsoft 365.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-4 md:px-0 px-2">
                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-[#f8f9fa] border border-gray-200 rounded shadow-md sm:p-6">
                      <div class="space-y-2">
                        <div class="flex justify-center md:justify-start items-center">
                          <img
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/circle-mixing-chart-icon-download-in-svg-png-gif-file-formats--infographic-rgb-pack-infographics-icons-1813284.png?f=webp&w=512"
                            alt=""
                            className="w-12 h-12"
                          />
                          <h1 class="text-4xl ml-2 text-mainColor font-bold text-start">
                            86%
                          </h1>
                        </div>
                        <div class="flex justify-center md:justify-start items-center">
                          <p class="text-2xl text-colorTwo font-semibold md:text-start text-center">
                            Improved Cost Saving
                          </p>
                        </div>

                        <div class="flex justify-center md:justify-start items-center">
                          <p className="md:text-start text-center">
                            Businesses that have upgraded to Microsoft ERP or
                            CRM solutions have reported improved cost savings
                            while limiting resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-[#f8f9fa] border border-gray-200 rounded shadow-md sm:p-6">
                      <div class="space-y-2">
                        <div class="flex justify-center md:justify-start items-center">
                          <img
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/arrow-chart-icon-download-in-svg-png-gif-file-formats--analytics-logo-bar-sequence-infographic-pack-infographics-icons-1813257.png?f=webp&w=512"
                            alt=""
                            className="w-12 h-12"
                          />
                          <h1 class="text-4xl ml-2 mt-2 text-mainColor font-bold text-start">
                            2x
                          </h1>
                        </div>
                        <div class="flex justify-center md:justify-start items-center">
                          <p class="text-2xl text-colorTwo font-semibold md:text-start text-center">
                            Businesses Meet Targets
                          </p>
                        </div>

                        <div class="flex justify-center md:justify-start items-center">
                          <p className="md:text-start text-center">
                            Different businesses have achieved the expected ROI
                            on time after the successful implementation of the
                            Microsoft ERP solution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex justify-center items-center w-[100%]">
                <div>
                  <img
                    src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_ProfessionalServices.jpg"
                    alt=""
                    // width="612"
                    // height="600"
                    className="rounded md:block hidden h-auto w-auto"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_ProfessionalServices.jpg"
                    alt=""
                    className="rounded md:hidden block w-[90%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
