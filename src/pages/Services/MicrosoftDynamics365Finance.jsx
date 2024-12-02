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

      <div className="w-full pt-28 pb-8">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto px-4  ">
            <div className="flex flex-col gap-4 space-y-8">
              <div className="p-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="p-6 border flex flex-col space-y-4 rounded  transition-transform hover:-translate-y-4  bg-transparent"
                  >
                    <div className="flex justify-center items-center  rounded">
                      {/* <IoBarChart size={32} className="text-mainColor" /> */}
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/automation-3460215-2892846.png?f=webp&w=512"
                        className="w-24 h-24"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      Cost-effective solution
                    </h3>
                    <p className="text-gray-700 text-center">
                      Dynamics 365 Finance and Operations streamlines operations
                      by eliminating unnecessary resources and reducing costs
                      through digitalization. It simplifies customization and
                      integration, saving on expenses and lowering training
                      costs.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="p-6 border flex flex-col space-y-4  rounded shadow   transition-transform hover:-translate-y-4  bg-transparent"
                  >
                    <div className="flex justify-center items-center  rounded-full">
                      {/* <IoBarChart size={32} className="text-mainColor" /> */}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2861/2861472.png"
                        className="w-24 h-24"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      Improved data security & accessibility
                    </h3>
                    <p className="text-gray-700 text-center">
                      Microsoft Dynamics 365 Finance and Operations, hosted on
                      the Azure cloud platform, delivers unmatched flexibility
                      and security for your business. With robust data
                      protection, built-in disaster recovery, and 24/7 support,
                      it ensures business continuity and peace of mind. Its
                      cross-platform UI support enables users to access the
                      system seamlessly from any device, anywhere in the world.
                      Additionally, the platform leverages Azure's scalability
                      and performance to adapt to your growing business needs,
                      empowering your organization to drive efficiency and
                      innovation in a secure, cloud-based environment.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="p-6 border flex flex-col space-y-4  rounded shadow   transition-transform hover:-translate-y-4  bg-transparent"
                  >
                    <div className="flex justify-center items-center  rounded-full">
                      {/* <IoBarChart size={32} className="text-mainColor" /> */}
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/decision-tree-chart-icon-download-in-svg-png-gif-file-formats--hierarchy-organisational-family-infographic-pack-infographics-icons-1813297.png?f=webp&w=512"
                        className="w-24 h-24"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      Enhanced visibility and control
                    </h3>
                    <p className="text-gray-700 text-center">
                      Microsoft Dynamics 365 Finance and Operations delivers
                      powerful data-driven insights by unifying intelligence
                      across key business functions and supply chain
                      touchpoints. This enables leaders to make informed
                      decisions, enhance productivity, and access real-time
                      financial and operational data. With its robust analytics
                      and reporting capabilities, the platform empowers
                      businesses to drive efficiency, optimize performance, and
                      maintain a competitive edge in a dynamic marketplace.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="p-6 border flex flex-col space-y-4  rounded shadow   transition-transform hover:-translate-y-4  bg-transparent"
                  >
                    <div className="flex justify-center items-center  rounded-full">
                      {/* <IoBarChart size={32} className="text-mainColor" /> */}
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/security-1999897-1697833.png?f=webp&w=512"
                        className="w-24 h-24"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-center">
                      Optimized business operations
                    </h3>
                    <p className="text-gray-700 text-center">
                      Microsoft Dynamics 365’s cloud-based ERP solution is
                      tailored for businesses across various industries,
                      providing flexible, customizable applications to automate
                      processes and enhance productivity. By seamlessly
                      integrating data and workflows, it empowers organizations
                      to respond swiftly to evolving customer needs, streamline
                      operations, and drive business growth. With its
                      scalability and adaptability, Dynamics 365 enables
                      businesses to stay competitive and efficient in an
                      ever-changing market landscape.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="w-full pt-16">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto md:px-0 px-4 ">
            <div className="flex flex-col gap-4 space-y-8">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* grid 1 */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
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
                {/* grid 2 */}

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
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
      </div>

      {/* section 3 */}

      <div className="w-full pt-16">
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
