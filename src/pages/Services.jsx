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
      title: "AXSeva Flex: IT Support Services",
      description: "Routine IT support and environment management",
      subText: "AXSeva Flex Includes:",
      items: [
        "Management of requests/priorities to resolve issues",
        "Environment health checks and insights",
        "On-demand access to technical expertise across Microsoft platform",
      ],
    },
  ];
  const services2 = [
    {
      title: "Strategic Programs",
      description:
        "Programmatic, roadmap-driven delivery of new and improved capabilities",
      subText: "Strategic Programs Includes:",
      items: [
        "Assess your environment, develop baseline",
        "Ongoing coaching led by dedicated customer",
        "Implementation of technical architecture, software",
      ],
    },
  ];

  const services3 = [
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/infrastructure-4636450-3840692.png?f=webp&w=512",
      title: "Dynamic 365 & ERP Implementation",
      description:
        "We offer specialized services in Microsoft Dynamics 365 and enterprise-grade ERP (Enterprise Resource Planning) solutions that transform your operations, boost efficiency, and unlock new levels of performance.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/security-3243645-2705338.png?f=webp&w=512",
      title: "Business Intelligence Analytical Services",
      description:
        "Business Intelligence Analytics in Microsoft 365 Dynamics empowers organizations with data-driven insights, enhancing decision-making, performance, and operational efficiency seamlessly for a better future.",
    },
    {
      imageUrl:
        "https://cdn.iconscout.com/icon/premium/png-512-thumb/data-59-100759.png?f=webp&w=512",
      title: "Expert Support & Managed Solutions",
      description:
        "Empowering businesses with expert Microsoft 365 support and managed services, ensuring seamless operations, enhanced productivity, secure collaboration, and tailored solutions to drive dynamic digital transformation.",
    },
  ];

  const [activeHeading, setActiveHeading] = useState(0); // Default to the first heading
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const headings = [
    "Unified Business Process Integration",
    "Real-Time Data Insights Availability",
    "Scalable and Customizable Platform",
    "Enhanced Customer Relationship Management",
  ];

  const content = [
    {
      title: "Information We Collect From the User",
      details: (
        <div>
          <p>
            Dynamics 365 integrates multiple business processes into a single
            platform, improving efficiency, communication, and operational
            consistency.
          </p>
          <ul className="list-disc ml-4">
            <li>
              Personal Information: This includes your name, email address,
              contact details, etc.
            </li>
            <li>
              Non-Personal Information: Technical information such as IP
              addresses, browser type, device information, etc.
            </li>
          </ul>
        </div>
      ),
      image:
        "https://images.pexels.com/photos/7567591/pexels-photo-7567591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Real-Time Data Insights Availability",
      details: (
        <div>
          <p>
            Provides actionable insights through real-time data analysis,
            enabling informed decision-making and proactive business strategies.
          </p>
          <ul className="list-disc ml-4">
            <li>
              Supports on-the-go access to insights via mobile apps, keeping
              stakeholders informed anytime, anywhere.
            </li>
            <li>
              Integrates with Power BI for advanced analytics and visualization
              of complex data sets.
            </li>
            <li>
              Offers predictive analytics for better forecasting and planning
              across departments.
            </li>
          </ul>
        </div>
      ),
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Scalable and Customizable Platform",
      details: (
        <div>
          <p>
            Adapts to business growth and requirements with customizable
            modules, ensuring flexibility and future-proofing investments.
          </p>
          <ul className="list-disc ml-4">
            <li>
              Designed to grow with your business, accommodating increased data,
              users, and processes without performance degradation.
            </li>
            <li>
              Allows integration with third-party applications and APIs,
              ensuring compatibility with existing tools.
            </li>
          </ul>
        </div>
      ),
      image:
        "https://images.pexels.com/photos/7693142/pexels-photo-7693142.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Enhanced Customer Relationship Management",
      details: (
        <div>
          <p>
            It streamlines customer interactions, offering personalized
            experiences, improved engagement, and better support through
            comprehensive CRM tools.
          </p>
          <ul className="list-disc ml-4">
            <li>
              Offers a comprehensive view of customer interactions, enabling
              businesses to understand and predict customer needs effectively.
            </li>
            <li>
              Automates customer service workflows, reducing response times and
              enhancing satisfaction.
            </li>
          </ul>
        </div>
      ),
      image:
        "https://images.pexels.com/photos/8867201/pexels-photo-8867201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <>
      <ServicesLayout />

      <div className="lg:mt-16 mt-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-4">
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className=" text-4xl text-sideHeading font-bold text-center"
                >
                  Services We Offer
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
                              alt=""
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
                    class="relative mt-2 flex h-[54px] lg:w-1/4 w-3/4 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                  >
                    <span class="relative z-10">
                      Speak with a Managed Services Expert
                    </span>
                  </a>
                </div>
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
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full"
                >
                  <div className="flex items-center lg:justify-start justify-center md:ml-4">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      Streamline Your Operations
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
                      alt=""
                      // width="612"
                      // height="600"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://www.tectura.com/wp-content/uploads/2024/06/tectura-blog.webp"
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

      <div className="mt-12 mb-12 lg:block hidden select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
              <div className="flex flex-col space-y-6">
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className=" text-4xl text-headingColor font-bold text-center"
                >
                  5 Common Challenges We Can Resolve
                </motion.div>
                {/* Description */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="md:text-lg text-base text-sideHeading lg:text-start text-center md:ml-2">
                    Explore how dynamics 365 Services can help your organization
                    address these common challenges that disrupt efficient
                    system management and security.
                  </p>
                </motion.div>
                {/* Grid Section */}

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="pt-16"
                >
                  {/* Desktop View: Two Columns */}
                  <div className="hidden lg:grid grid-cols-3 gap-8">
                    {/* Left side: Headings */}
                    <div className="space-y-4 col-span-1 w-[100%] h-max sticky top-28 ">
                      {headings.map((heading, index) => (
                        <div
                          key={index}
                          onClick={() => setActiveHeading(index)}
                          className={`py-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center rounded ${
                            activeHeading === index
                              ? "bg-blue-100 text-blue-600" // Active heading styles
                              : "bg-[#f8f9fa] text-gray-800" // Default styles
                          }`}
                        >
                          <h2 className="pl-2 text-lg cursor-pointer font-medium ease-in-out duration-1000">
                            {heading}
                          </h2>
                        </div>
                      ))}
                    </div>

                    {/* Right side: Display data dynamically */}
                    <div className="space-y-12 col-span-2 overflow-y-auto">
                      <div
                        ref={sectionRefs[activeHeading]}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-bold text-gray-800">
                          {content[activeHeading].title}
                        </h3>
                        <div className="space-y-2 text-lg xl:text-start text-center text-sideHeading">
                          {content[activeHeading].details}
                        </div>

                        <div className="mt-4 flex justify-start">
                          <img
                            src={content[activeHeading].image}
                            alt={content[activeHeading].title}
                            // width={512}
                            className="w-[92%] h-[380px] rounded"
                          />
                        </div>
                      </div>
                    </div>
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
                      alt=""
                      // width="612"
                      // height="600"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1346944001-2048x2048-1.jpg"
                      alt=""
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
                      class="relative h-[50px] w-48 mt-2 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
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
      <div className="mt-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-10">
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className=" text-4xl text-headingColor font-bold text-center"
                >
                  How Managed IT Services Work with AXSeva
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
                  className="max-w-[1200px] md:mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-10"
                >
                  {/* Left Column */}
                  <div>
                    {services1.map((service, index) => (
                      <div
                        key={index}
                        className="border border-mainColor space-y-6 rounded p-6 shadow-md transition-transform duration-300 hover:-translate-y-2"
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
                            <li key={i} className="flex items-center space-x-2">
                              <FaCheckCircle className="text-mainColor" />
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
                        className="border border-mainColor space-y-6 rounded p-6 shadow-md transition-transform duration-300 hover:-translate-y-2"
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
                            <li key={i} className="flex items-center space-x-2">
                              <FaCheckCircle className="text-mainColor" />
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
