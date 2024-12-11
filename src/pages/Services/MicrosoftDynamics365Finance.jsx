import React from "react";
import Footer from "../../components/Footer";
// import AboutLayout from "../../components/AboutLayout";
import ContactUsButton from "../../components/ContactUsButton";
import ContactNavbar from "../../components/ContactNavbar.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import partner from "../../assets/partner.png";

const MicrosoftDynamics365Finance = () => {
  return (
    <div>
      {/* <AboutLayout /> */}
      <ContactNavbar />

      {/* section 1 */}

      <div className="lg:pt-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] lg:pb-12 pb-4">
              <div className="w-full pt-28">
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
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        Dynamics 365 F & O
                      </h1>
                    </div>

                    <div className="text-4xl lg:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                      <h1>
                        Our Comprehensive Dynamics 365 Finance & Operations
                      </h1>
                    </div>

                    <div className="md:text-lg text-base text-sideHeading lg:text-start text-center lg:ml-2 px-2 md:px-0">
                      <p>
                        In today’s fast-paced digital landscape, businesses need
                        agile and robust solutions to stay competitive and grow.
                        At AXSeva, we offer specialized services in Microsoft
                        Dynamics 365 F & O solutions that transform your
                        operations, boost efficiency, and unlock new levels of
                        performance.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 px-2">
                      <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                        <div className="text-sideHeading font-semibold">
                          <p>End-to-End Implementation</p>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                        <div className="text-sideHeading font-semibold">
                          <p>Customization & Integration</p>
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
                        // src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        src={partner}
                        alt="one"
                        // width="612"
                        // height="512"
                        // className="rounded lg:block hidden"
                        className="lg:block hidden h-auto w-auto"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        // src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        src={partner}
                        alt="two"
                        // className="rounded lg:hidden block w-[90%]"
                        className="lg:hidden block h-auto w-auto"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <motion.div
        variants={fadeIn("up", 0.1)} // Fade in from top to bottom
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="lg:pt-12 pt-4 lg:px-0 px-2 select-none"
      >
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center  rounded-full">
                          {/* <IoBarChart size={32} className="text-mainColor" /> */}
                          <img
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/analytics-40-86115.png?f=webp&w=512"
                            alt="icon"
                            className="w-20 h-20"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl text-headingColor font-bold text-center">
                          BI Analytics
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Business Intelligence Analytics combines data
                          analysis, visualization, and reporting to support
                          informed decision-making and optimize business
                          performance effectively.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center  rounded-full">
                        {/* <IoBarChart size={32} className="text-mainColor" /> */}
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/automation-3460215-2892846.png?f=webp&w=512"
                          alt="icon"
                          className="w-20 h-20"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          End-to-End Implementation
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Tailor the Dynamics 365 system architecture to align
                          with your operations and objectives. Seamless
                          installation and configuration of the solution,
                          ensuring minimal disruption to your business.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center  rounded-full">
                        {/* <IoBarChart size={32} className="text-mainColor" /> */}
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/security-1999897-1697833.png?f=webp&w=512"
                          className="w-20 h-20"
                          alt="three"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Data Migration Services
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Transition your legacy data to our platform with
                          precision and accuracy. Data Cleansing & Validation
                          will ensure clean, reliable data that supports your
                          business goals.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center  rounded-full">
                        {/* <IoBarChart size={32} className="text-mainColor" /> */}
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2861/2861472.png"
                          className="w-20 h-20"
                          alt="four"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Post-Implementation Support
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Deliver ongoing technical support to resolve issues
                          and improve system performance. Regularly optimize
                          workflows and implement upgrades to keep your business
                          ahead of the curve.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center  rounded-full">
                        {/* <IoBarChart size={32} className="text-mainColor" /> */}
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/bag-48-86122.png?f=webp&w=512"
                          className="w-20 h-20"
                          alt="five"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Business Upload & Maintenance
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Conduct periodic assessments of your system to ensure
                          compliance, efficiency, and optimal performance. Offer
                          proactive maintenance to prevent downtime and address
                          potential risks.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center  rounded-full">
                        {/* <IoBarChart size={32} className="text-mainColor" /> */}
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/innovation-2277793-1897480.png?f=webp&w=512"
                          className="w-20 h-20"
                          alt="six"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Customization and Integration
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Adapt Dynamics 365 and its features to fit your unique
                          processes. Integrate with existing tools like CRM
                          systems, supply chain management software, and
                          third-party applications for a unified ecosystem.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* section 3 */}

      <div className="w-full pt-12 pb-12 select-none">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto md:px-0 px-4 ">
            <div className="flex flex-col gap-8 space-y-8">
              <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 pt-8">
                {/* grid 1 */}

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex justify-center items-center w-[100%]"
                >
                  <div>
                    <img
                      src="https://www.beyondkey.com/blog/wp-content/uploads/2022/09/Microsoft-Dynamics-365-Supply-Chain-Management-Features.jpg"
                      alt="one"
                      width="612"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://www.beyondkey.com/blog/wp-content/uploads/2022/09/Microsoft-Dynamics-365-Supply-Chain-Management-Features.jpg"
                      alt="two"
                      className="rounded lg:hidden block w-[90%]"
                    />
                  </div>
                </motion.div>

                {/* grid 2 */}

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full lg:justify-start justify-center"
                >
                  <div className="flex items-center lg:justify-start justify-center md:ml-2">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      Building a better future
                    </h1>
                  </div>
                  <div className="text-4xl text-center lg:text-start font-bold text-headingColor">
                    Dynamics 365 Finance and Operations with{" "}
                    <span className="text-mainColor">AX</span>
                    Seva
                  </div>
                  <p className="md:text-lg text-base text-sideHeading lg:text-start text-center">
                    Gain end-to-end visibility and control over your supply
                    chain with Microsoft Dynamics 365 Supply Chain Management.
                    Connect sales, logistics, production, and warehousing
                    seamlessly to create an integrated ecosystem. Enhance vendor
                    collaboration using advanced purchase order management
                    tools, maintain real-time inventory updates with intelligent
                    control systems and valuation methods, and streamline
                    warehouse operations with improved communication and
                    automation. Leverage AI-powered demand forecasting and
                    business intelligence to adapt to changing needs while
                    tracking every shipment from origin to destination. With
                    Dynamics 365 Supply Chain Management, optimize every stage
                    of your supply chain for efficiency and agility.
                  </p>

                  <div className="flex lg:justify-start justify-center">
                    <a
                      href="/contact#contact_form"
                      class="relative mt-4 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
                    >
                      <span class="relative z-10">Read More</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4   */}

      <ContactUsButton />
      <Footer />
    </div>
  );
};

export default MicrosoftDynamics365Finance;
