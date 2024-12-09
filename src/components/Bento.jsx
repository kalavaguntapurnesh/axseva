import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

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
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col space-y-6 w-full"
              >
                <div className=" text-4xl lg:text-start text-center font-bold text-headingColor lg:ml-2 px-2 lg:px-0">
                  <h1>Wondering why we are the best in market?</h1>
                </div>

                <div className="lg:text-lg text-base text-sideHeading lg:text-start text-center lg:ml-2 px-2 lg:px-0">
                  <p>
                    Microsoft Dynamics 365 excels with seamless integration of
                    CRM and ERP, AI-driven insights, scalability, and
                    adaptability across industries. Its cloud-based platform
                    ensures accessibility, while tight integration with
                    Microsoft 365.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-4 lg:px-0 px-2">
                  <div  class="flex lg:justify-start justify-center">
                    <div class="w-full p-4 bg-[#f8f9fa] border border-gray-200 rounded shadow-md sm:p-6">
                      <div class="space-y-2">
                        <div class="flex justify-center lg:justify-start items-center">
                          <img
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/circle-mixing-chart-icon-download-in-svg-png-gif-file-formats--infographic-rgb-pack-infographics-icons-1813284.png?f=webp&w=512"
                            alt=""
                            className="w-12 h-12"
                          />
                          <h1 class="text-4xl ml-2 text-mainColor font-bold text-start">
                            86%
                          </h1>
                        </div>
                        <div class="flex justify-center lg:justify-start items-center">
                          <p class="text-2xl text-colorTwo font-semibold lg:text-start text-center">
                            Improved Cost Saving
                          </p>
                        </div>

                        <div class="flex justify-center lg:justify-start items-center">
                          <p className="lg:text-start text-center">
                            Businesses that have upgraded to Microsoft ERP or
                            CRM solutions have reported improved cost savings
                            while limiting resources.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex lg:justify-start justify-center">
                    <div class="w-full p-4 bg-[#f8f9fa] border border-gray-200 rounded shadow-md sm:p-6">
                      <div class="space-y-2">
                        <div class="flex justify-center lg:justify-start items-center">
                          <img
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/arrow-chart-icon-download-in-svg-png-gif-file-formats--analytics-logo-bar-sequence-infographic-pack-infographics-icons-1813257.png?f=webp&w=512"
                            alt=""
                            className="w-12 h-12"
                          />
                          <h1 class="text-4xl ml-2 mt-2 text-mainColor font-bold text-start">
                            2x
                          </h1>
                        </div>
                        <div class="flex justify-center lg:justify-start items-center">
                          <p class="text-2xl text-colorTwo font-semibold lg:text-start text-center">
                            Businesses Meet Targets
                          </p>
                        </div>

                        <div class="flex justify-center lg:justify-start items-center">
                          <p className="lg:text-start text-center">
                            Different businesses have achieved the expected ROI
                            on time after the successful implementation of the
                            Microsoft ERP solution.
                          </p>
                        </div>
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
                className="flex justify-center items-center w-[100%]"
              >
                <div>
                  <img
                    src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_ProfessionalServices.jpg"
                    alt=""
                    // width="612"
                    // height="600"
                    className="rounded lg:block hidden h-auto w-auto"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_ProfessionalServices.jpg"
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
  );
};

export default Bento;
