import React from "react";
import Footer from "../../components/Footer";
import AboutLayout from "../../components/AboutLayout";
import ContactUsButton from "../../components/ContactUsButton";
import Microsoft from "../../assets/Microsoft.svg";
import ContactNavbar from "../../components/ContactNavbar.jsx";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";

const MicrosoftDynamics365Finance = () => {
  return (
    <div>
      {/* <AboutLayout /> */}
      <ContactNavbar />

      {/* section 1 */}

      <div className="lg:pt-12">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="w-full pt-28">
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
                        Dynamic 365 & ERP
                      </h1>
                    </div>

                    <div className="lg:text-5xl text-4xl md:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                      <h1>Our Comprehensive Dynamics 365 & ERP Services</h1>
                    </div>

                    <div className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
                      <p>
                        In today’s fast-paced digital landscape, businesses need
                        agile and robust solutions to stay competitive and grow.
                        At AXSeva, we offer specialized services in Microsoft
                        Dynamics 365 and enterprise-grade ERP (Enterprise
                        Resource Planning) solutions that transform your
                        operations, boost efficiency, and unlock new levels of
                        performance.
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
                        src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width="612"
                        height="512"
                        className="rounded md:block hidden"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="rounded md:hidden block w-[90%]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="pt-12 md:px-0 px-2">
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
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/decision-tree-chart-icon-download-in-svg-png-gif-file-formats--hierarchy-organisational-family-infographic-pack-infographics-icons-1813297.png?f=webp&w=512"
                            alt="icon"
                            className="w-20 h-20"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl text-headingColor font-bold text-center">
                          User Training Management
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Provide hands-on training sessions for your team to
                          maximize productivity. Develop a robust change
                          management strategy to ensure a smooth transition to
                          the new system.
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
                          Tailor the Dynamics 365 and ERP system architecture to
                          align with your operations and objectives. Seamless
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
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Data Migration Services
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Transition your legacy data to the new ERP platform
                          with precision and accuracy. Data Cleansing &
                          Validation will ensure clean, reliable data that
                          supports your business goals.
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
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/unity-4870710-4061698.png?f=webp&w=512"
                          className="w-20 h-20"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          ERP Health Checks & Maintenance
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
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Customization and Integration
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Adapt Dynamics 365 and ERP features to fit your unique
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
      </div>

      {/* section 2 */}
      {/* <div className="w-full pt-16">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto md:px-0 px-4 ">
            <div className="flex flex-col gap-4 space-y-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <motion.div
                  variants={fadeIn("down", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-8 w-full justify-center"
                >
                  <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-headingColor">
                    Enterprise Solutions from{" "}
                    <span className="lg:text-5xl text-2xl md:text-start text-center font-semibold text-mainColor">
                      AX <span className="text-headingColor">Seva</span>{" "}
                    </span>
                  </div>

                  <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                    Elevate your business performance with Microsoft Dynamics
                    365 Finance and Operations, a cutting-edge cloud-based ERP
                    solution designed to streamline and automate critical
                    business functions. Empower your organization to optimize
                    financial management, enhance supply chain efficiency, and
                    drive seamless commerce operations. With built-in AI and
                    real-time analytics, Microsoft Dynamics 365 enables smarter
                    decision-making, scalability, and compliance with global
                    standards, ensuring your business stays competitive in an
                    ever-evolving marketplace.
                  </p>

                  <div className="flex items-center lg:justify-start justify-center">
                    <a
                      href="/managed-it-services"
                      className="bg-mainColor hover:bg-white hover:border-mainColor hover:border-[1px] outline-none
                              rounded over:shadow-form transition font-medium duration-1000 ease-in-out md:text-base text-sm text-white hover:text-mainColor px-12 py-3 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col w-full"
                >
                  <div className="flex justify-center">
                    <img src={Microsoft} className="w-auto h-auto" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* section 3 */}

      <div className="w-full pt-12">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto md:px-0 px-4 ">
            <div className="flex flex-col gap-8 space-y-8">
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-6 pt-8">
                {/* grid 1 */}

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full"
                >
                  <div className="flex justify-center md:justify-start w-full h-full ">
                    <img
                      src="https://www.beyondkey.com/blog/wp-content/uploads/2022/09/Microsoft-Dynamics-365-Supply-Chain-Management-Features.jpg"
                      className="w-auto h-auto rounded"
                    />
                  </div>
                </motion.div>

                {/* grid 2 */}

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-8 w-full justify-center"
                >
                  <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                    Supply chain
                  </div>
                  <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
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
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-8">
                {/* grid 1 */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-8 w-full justify-center"
                >
                  <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                    Cloud Services
                  </div>
                  <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                    Empower your IT department to drive efficiency and
                    innovation with Microsoft 365 Cloud Services. From seamless
                    collaboration tools to advanced lifecycle management,
                    Microsoft 365 offers flexible deployment options tailored to
                    your organization's needs. Enhance system agility while
                    ensuring enterprise-grade security, compliance, and data
                    integrity. With built-in AI capabilities and integration
                    across apps like Teams, SharePoint, and OneDrive, your IT
                    team can streamline operations, support a modern hybrid
                    workforce, and scale effortlessly in a secure cloud
                    environment. Microsoft 365 Cloud Services provide the
                    foundation for digital transformation, keeping your
                    organization connected and productive.
                  </p>
                </motion.div>

                {/* grid 2 */}

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full"
                >
                  <div className="flex justify-center md:justify-start w-full h-full ">
                    <img
                      src="https://www.tectura.com/wp-content/uploads/2023/04/Industries_ProfessionalServices.jpg"
                      className="w-auto h-auto rounded"
                    />
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
