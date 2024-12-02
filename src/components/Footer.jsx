import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-footerbg mt-20 p-15">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="pb-8 mb-8 border-b border-gray-600">
              <div className="w-full p-8">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-5 mt-12">
                  <div className="flex flex-col gap-10">
                    <div className="mb-12 md:mb-0">
                      <div className="flex items-center md:justify-start justify-center">
                        {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                        <h4 className=" text-sm leading-5 font-bold text-white tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                          Company
                        </h4>
                      </div>
                      <ul className="pl-0 mt-4 space-y-3 list-none">
                        <li className=" flex items-start md:justify-start justify-center">
                          <a
                            href="/privacy-policy"
                            className="hover:text-mainColor text-footerItems hover:font-bold no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li className=" flex items-start md:justify-start justify-center">
                          <a
                            href="/about-us"
                            className="hover:text-mainColor text-footerItems hover:font-bold no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                          >
                            About AXSeva
                          </a>
                        </li>
                        <li className=" flex items-start md:justify-start justify-center">
                          <a
                            href="/about-us"
                            className="hover:text-mainColor text-footerItems hover:font-bold no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                          >
                            Leadership
                          </a>
                        </li>
                        <li className=" flex items-start md:justify-start justify-center">
                          <a
                            href="/"
                            className="hover:text-mainColor text-footerItems hover:font-bold no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                          >
                            News & Events
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="mb-12 md:mb-0 ">
                      <div className="flex items-center md:justify-start justify-center">
                        {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                        <h4 className="  text-sm leading-5 text-white font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                          Support
                        </h4>
                      </div>
                      <ul className="pl-0 mt-4 space-y-3 list-none">
                        <li className=" flex items-start md:justify-start justify-center">
                          <a
                            href="mailto:info@axseva.com"
                            className="hover:text-mainColor text-footerItems hover:font-bold no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                          >
                            Help Center
                          </a>
                        </li>
                        <li className=" flex items-start md:justify-start justify-center">
                          <a
                            href="https://www.google.com/maps/place/1691+Kettering+St,+Irvine,+CA+92614,+USA/@33.6979191,-117.8467571,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcdebc76905421:0xc9b403b589d3cb99!8m2!3d33.6979191!4d-117.8467571!16s%2Fg%2F11bw3yyf27?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                            className="hover:text-mainColor text-footerItems hover:font-bold no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                          >
                            Location Map
                          </a>
                        </li>

                        <li className=" flex items-start md:justify-start justify-center">
                          <a
                            href="/"
                            className="hover:text-mainColor text-footerItems hover:font-bold no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                          >
                            Whatsapp Chat
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 text-white font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Services
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/managed-it-services"
                          className="hover:text-mainColor text-footerItems   hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Microsoft Dynamics 365
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/services-microsoft-dynamics-365-finance"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Dynamics 365 Finance & Operations
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/services-microsoft-dynamics-365-finance"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Dynamics 365 Implementation
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Implementation Partner
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks  transition duration-300 ease-in-out"
                        >
                          Customer Engagement
                        </a>
                      </li>
                    </ul>

                    <div className="mt-8 flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className=" text-sm leading-5 text-white font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        About Us
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us"
                          className="hover:text-mainColor text-footerItems   hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Why AXSeva
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/collaborate-with-us"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Collaborate With Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 font-bold text-white tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Solutions
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold lg:text-start text-center  no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Dynamics 365 Super & Hypermarkets Solution
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about-us"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Holistico - D365 Customer Service Solution
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      {/* <div className="h-4 w-1 bg-mainColor"></div> */}
                      <h4 className="  text-sm leading-5 text-white font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Industries
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/industries"
                          className="hover:text-mainColor text-footerItems hover:font-bold lg:text-start text-center  no-underline text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Startups
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Not for profit
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Manufacturing Services
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor text-footerItems hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks   transition duration-300 ease-in-out"
                        >
                          Professional Services
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4  ">
                    <div className="w-full ">
                      <a
                        href="/"
                        className="flex flex-row items-center md:justify-start justify-center"
                      >
                        <SiPaloaltosoftware className="text-mainColor text-2xl leading-none" />
                        <h1 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
                          AX <span className="text-white">Seva</span>
                        </h1>
                      </a>
                    </div>

                    <div className="flex md:flex-row flex-col ">
                      <div className="w-full pt-8">
                        <div className="grid grid-cols-5">
                          <a
                            href="https://www.linkedin.com/in/sumanthdama/"
                            className="flex justify-center items-center "
                          >
                            <FaLinkedin
                              size={25}
                              className="cursor-pointer"
                              color="white  "
                            />
                          </a>
                          <a
                            href="/about"
                            className="flex justify-center items-center"
                          >
                            <FaXTwitter
                              size={25}
                              className="cursor-pointer"
                              color="white"
                            />
                          </a>
                          <a
                            href="/about"
                            className="flex justify-center items-center"
                          >
                            <FaInstagram
                              size={25}
                              className="cursor-pointer"
                              color="white"
                            />
                          </a>
                          <a
                            href="/about"
                            className="flex justify-center items-center"
                          >
                            <FaGoogle
                              size={25}
                              className="cursor-pointer"
                              color="white"
                            />
                          </a>
                          <a
                            href="/about"
                            className="flex justify-center items-center"
                          >
                            <FaFacebook
                              size={25}
                              className="cursor-pointer text-white"
                              color="footerItems"
                            />
                          </a>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:gap-4 flex flex-col py-10 gap-4">
                      <div className="text-white font-bold text-xl">
                        <h1>Join our family</h1>
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Full Name"
                          className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Email"
                          className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                        />
                      </div>

                      <div className="flex justify-center items-center md:justify-start py-2 w-[100%]">
                        <button className="bg-mainColor text-white py-3 px-6  rounded w-full">
                          <Link to="/contact">Join </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5 gap-4 pb-8">
              <div className="text-[14px] leading-6 flex md:justify-start text-white justify-center">
                <a href="https://policies.google.com/technologies/partner-sites">
                  Cookie Settings
                </a>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start text-white justify-center">
                <a href="/privacy-policy">User Privacy</a>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start text-white justify-center">
                <a href="/privacy-policy">User Agreement</a>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start text-white justify-center">
                <a href="/privacy-policy">Responsible Disclosure</a>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start text-white justify-center">
                <a href="/privacy-policy">Legal Notice</a>
              </div>
            </div>

            <div className="text-center text-sm pb-6">
              <p className="text-footerItems">
                Copyright © 2024 AxSeva. All rights reserved
              </p>
              <p className="text-footerItems pt-2">
                All images related to Microsoft & other images are trademarks of
                Microsoft. Developed by Cloud Data Networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
