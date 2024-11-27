import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { BiSupport } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import { MdBusiness } from "react-icons/md";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { IoBagCheckSharp } from "react-icons/io5";
import { SlEqualizer } from "react-icons/sl";
import { FcCustomerSupport } from "react-icons/fc";
import { FaDatabase } from "react-icons/fa6";
import SupportLayout from './../components/SupportLayout';
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
      icon: <VscAccount />,
      Title: "Account Management",
      description:
        "Since Microsoft continuously comes up with regular updates and enhancements in their Dynamics 365 products. Experts at Dynamics Square take care of your timely system updates and requirement enhancements. We seamlessly manage your Dynamics 365 account to ensure your system compatibility with the latest releases and updates fulfilling your core requirement and future changes.",
    },
    {
      icon: <GiTeacher />,
      Title: "Training",
      description:
        "There could be several stages where enterprises require dedicated training to bring and ensure productive flow across their organization. Such training can be provided in the form of end-user training to understand the newly implemented system and ensure successful user adaptation. Training can also be ensured when you avail of any sort of system update, integration, or enhancements.",
    },
    {
      icon: <LuPackagePlus />,
      Title: "Add-ons",
      description:
        "With time, there could be possible frequent changes in your process optimization. To support your customer process flow, our support team can extend your system capabilities with required functionalities in terms of add-ons. Considering the enterprise challenges and ways to overcome them, Microsoft comes up with regular updates and features enhancements.",
    },
    {
      icon: <MdOutlineSettings />,
      Title: "Modifications",
      description:
        "Whenever changes take place in your enterprise, you are required to modify your functional requirement, and this generates a need for an adequate support system that can take responsibility to ensure potential changes in terms of updating your system with required functionality or advanced features that can be made possible either by Microsoft configuration or with third-party integration.",
    },
  ];

  const values3 = [
    {
      icon: <IoBagCheckSharp />,
      title: "Drive Smoother Business Flow",
      description:
        "Our experts can help to diagnose whether your current system is compatible to manage your current workflow or not. Our Dynamics 365 Support Services are offered to drive your system health check and upgrade your system accordingly to seamlessly carry out all your practices.",
    },
    {
      icon: <MdOutlineSettings />,
      title: "Bring Quick Adaption",
      description:
        "To ensure quick adaption, enterprises are required to acquire proper end-user training to know how to use the newly implemented or updated system efficiently. Here, availing of support and consulting services for Microsoft Business Applications from a trusted Microsoft Partner could be a productive deal for your enterprise.",
    },
    {
      icon: <SlEqualizer />,
      title: "Drive Seamless Operational Flow",
      description:
        "To drive seamless flow across your operational unit, enterprises should comprise a set of practices, skilled people, and the right working strategies. To gain so, we can help enterprises by configuring their system with required or updated functionality, providing proper training to the end-users, and other support to encourage and bring smoother operational flow.",
    },
    {
      icon: <GiAlarmClock />,
      title: "Ensure Compatibility with Trends",
      description:
        "Considering the continuously changing market, industrial scenarios, and rising critical business challenges, Microsoft ensures regular updates and releases to support your concurrent processes as well as futuristic approach. Through our dedicated support system, we upgrade your system with all the required system capabilities to ensure and drive compatibility with growing market trends.",
    },
    {
      icon: <FcCustomerSupport />,
      title: "Custom Support Model",
      description:
        "Every business involves different processes, different workflow, and strategies. To support your custom processes, your supporting needs could be different. Analyzing and evaluating your specific business flow and the challenges you drive; we can provide customized support services to drive smoother and productive flow across your operational space.",
    },
    {
      icon: <FaDatabase />,
      title: "Competitive Pricing",
      description:
        "TAt Dynamics Square, we believe in providing optimum support services wrapped with standard methodology and a modernized approach to our clients at competitive rates. We offer our Microsoft Dynamics 365 support services at 40% less pricing compared to other Microsoft support services providers. Connect and get the best quote to support your business context.",
    },
  ];

  return (
    <>

    <SupportLayout/>
    
      {/* section 1 */}
      <div className="lg:mt-[200px] mt-[150px]">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                {/* grid 1 */}
                <div className="flex flex-col space-y-6 w-full justify-center">
                  <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                    Microsoft Dynamics 365 Support
                  </div>
                  <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                    Get seamless and reliable Dynamics 365 support to get your
                    system going even in tough times. Employ your Dynamics 365
                    solution to its full potential, leveraging the established
                    infrastructure of Dynamics Square, the USA’s leading
                    Microsoft Solutions Partner.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <button className="bg-mainColor text-white p-4 rounded-lg">
                      <Link to="/contact">Schedule a Demo</Link>
                    </button>
                  </div>
                </div>
                {/* grid 2 */}
                <div className="flex justify-center items-center w-full">
                  <img
                    src="https://www.dynamicssquare.com/_next/image/?url=%2Fimg%2Fsupport-service-banner.png&w=1920&q=75"
                    className="lg:w-full w-[80%] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
              <div className="flex  w-full justify-center mb-20">
                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                  Dedicated Dynamics 365 Support Partner
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
                {/* grid 1 */}
                <div className="flex justify-center items-center w-full">
                  <img
                    src="https://www.dynamicssquare.com/_next/image/?url=%2Fimg%2Fsupper-img.png&w=1200&q=75"
                    className="lg:w-full w-[80%] h-auto"
                  />
                </div>
                {/* grid 2 */}
                <div className="flex flex-col space-y-6 w-full justify-center">
                  <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                    To ensure process continuity, stabilize your process
                    optimization, and focus on your business scope, enterprises
                    are required to have an optimal support system. A smoother,
                    reliable, and productive business flow can be achieved
                    through dedicated Dynamics 365 Support Services designed for
                    a specific business model and custom business practices.
                  </p>
                  <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                    Our Microsoft certified can help you to diagnose your
                    support requirement and can provide proactive support to
                    enable productive and scalable flow across your
                    organizational structure. Through our dedicated support
                    services, we can promptly identify your system issues and
                    can resolve them with accuracy and reliability.
                  </p>
                  <button className="bg-mainColor text-white p-4 lg:mx-0 mx-auto rounded-lg lg:w-1/4 w-3/4">
                    <Link to="/contact">Request a Demo</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="mt-5">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-10">
                {/* Heading */}
                <div className="md:text-5xl text-4xl text-sideHeading font-bold text-center">
                  Microsoft dynamics 365 Suite
                </div>

                {/* Description */}
                <p className="md:text-lg text-base text-sideHeading text-center lg:max-w-[1200px] mx-auto">
                  Drive innovative and strategic approach through your business
                  premises with intelligent connected processes, data insights,
                  and adaptive{" "}
                  <span className="text-mainColor cursor-pointer">
                    Dynamics 365 CRM
                  </span>{" "}
                  &{" "}
                  <span className="text-mainColor cursor-pointer">
                    ERP solutions.
                  </span>
                </p>

                {/* Grid Section */}
                <div className="max-w-[1200px] md:mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-10 flex justify-center py-[100px]">
                  {/* grid 1 */}
                  <div className="flex flex-col space-y-10 w-full justify-center">
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                      Dynamics 365 Support Plans We Offer
                    </div>
                    <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                      Dynamics Square, your trusted{" "}
                      <span className="text-mainColor cursor-pointer">
                        Microsoft Dynamics partner
                      </span>{" "}
                      will handle every aspect of your Dynamics 365 system from
                      user support, training, customization, technical
                      consultancy to development work.
                    </p>
                  </div>

                  {/* grid 2 */}
                  <div>
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className="p-12 border rounded-lg shadow-lg hover:shadow-xl hover:border-mainColor border-4 space-y-20 transition duration-300 "
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className="mt-5 bg-bgColor p-10">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-10">
                {/* Heading */}
                <div className="md:text-5xl text-4xl text-white font-bold text-center">
                  Get Dynamics 365 Support Today!
                </div>

                {/* Description */}
                <p className="text-base text-white text-center md:text-lg">
                  Discuss your Dynamics 365 support requirements to get the best
                  advice from our Microsoft consultant.
                </p>
                {/* CTA Button */}
                <div className="flex justify-center mt-5">
                  <button className="bg-mainColor text-white p-4 rounded-full lg:w-1/4 w-3/4">
                    <Link to="/contact">Get Started Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}

      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
              <div className="flex flex-col space-y-10">
                {/* Heading */}
                <div className="md:text-5xl text-4xl text-sideHeading font-bold text-center">
                  Uncover Your Business Scope With Our Dynamics 365 Consulting
                  Services
                </div>

                {/* Description */}
                <p className="text-base text-sideHeading text-center md:text-lg">
                  Dynamics Square has an extensive team with end-to-end
                  expertise to take care of system and process integrity.
                  Whether you want to eliminate your system risks, improve your
                  system capabilities, want to train your end-users, or more, we
                  are here to serve our optimal support services.
                </p>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10 max-w-full">
                  {values1.map((value, index) => (
                    <div
                      key={index}
                      className="flex gap-10 p-6 space-y-4 text-center"
                    >
                      {/* Icon */}
                      <div className="p-4 text-4xl rounded-full">
                        <span className="text-mainColor text-5xl">
                          {value.icon}
                        </span>
                      </div>
                      <div className="flex flex-col gap-6 text-start">
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-sideHeading">
                          {value.Title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="mt-28">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6">
              {/* Heading */}
              <div className="flex w-full justify-center">
                <div className="lg:text-5xl text-4xl text-center font-semibold text-headingColor m-8">
                  How Dynamics 365 Support Team Can Help You To Boost Your
                  Business Capabilities
                </div>
              </div>

              {/* Grid */}
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-10 max-w-full">
                {values3.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 border rounded-lg shadow-xl flex flex-col justify-center hover:shadow-lg transition-transform hover:-translate-y-4 group relative overflow-hidden"
                  >
                    {/* Default Content */}
                    <div className="flex flex-col items-center justify-center space-y-4 group-hover:opacity-0 group-hover:absolute group-hover:invisible transition-all duration-300">
                      <div className="text-4xl text-mainColor shadow-md rounded-full p-4">
                        {item.icon}
                      </div>
                      <h1 className="text-2xl font-bold text-center">
                        {item.title}
                      </h1>
                    </div>

                    {/* Hover Content */}
                    <p className="text-center text-base text-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:relative transition-all duration-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Support;
