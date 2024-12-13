import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { FaCheckCircle } from "react-icons/fa";
import ServicesLayout from "../components/ServicesLayout";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import ContactUsButton from "../components/ContactUsButton";

const Services = () => {
  const services1 = [
    {
      title: "Client-Centric Customization",
      description:
        "Axseva adopts a client-centric customization approach by focusing to meet the specific needs and goals of their clients.",
      items: [
        "Conducting in-depth consultations to understand the unique business processes and objectives of the client",
        "Ensuring that customizations are implemented with minimal disruption in faster time than our competitors.",
        "Designing solutions that can adapt to evolving business needs, offering scalability to support future growth.",
      ],
    },
  ];
  const services2 = [
    {
      title: "Continuous Support & Collaboration",
      description:
        "Analytics investments while aligning technology solutions with their unique business goals.",
      items: [
        "Providing a team of experts available to assist with troubleshooting & general inquiries.",
        "Offering insights & recommendations for leveraging new technologies to meet requirements.",
        "Building strong, collaborative relationships that go beyond transactional interactions.",
      ],
    },
  ];

  const services3 = [
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-startup-icon-download-in-svg-png-gif-file-formats--business-report-future-plan-culture-pack-icons-29319.png?f=webp&w=512",
      title: "Dynamic 365 Finance & Operations",
      description:
        "We offer specialized services in Microsoft Dynamics 365 Finance and Operations that transform your operations, boost efficiency, and unlock new levels of performance.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-future-icon-download-in-svg-png-gif-file-formats--goal-target-market-company-mission-startup-culture-pack-business-icons-29321.png?f=webp&w=512",
      title: "Business Intelligence Analytical Services",
      description:
        "Business Intelligence Analytics in Microsoft 365 Dynamics empowers organizations with data-driven insights, enhancing decision-making, performance, and operational efficiency seamlessly for a better future.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-512/free-creative-icon-download-in-svg-png-gif-file-formats--business-idea-next-startup-culture-pack-icons-29325.png?f=webp&w=512",
      title: "Expert Support & Managed Solutions",
      description:
        "Empowering businesses with expert Microsoft 365 support and managed services, ensuring seamless operations, enhanced productivity, secure collaboration, and tailored solutions to drive dynamic digital transformation.",
    },
  ];

  return (
    <>
      <ServicesLayout />

      <div className="lg:pt-16 pt-12 select-none ">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor ">
                    Our core services
                  </h1>
                </motion.div>
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className=" text-4xl text-headingColor font-bold text-center"
                >
                  Excellence in Business Solutions
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-base text-sideHeading text-center md:text-lg"
                >
                  AXSeva specializes in Dynamics AX implementations with core
                  focus on Dynamics AX + Analytics. Our expertise with Dynamics
                  AX includes customization in X++, Business intelligence with
                  SSRS, Analytics with OLAP, Power BI and AX Integration with
                  external systems.
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 pt-10 max-w-full"
                >
                  {services3.map((service, index) => (
                    <div
                      key={index}
                      className="flex md:justify-start justify-center"
                    >
                      <div className="w-full p-4 bg-white border border-gray-200 rounded sm:p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2">
                        <div className="space-y-3">
                          <div className="flex justify-center items-center">
                            <img
                              src={service.imageUrl}
                              alt="services_five"
                              className="w-24 h-24"
                            />
                          </div>
                          <div className="flex justify-center items-center">
                            <h1 className="text-2xl text-headingColor font-bold text-center">
                              {service.title}
                            </h1>
                          </div>
                          <div className="flex justify-center items-center text-gray-600 text-center">
                            <p>{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <div className="flex justify-center pt-6">
                  <a
                    href="/contact"
                    class="relative mt-2 flex h-[54px] lg:w-1/4 w-[90%] items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded font-medium"
                  >
                    <span class="relative z-10">Speak with us now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-20 lg:pb-16 pt-12 select-none">
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
                  <div className="flex items-center lg:justify-start justify-center md:ml-4">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      Streamline your operations
                    </h1>
                  </div>
                  <div className=" text-4xl lg:text-start text-center font-bold text-headingColor lg:ml-2 px-2 lg:px-0">
                    <h1>Your Blueprint for Success</h1>
                  </div>

                  <div className="lg:text-lg text-base text-sideHeading lg:text-start text-center lg:ml-2 px-2 lg:px-0">
                    <p>
                      Managed Services transform IT management by streamlining
                      operations, enhancing security, and reducing downtime.
                      AXSeva offers efficient, secure, and scalable solutions
                      for cloud management, data and AI programs, the digital
                      workplace, app development, and more. Find out more about
                      Managed Services and how AXSeva’s expertise can help you.
                    </p>
                  </div>

                  <div className="lg:flex items-center lg:justify-start justify-center hidden lg:ml-2 ml-0">
                    <a
                      href="https://www.linkedin.com/in/sumanthdama/"
                      class="relative h-[50px] w-48 mt-2 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded font-medium"
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

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex justify-center items-center w-[100%]"
                >
                  <div>
                    <img
                      src="https://www.tectura.com/wp-content/uploads/2024/06/tectura-blog.webp"
                      alt="services_one"
                      // width="612"
                      // height="600"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://www.tectura.com/wp-content/uploads/2024/06/tectura-blog.webp"
                      alt="services_two"
                      className="rounded lg:hidden block w-[90%]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex justify-center items-center w-[100%]"
                >
                  <div>
                    <img
                      src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1346944001-2048x2048-1.jpg"
                      alt="services_three"
                      // width="612"
                      // height="600"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1346944001-2048x2048-1.jpg"
                      alt="services_four"
                      className="rounded lg:hidden block w-[90%]"
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full lg:ml-4"
                >
                  <div className="flex items-center lg:justify-start justify-center md:ml-4">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      We thrive for your future
                    </h1>
                  </div>
                  <div className=" text-4xl lg:text-start text-center font-bold text-headingColor lg:ml-2 px-2 lg:px-0">
                    <h1>Your Blueprint for Success</h1>
                  </div>

                  <div className="lg:text-lg text-base text-sideHeading lg:text-start text-center lg:ml-2 px-2 lg:px-0">
                    <p>
                      With our cloud managed services programs, you gain access
                      to our team of experts who act as an extension of your
                      team and help solve day-to-day IT operational challenges.
                      We bring deep expertise across all Microsoft technologies,
                      as well as related technologies, to deliver flexible IT
                      support, and help maintaining and optimize your technology
                      posture. Explore our different Managed Services offers, or
                      contact our team to learn more about how AXSeva can help.
                    </p>
                  </div>

                  <div className="lg:flex items-center lg:justify-start justify-center hidden">
                    <a
                      href="https://www.linkedin.com/in/sumanthdama/"
                      class="relative h-[50px] w-48 mt-2 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded font-medium"
                    >
                      <span class="relative z-10">Request a Demo</span>
                    </a>
                  </div>

                  <div className="mx-8 lg:hidden block">
                    <a
                      href="https://www.linkedin.com/in/sumanthdama/"
                      className="bg-mainColor flex items-center justify-center hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                    >
                      Request a Demo
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}

      {/* Section 5 */}
      <div className="lg:pt-20 pt-12 pb-12 select-none ">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor ">
                    We facilitate you
                  </h1>
                </motion.div>
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className=" text-4xl text-headingColor font-bold text-center"
                >
                  Our approach to achieving seamless solutions
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="md:text-lg text-base text-sideHeading text-center"
                >
                  AXSeva helps you identify your key business goals to choose
                  the level of service that fits your business model. Managed IT
                  Services are contracted based on a mix of a fixed monthly fee
                  and a committed monthly amount of technical execution hours.
                </motion.div>

                {/* Grid Section */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="max-w-[1400px] lg:mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-10 pt-4"
                >
                  {/* Left Column */}
                  <div>
                    {services1.map((service, index) => (
                      <div
                        key={index}
                        className="border space-y-6 rounded p-6 shadow bg-white"
                      >
                        <h2 className="text-2xl font-semibold text-mainColor mb-4">
                          {service.title}
                        </h2>
                        <p className="text-gray-700 mb-4">
                          {service.description}
                        </p>
                        <p className="text-mainColor text-2xl font-semibold mb-4">
                          {service.subText}
                        </p>
                        <ul className="space-y-4">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-center space-x-4">
                              <FaCheckCircle className="text-mainColor w-4 h-4" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div>
                    {services2.map((service, index) => (
                      <div
                        key={index}
                        className="border space-y-6 rounded p-6 shadow bg-white"
                      >
                        <h2 className="text-2xl font-semibold text-mainColor mb-4">
                          {service.title}
                        </h2>
                        <p className="text-gray-700 mb-4">
                          {service.description}
                        </p>
                        <p className="text-mainColor text-2xl font-semibold mb-4">
                          {service.subText}
                        </p>
                        <ul className="space-y-4">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-center space-x-4">
                              <FaCheckCircle className="text-mainColor w-4 h-4" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsButton />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Services;
