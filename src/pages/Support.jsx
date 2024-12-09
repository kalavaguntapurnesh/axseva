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
      title: "Ad-Hoc Support",
      description:
        "Our Ad-Hoc Support model is designed to offer instant support for your short-length or one-time assignment. To carry out your independent requirement, we do not even ask you for any sort of commitment from your end. Understanding your business flow, we can offer your best-in-class support services suited to your specific workflow.",
    },
    {
      icon: <GiAlarmClock className="text-mainColor text-4xl" />,
      title: "Prepaid Hours Support",
      description:
        "Through our prepaid hours' support model, enterprises can leverage priority support for their ongoing practices. Our prepaid hours' support plan comprises 50-dedicated hours that ensure contribution to manage continuity in your business flow. With this support model, we provide instant technical help to the enterprises to maintain their smoother and uninterrupted process flow.",
    },
    {
      icon: <MdBusiness className="text-mainColor text-4xl" />,
      title: "Annual Support",
      description:
        "We undertake all your general system issues in terms of bug fixing, abundance in the process flow, and other system issues interrupting your system performance. Our yearly proficient support team can help to resolve your system issues, regain your system capabilities, and enable you to boost your workflow with our high-end Dynamics 365 Support Services.",
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
      Title: "Account Settings",
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
              <div className="flex flex-col">
                {/* Heading */}
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
                  <p className="text-base text-sideHeading text-center md:text-lg pt-4">
                    AXSeva has an extensive team with end-to-end expertise to
                    take care of system and process integrity. Whether you want
                    to eliminate your system risks, improve your system
                    capabilities, want to train your end-users, or more, we are
                    here to serve our optimal support services.
                  </p>
                </motion.div>
                {/* Cards Grid */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 max-w-full"
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
                          <div className="flex justify-center items-center text-gray-600 text-center">
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
                      alt=""
                      // width="612"
                      height="512"
                      className="rounded lg:block hidden"
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://www.dynamicssquare.com/_next/image/?url=%2Fimg%2Fsupper-img.png&w=1200&q=75"
                      alt=""
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
                  <div className="text-4xl text-center lg:text-start font-bold text-headingColor">
                    Dedicated Dynamics 365 Support Partner
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
                    Our Microsoft certified can help you to diagnose your
                    support requirement and can provide proactive support to
                    enable productive and scalable flow across your
                    organizational structure. Through our dedicated support
                    services, we can promptly identify your system issues and
                    can resolve them with accuracy and reliability.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <a
                      href="/contact"
                      class="relative h-[50px] w-48 mt-8 flex items-center justify-center overflow-hidden border border-mainColor text-mainColor transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-mainColor before:duration-300 before:ease-out hover:text-white hover:shadow-mainColor hover:before:h-40 hover:before:w-48 hover:before:opacity-100 rounded"
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

      <div className="mt-12 select-none">
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
                  className="hidden lg:block"
                >
                  <div className="text-4xl text-headingColor font-bold text-center">
                    Microsoft dynamics 365 Suite
                  </div>

                  {/* Description */}
                  <p className="md:text-lg pt-4 text-base text-sideHeading text-center lg:max-w-[1200px] mx-auto">
                    Drive innovative and strategic approach through your
                    business premises with intelligent connected processes, data
                    insights, and adaptive{" "}
                    <span className="text-mainColor cursor-pointer">
                      Dynamics 365 CRM
                    </span>{" "}
                    &{" "}
                    <span className="text-mainColor cursor-pointer">
                      ERP solutions.
                    </span>
                  </p>
                </motion.div>

                {/* Grid Section */}
                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 justify-center lg:pt-8 pt-4 pb-6"
                >
                  {/* grid 1 */}
                  <div className="flex flex-col space-y-4 w-full justify-center">
                    <div className=" text-4xl text-center lg:text-start font-bold text-headingColor">
                      Dynamics 365 Support Plans We Offer
                    </div>
                    <p className="md:text-lg text-base text-center lg:text-start text-sideHeading">
                      AXSeva, your trusted Microsoft Dynamics partner will
                      handle every aspect of your Dynamics 365 system from user
                      support, training, customization, technical consultancy to
                      development work.
                    </p>
                  </div>

                  {/* grid 2 */}
                  <div>
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className="p-12 border rounded-lg shadow-lg hover:shadow-xl hover:border-mainColor transition duration-300 "
                      >
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => toggleDescription(index)}
                        >
                          <div className="flex items-center space-x-4">
                            {value.icon}
                            <h3 className="text-xl font-semibold text-sideHeading">
                              {value.title}
                            </h3>
                          </div>
                          <div className="text-gray-500 text-xl">
                            {openIndex === index ? "▲" : "▼"}
                          </div>
                        </div>
                        {openIndex === index && (
                          <p className="mt-4 text-gray-600 text-base">
                            {value.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="flex justify-center pt-8">
                  <a
                    href="/contact"
                    class="relative mt-2 flex h-[54px] xl:w-1/4 w-3/4 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
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

      <ContactUsButton />

      <Footer />
    </>
  );
};

export default Support;
