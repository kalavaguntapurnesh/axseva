import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f8f9fa] mt-20">
      <div className="relative ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="flex md:flex-row flex-col">
              <div className="w-full pt-8">
                <div className="flex md:justify-start justify-center">
                  <img
                    src="https://www.dynamicssquare.com/img/dynamics_square-logo.svg"
                    alt=""
                    width={282}
                    height={19}
                  />
                </div>
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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-6 mt-12">
                  <div className="mb-12 md:mb-0 ">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Quick Links
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/products"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Our Products
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://www.linkedin.com/company/laoe-maom/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          LinkedIn Page
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing#faq"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          FA Questions
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing#testimonial"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Testimonials
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
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Help Center
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="https://maps.app.goo.gl/G9qoFoUF2K1MPmv8A"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Location Map
                        </a>
                      </li>

                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/contact-us"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Live Chat
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Refund Policy
                        </a>
                      </li>
                    </ul>
                  </div>

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
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          About AX Seva
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#about_founder"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Leadership
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/learn-about-us#logo_meaning"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
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
                        services
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/products"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Business Central
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        {" "}
                        <a
                          href="/products"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          LM Broadcast
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/products"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Enroll Rewards
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/products"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Grow Widget
                        </a>
                      </li>

                      {/* <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          LM Account
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        subscriptions
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Gold Plan
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Platinum Plan
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Bronze Plan
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/pricing"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Silver Plan
                        </a>
                      </li>
                      {/* <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Free Plan
                        </a>
                      </li> */}
                    </ul>
                  </div>

                  <div className="mb-12 md:mb-0">
                    <div className="flex items-center md:justify-start justify-center">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h4 className="ml-2 text-sm leading-5 font-bold tracking-wider uppercase flex md:justify-start justify-center items-start mt-1 text-footerLinks">
                        Legal
                      </h4>
                    </div>
                    <ul className="pl-0 mt-4 space-y-3 list-none">
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/consumer-privacy"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Consumer Privacy
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/consumer-privacy#cookie-use-policy"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Cookie Consent
                        </a>
                      </li>
                      <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/privacy-policy"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Terms & Conditions
                        </a>
                      </li>
                      {/* <li className=" flex items-start md:justify-start justify-center">
                        <a
                          href="/about"
                          className="no-underline text-[14px] leading-6 text-footerLinks hover:text-gray-600 transition duration-1000 ease-in-out"
                        >
                          Recruiting
                        </a>
                      </li> */}
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
                © Cloud Data Networks Private Limited 2024. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
