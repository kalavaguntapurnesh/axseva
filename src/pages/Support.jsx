import React from "react";
import Footer from "../components/Footer";
import { BiSupport } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import SupportLayout from "./../components/SupportLayout";
import ContactUsButton from "../components/ContactUsButton";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const values = [
    {
      icon: <BiSupport className="text-mainColor text-4xl" />,
      title: "Immediate help",
      description:
        "Immediate help ensures timely resolutions, minimizing downtime and enhancing productivity. With instant access to expertise, businesses can swiftly address challenges, maintain operational flow, and focus on achieving their goals without unnecessary delays.",
    },
    {
      icon: <GiAlarmClock className="text-mainColor text-4xl" />,
      title: "Prompt assistance",
      description:
        "Prompt assistance ensures swift resolution of issues, minimizing downtime and enhancing productivity. It fosters trust by addressing challenges efficiently, empowering businesses to stay agile, maintain momentum, and deliver seamless operations in competitive environments.",
    },
    {
      icon: <MdBusiness className="text-mainColor text-4xl" />,
      title: "Accelerated support",
      description:
        "Accelerated Support ensures businesses receive timely assistance to address challenges swiftly. By prioritizing speed and efficiency, it minimizes downtime, resolves issues proactively, and empowers teams to maintain seamless operations and focus on growth.",
    },
  ];

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const values1 = [
    {
      icon: <FaCircleArrowRight />,
      Title: "Getting Started",
      description:
        "Getting started, Begin your journey with simple, clear steps forward",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: <FaUserAlt />,
      Title: "Business Management",
      description:
        "Manage personal information, security & specific configurations.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: <FaHandPaper />,
      Title: "Trust & Safety",
      description:
        "Ensures platform integrity & compliance against harmful activities.",
      color: "text-yellow-500", // Red color for this icon
    },
    {
      icon: <IoSettings />,
      Title: "Spam Free Support",
      description:
        "Spam Free, Ensuring clean, secure, & reliable digital communication.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: <IoIosCheckmarkCircle />,
      Title: "Services Advice",
      description:
        "Deliver reliable, customer-focused solutions with innovation.",
      color: "text-pink-500", // Purple color for this icon
    },
    {
      icon: <GrPersonalComputer />,
      Title: "Where to Find Us",
      description:
        "Discover our location with an interactive map offering geographic insights & navigation guidance.",
      color: "text-violet-500", // Pink color for this icon
    },
  ];

  return (
    <>
      <SupportLayout />

      {/* section 1 */}
      <div className="mt-12 select-none">
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
                  className="flex items-center justify-center"
                >
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor ">
                    We empower you
                  </h1>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-4xl text-headingColor font-bold text-center"
                >
                  Uncover Your Business Scope With Us
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="text-base text-sideHeading text-center md:text-lg ">
                    Axseva specializes in Dynamics AX implementations, offering
                    expertise in customization, business intelligence,
                    analytics, and seamless integration, ensuring tailored
                    solutions for diverse business needs.
                  </p>
                </motion.div>
                {/* Cards Grid */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-10 max-w-full"
                >
                  {values1.map((value, index) => (
                    <div
                      key={index}
                      className="flex md:justify-start justify-center"
                    >
                      <div className="w-full bg-white border border-gray-200 rounded p-6">
                        <div className="space-y-3">
                          <div
                            className={`text-4xl flex justify-center items-center ${value.color}`}
                          >
                            {value.icon}
                          </div>

                          <div className="flex justify-center items-center">
                            <h1 className="text-2xl text-headingColor font-semibold text-center">
                              {value.Title}
                            </h1>
                          </div>
                          <div className="flex justify-center  items-center text-gray-600 text-center">
                            <p>{value.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {/* grid 1 */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex justify-center items-center w-[100%]"
                >
                  <div>
                    <img
                      src="https://www.dynamicssquare.com/_next/image/?url=%2Fimg%2Fsupper-img.png&w=1200&q=75"
                      alt="support_one"
                      // width="612"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://www.dynamicssquare.com/_next/image/?url=%2Fimg%2Fsupper-img.png&w=1200&q=75"
                      alt="support_two"
                      className="rounded lg:hidden block w-[90%]"
                    />
                  </div>
                </motion.div>
                {/* grid 2 */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-col space-y-6 w-full justify-center"
                >
                  <div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center md:justify-start justify-center md:ml-1"
                  >
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      We stand by
                    </h1>
                  </div>
                  <div className="text-4xl text-center lg:text-start font-bold text-headingColor">
                    Dedicated Dynamics 365 Finance & Operations Expert
                  </div>
                  <p className="md:text-lg text-base text-center lg:text-start text-sideHeading">
                    To ensure process continuity, stabilize your process
                    optimization, and focus on your business scope, enterprises
                    are required to have an optimal support system. A smoother,
                    reliable, and productive business flow can be achieved
                    through dedicated Dynamics 365 Support Services designed for
                    a specific business model and custom business practices.
                  </p>
                  <p className="md:text-lg text-base text-center lg:text-start text-sideHeading">
                    We can help you to diagnose your support requirement and can
                    provide proactive support to enable productive and scalable
                    flow across your organizational structure. Through our
                    dedicated support services, we can promptly identify your
                    system issues and can resolve them with accuracy and
                    reliability.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href="/contact"
                      class="relative h-[50px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded font-medium"
                    >
                      <span class="relative z-10">Reach out to us</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="lg:pt-20 pt-8 pb-12 select-none">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
              <div>
                {/* Heading */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="hidden lg:flex flex-col space-y-4 "
                >
                  <div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      Our core support
                    </h1>
                  </div>
                  <div className="text-4xl text-headingColor font-bold text-center">
                    Microsoft Dynamics 365 F & O ecosystem
                  </div>

                  {/* Description */}
                  <p className="md:text-lg text-base text-sideHeading text-center lg:max-w-[1200px] mx-auto">
                    Drive innovative and strategic approach through your
                    business premises with intelligent connected processes, data
                    insights, and adaptive Dynamics 365 Finance and Operations.
                  </p>
                </motion.div>

                {/* Grid Section */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="max-w-[1400px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 justify-center  pt-12 pb-6"
                >
                  {/* grid 1 */}
                  <div className="flex flex-col space-y-4 w-full justify-start">
                    <div className=" text-4xl text-center lg:text-start font-bold text-headingColor">
                      We Optimize Operational Efficiency
                    </div>
                    <p className="md:text-lg text-base text-center lg:text-start text-sideHeading">
                      "Optimize Operational Efficiency" encapsulates the
                      transformative power of Dynamics 365 Finance & Operations.
                      It enables businesses to automate workflows, enhance
                      decision-making, and seamlessly manage resources,
                      fostering productivity and driving sustainable growth in
                      day-to-day operations.
                    </p>
                    <p className="md:text-lg text-base text-center lg:text-start text-sideHeading">
                      Dynamics 365 Finance & Operations simplifies complex
                      tasks, improves collaboration, reduces manual effort,
                      accelerates reporting, ensures compliance, and integrates
                      data, delivering unmatched efficiency and scalability for
                      businesses to thrive in competitive markets.
                    </p>
                  </div>

                  {/* grid 2 */}
                  <div>
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className="p-12 border rounded-lg shadow"
                      >
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => toggleDescription(index)}
                        >
                          <div className="flex items-center space-x-4">
                            {value.icon}
                            <h3 className="text-xl font-semibold text-headingColor">
                              {value.title}
                            </h3>
                          </div>
                          <div className="text-headingColor text-xl">
                            {openIndex === index ? "▲" : "▼"}
                          </div>
                        </div>
                        {openIndex === index && (
                          <p className="mt-4 lg:text-lg text-gray-600 text-base">
                            {value.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex justify-center pt-8"
                >
                  <a
                    href="/contact"
                    class="relative mt-2 flex h-[54px] xl:w-1/4 w-3/4 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded font-medium"
                  >
                    <span class="relative z-10">
                      Speak with a Managed Services Expert
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsButton />

      <Footer />
    </>
  );
};

export default Support;
