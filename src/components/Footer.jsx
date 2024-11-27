import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { SiPaloaltosoftware } from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#f8f9fa] mt-20">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="flex md:flex-row flex-col">
              <div className="w-full pt-8">
                <a
                  href="/"
                  className="flex flex-row items-center md:justify-start justify-center"
                >
                  <SiPaloaltosoftware className="text-mainColor text-2xl leading-none" />
                  <h1 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
                    AX <span className="text-black">Seva</span>
                  </h1>
                </a>
              </div>
              <div className="w-full pt-8">
                <div className="grid grid-cols-5">
                  <a
                    href="https://www.linkedin.com/company/laoe-maom/"
                    className="flex justify-center items-center"
                  >
                    <FaLinkedin
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaXTwitter
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaInstagram
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaGoogle
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>
                  <a href="/about" className="flex justify-center items-center">
                    <FaFacebook
                      size={25}
                      className="cursor-pointer"
                      color="black"
                    />
                  </a>{" "}
                </div>
              </div>
            </div>

            <div className="pb-8 mb-8 border-b border-gray-600">
              <div className="w-full ">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6 lg:grid-cols-5 mt-12">

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Company
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          About AX Seva
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#about_founder"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#logo_meaning"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          News & Events
                        </a>
                      </li>
                    </ul>
                  </div>

                 

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Services
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Microsoft Dynamics 365
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/consumer-privacy"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Dynamics 365 Finance & Operations
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/consumer-privacy#cookie-use-policy"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Dynamics 365 Implementation
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Implementation Partner
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Customer Engagement
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="#"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Upgrade
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="#"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center   text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Optimization
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="#"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Support
                        </a>
                      </li>
              
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Solutions
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor hover:font-bold lg:text-start text-center  no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Dynamics 365 Super & Hypermarkets Solution
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Holistico - D365 Customer Service Solution
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#about_founder"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Start up
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#about_founder"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          E-commerce
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#logo_meaning"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Enterprice
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#logo_meaning"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          SMBs
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Industries
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="hover:text-mainColor hover:font-bold lg:text-start text-center  no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Startups
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Not for profit
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#about_founder"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Ecommerce
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#about_founder"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Manufacturing Services
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#logo_meaning"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Professional Services
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#logo_meaning"
                          className="hover:text-mainColor hover:font-bold no-underline lg:text-start text-center  text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Food & Beverages
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0 ">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Support
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="mailto:info@laoemaom.com"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Help Center
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://maps.app.goo.gl/G9qoFoUF2K1MPmv8A"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Location Map
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact-us"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Live Chat
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="hover:text-mainColor hover:font-bold no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-300 ease-in-out"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <div className="flex justify-center md:justify-start py-2">
                          <button className="bg-mainColor text-white p-3 rounded-lg">
                            <Link to="/contact">Contact Us</Link>
                          </button>
                      </div>

                    </ul>
                  </div>

                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-4 pb-8">
              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Cookie Settings</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Anti Spam</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>User Privacy</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>User Agreement</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Legal Notice</h1>
              </div>

              <div className="text-[14px] leading-6 flex md:justify-start justify-center">
                <h1>Responsible Disclosure</h1>
              </div>
            </div>

            <div className="text-center text-sm pb-6">
              <p>
                Copyright © 2024 AxSeva. All rights reserved
              </p>
              <p>
                Developed by Cloud Data Networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
