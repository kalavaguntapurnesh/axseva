import React from "react";
import Footer from "../../components/Footer";
import ContactNavbar from "../../components/ContactNavbar.jsx";
import ContactUsButton from "../../components/ContactUsButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants.js";
import sc_one from "../../assets/sc_one.png";

const MicrosoftDynamics365 = () => {
  const services = [
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-business-icon-download-in-svg-png-gif-file-formats--group-team-leadership-cooperation-startup-culture-pack-icons-29324.png?f=webp&w=512",
      title: "Enhanced Collaboration",
      description:
        "Enhanced collaboration in Business Intelligence analytics fosters teamwork by enabling real-time data sharing, streamlined workflows, and unified insights, driving informed decisions and aligning cross-functional teams for improved organizational performance and agility.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-startup-icon-download-in-svg-png-gif-file-formats--financial-statement-business-plan-briefcase-culture-pack-icons-29317.png?f=webp&w=512",
      title: "Operational Efficiency",
      description:
        "usiness Intelligence (BI) analytics enhances operational efficiency by providing real-time insights, streamlining processes, optimizing resource allocation, reducing costs, and enabling data-driven decisions for improved productivity and strategic growth.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-personal-icon-download-in-svg-png-gif-file-formats--desk-computer-system-startup-culture-pack-business-icons-29314.png?f=webp&w=512",
      title: "Seamless integration",
      description:
        "Seamless integration of business intelligence analytics enables organizations to unify data, streamline decision-making, and enhance operational efficiency by embedding advanced insights directly into workflows, tools, and processes for actionable outcomes.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-business-icon-download-in-svg-png-gif-file-formats--idea-innovation-plan-startup-culture-pack-icons-29329.png?f=webp&w=512",
      title: "Customer Satisfaction",

      description:
        "Customer satisfaction in business intelligence analytics reflects how effectively analytics tools meet user needs by providing actionable insights, improving decision-making, and enhancing operational efficiency, ultimately driving business growth and success.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-promotion-icon-download-in-svg-png-gif-file-formats--announcement-marketing-branding-startup-culture-pack-business-icons-29315.png?f=webp&w=512",
      title: "Demand Forecasting",

      description:
        "Demand forecasting in business intelligence analytics leverages historical data, machine learning, and statistical methods to predict future demand, enabling informed decision-making, inventory optimization, and enhanced operational efficiency for businesses.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-personal-icon-download-in-svg-png-gif-file-formats--connection-joint-venture-handshake-partnership-startup-culture-pack-business-icons-29320.png?f=webp&w=512",
      title: "Real Time Insights",

      description:
        "Real-time business intelligence analytics delivers instant insights by processing live data streams, enabling swift decision-making, proactive responses, improved efficiency, and a competitive edge through continuous monitoring and dynamic visualization.",
    },
  ];
  return (
    <div>
      {/* <AboutLayout /> */}
      <ContactNavbar />

      {/* section 2 */}
      <div className="w-full lg:pt-36 pt-28 pb-8 select-none">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto px-4 sm-px-6 ">
            <div className="flex flex-col gap-4 space-y-8">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                {/* grid 1 */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-8 w-full justify-center"
                >
                  <div className="flex items-center lg:justify-start justify-center md:ml-2">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      Dynamics 365 Supply Chain
                    </h1>
                  </div>
                  <div className="text-4xl text-center lg:text-start font-bold text-headingColor">
                    <span className="text-mainColor">AX</span>Seva:Transforming
                    Businesses with Enterprise Solutions
                  </div>

                  <p className="md:text-lg text-base text-center lg:text-start text-sideHeading">
                    Microsoft Dynamics 365 Enterprise represents the future of
                    intelligent business applications, empowering organizations
                    to innovate, grow, and adapt in an ever-changing landscape.
                    At AXSeva, we harness the power of Dynamics 365 to deliver
                    tailored solutions that drive transformation. By unifying
                    CRM functionalities, Microsoft Dynamics 365 Business
                    Editions offers purpose-built applications designed to
                    seamlessly integrate and optimize specific business
                    processes. This unified approach enables organizations to
                    meet customer demands effectively, seize new opportunities,
                    and achieve sustainable success with confidence.
                  </p>

                  <div className="lg:flex items-center lg:justify-start justify-center hidden">
                    <a
                      href="https://www.linkedin.com/in/sumanthdama/"
                      class="relative h-[50px] w-48 mt-2 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
                    >
                      <span class="relative z-10">Know More</span>
                    </a>
                  </div>

                  <div className="mx-8 lg:hidden block">
                    <a
                      href="https://www.linkedin.com/in/sumanthdama/"
                      className="bg-mainColor flex items-center justify-center hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
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
                  className="flex flex-col space-y-6 w-full"
                >
                  <div className="flex justify-center lg:justify-start w-full h-full">
                    <img
                      // src="https://www.tectura.com/wp-content/uploads/2023/01/Mask-Group-30.png"
                      src={sc_one}
                      className="h-auto lg:w-[95%] w-auto"
                      alt="one"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="w-full pt-20 pb-8  select-none">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto px-4 sm-px-6 ">
            <div className="flex flex-col gap-2 space-y-3">
              {/* <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-4xl text-center font-bold text-sideHeading">
                  Microsoft Dynamics 365 Capabilities and Features
                </h1>
                <p className="md:text-lg text-base text-center text-sideHeading">
                  The Dynamics 365 suite combines various business solutions,
                  including Microsoft Dynamics F & O, Microsoft Dynamics CRM,
                  Microsoft Cloud for Industry, Collaboration, Power Platform,
                  AI, Mixed Reality, Services, and Microsoft Platform.
                </p>
              </motion.div> */}
              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="p-6 border space-y-4 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-2   bg-transparent"
                    >
                      <div className="text-3xl text-mainColor mb-4 flex justify-center">
                        {/* Optional: You can remove the icon if not used */}
                      </div>
                      <div className="flex justify-center items-center  bg-transparent ">
                        {/* Replace image URLs with actual URLs for the service */}
                        <img
                          src={service.imageUrl} // Assuming each service object has an 'imageUrl' property
                          alt="icon"
                          className="w-[30%] h-[30%] object-cover none  "
                        />
                      </div>
                      <h3 className="text-xl font-bold text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-center">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className="w-full pt-16 pb-12 select-none">
        <div className="relative">
          <div className="max-w-[1400px] mx-auto px-4 sm-px-6 ">
            <div className="flex flex-col gap-4 space-y-8">
              <h1 className="text-4xl text-center font-bold text-headingColor">
                Accelerate impact and drive efficiency with Microsoft Dynamics
                365
              </h1>
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4 lg:h-[300px] "
              >
                <div className="shadow rounded border flex flex-col items-center justify-center space-y-4 w-full p-6 ">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/fast-music-8755934-7078795.png?f=webp&w=512"
                      className="w-24 h-24 object-cover  "
                      alt="icon"
                    />
                  </div>
                  <p className="md:text-lg text-center text-sideHeading">
                    Drive more revenue by connecting sales and marketing
                  </p>
                </div>

                <div className="shadow rounded border flex flex-col items-center justify-center space-y-4 w-full p-6 ">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/add-settings-8755893-7078754.png?f=webp&w=512"
                      className="w-24 h-24 object-cover  "
                      alt="icon"
                    />
                  </div>
                  <p className="md:text-lg text-center text-sideHeading">
                    Build finance and business operation agility
                  </p>
                </div>

                <div className="shadow rounded border flex flex-col items-center justify-center space-y-4 w-full p-6 ">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/alert-8755894-7078755.png?f=webp&w=512"
                      className="w-24 h-24 object-cover  "
                      alt="icon"
                    />
                  </div>
                  <p className="md:text-lg text-center text-sideHeading">
                    Adapt and thrive with a digital supply chain
                  </p>
                </div>

                <div className="shadow rounded border flex flex-col items-center justify-center space-y-4 w-full p-6 ">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/business-management-8755895-7078756.png?f=webp&w=512"
                      className="w-24 h-24 object-cover  "
                      alt="icon"
                    />
                  </div>
                  <p className="md:text-lg text-center text-sideHeading">
                    Reimagine the way you deliver customer service
                  </p>
                </div>

                <div className="shadow rounded border flex flex-col items-center justify-center space-y-4 w-full p-6 ">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://cdn.iconscout.com/icon/premium/png-512-thumb/call-location-8755898-7078759.png?f=webp&w=512"
                      className="w-24 h-24 object-cover  "
                      alt="icon"
                    />
                  </div>
                  <p className="md:text-lg text-center text-sideHeading">
                    Innovate, scale and drive business growth
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsButton />
      <Footer />
    </div>
  );
};

export default MicrosoftDynamics365;
