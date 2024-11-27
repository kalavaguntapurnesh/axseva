import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { SiPaloaltosoftware } from "react-icons/si";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-6" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex flex-row items-center md:ml-0 ml-2">
          <SiPaloaltosoftware className="text-mainColor text-2xl leading-none" />
          <h1 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
            AX <span className="text-black">Seva</span>
          </h1>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex flex-grow justify-center space-x-8 items-center">
          {/* <Tabs /> */}
          <FlyoutLink href="#" FlyoutContent={PricingContent}>
            Solutions
          </FlyoutLink>
          <FlyoutLink href="/industries" FlyoutContent={IndustriesContent}>
            Industries
          </FlyoutLink>
          <FlyoutLink
            href="/managed-it-services"
            FlyoutContent={ServicesContent}
          >
            Our Services
          </FlyoutLink>
          <FlyoutLink href="/about-us" FlyoutContent={AboutUsContent}>
            About Us
          </FlyoutLink>
          <li className="group mt-[4px] cursor-pointer text-black tracking-wider transition duration-1000 ease-in-out">
            <a href="/dynamics-365-support-services">Support</a>
            <div className="bg-mainColor mt-[2px] rounded-full h-1 w-0 group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="group mt-[4px] cursor-pointer text-black tracking-wider transition duration-1000 ease-in-out">
            <a href="/solutions">Blog</a>
            <div className="bg-mainColor mt-[2px] rounded-full h-1 w-0 group-hover:w-full transition-all duration-300"></div>
          </li>
        </ul>

        {/* Login Button */}
        <div className="hidden xl:flex space-x-4">
          {/* <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-mainColor hover:text-mainColor hover:border-[1px] hover:border-mainColor text-white lg:px-6 md:px-4 py-2 rounded-full font-medium text-sm hover:bg-white transition duration-500"
          >
            Contact Us{" "}
          </button> */}
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="border-[1px] border-mainColor text-white hover:border-[1px] hover:border-mainColor hover:text-mainColor bg-mainColor hover:bg-white lg:px-6 md:px-4 py-2 rounded text-sm font-medium transition duration-500"
          >
            Contact Us
          </button>
        </div>

        <div className="xl:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-black" />
            ) : (
              <RiMenu3Fill className="w-6 h-6 text-black" />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "xl:hidden fixed left-[-100%] h-[100%] ease-in-out duration-1000 "
              : "xl:hidden fixed left-0 top-0 w-[70%] border-r h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          {/* <a href="/">
            <h1 className="w-full text-2xl text-mainColor font-bold m-4 cursor-pointer">
              LM <span className="text-black">Club.</span>
            </h1>
          </a> */}
          <a href="/" className="flex flex-row items-center ml-6 mt-6 mb-2">
            <SiPaloaltosoftware className="text-mainColor text-2xl leading-none" />
            <h1 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
              AX <span className="text-black">Seva</span>
            </h1>
          </a>
          <ul className="p-4">
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("home")}
                className="flex items-center justify-between cursor-pointer"
              >
                Solution
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "home"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "home" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700 ">
                      <a href="/learn-about-us" className="text-sm">
                        Dynamic 365 Chain
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a
                        href="/learn-about-us#logo_meaning"
                        className="text-sm"
                      >
                        Customer Service
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a
                        href="/learn-about-us#about_founder"
                        className="text-sm"
                      >
                        Business Central
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("products")}
                className="flex items-center justify-between cursor-pointer"
              >
                <a href="/industries" className="text-sm">
                  Industries
                </a>
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "products"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "products" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Startups
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/" className="text-sm">
                        Professional Services
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("subscription")}
                className="flex items-center justify-between cursor-pointer"
              >
                <a href="/managed-it-services" className="text-sm">
                  Our Services
                </a>
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "subscription"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "subscription" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_platinum" className="text-sm">
                        Implementation Services
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_gold" className="text-sm">
                        Support Services
                      </a>
                    </li>
                    <li className="text-gray-700">
                      <a href="/pricing#pricing_silver" className="text-sm">
                        Upgrade Services
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="p-4 border-b border-gray-600">
              <div
                onClick={() => toggleMobileDropdown("privacy")}
                className="flex items-center justify-between cursor-pointer"
              >
                Company
                <FaAngleDown
                  className={`transition-transform ${
                    openDropdownMobile === "privacy"
                      ? "rotate-180 text-mainColor"
                      : ""
                  }`}
                />
              </div>
              <AnimatePresence>
                {openDropdownMobile === "privacy" && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-6 space-y-2"
                  >
                    <li className="text-gray-700">
                      <a href="/about-us" className="text-sm">
                        About Us
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="p-4 border-b border-gray-600">
              <a
                href="/contact"
                className="flex items-center justify-between cursor-pointer"
              >
                Blog
              </a>
            </li>

            <li className="p-4 border-b border-gray-600">
              <a
                href="/contact"
                className="flex items-center justify-between cursor-pointer"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h1 className="p-4 text-xl font-semibold">Follow us on</h1>
            <div className="p-4">
              <div className="grid grid-cols-4">
                <a href="https://www.linkedin.com/company/laoe-maom/">
                  <FaLinkedinIn className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  <FaXTwitter className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaFacebookF className="w-6 h-6 text-black duration-1000 hover:text-mainColor ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-mainColor transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">For Individuals</h3>
        <a href="#" className="block text-sm hover:underline">
          Introduction
        </a>
        <a href="#" className="block text-sm hover:underline">
          Pay as you go
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">For Companies</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          SMBs
        </a>
        <a href="#" className="block text-sm hover:underline">
          Enterprise
        </a>
      </div>
      <button className="w-full rounded border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        Contact sales
      </button>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Services We Offer</h3>
        <a href="#" className="block text-sm hover:underline">
          Implementation Services
        </a>
        <a href="#" className="block text-sm hover:underline">
          Upgrade Services
        </a>
        <a href="#" className="block text-sm hover:underline">
          Support Services
        </a>
      </div>

      <button className="w-full rounded border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        View More
      </button>
    </div>
  );
};

const IndustriesContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">Our Vast Resources</h3>
        <a href="#" className="block text-sm hover:underline">
          Startups
        </a>
        <a href="#" className="block text-sm hover:underline">
          Not for profit
        </a>
        <a href="#" className="block text-sm hover:underline">
          Ecommerce
        </a>
        <a href="#" className="block text-sm hover:underline">
          Manufacturing Services
        </a>
        <a href="#" className="block text-sm hover:underline">
          Professional Services
        </a>
      </div>

      <button className="w-full rounded border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
        View More
      </button>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold">About AX Seva</h3>
        <a href="#" className="block text-sm hover:underline">
          About Us
        </a>
        <a href="#" className="block text-sm hover:underline">
          Why AX Seva
        </a>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold">Careers at AX Seva</h3>
        <a href="#" className="block text-sm hover:underline">
          Collaborate with Us
        </a>
      </div>
      <button
        onClick={() => navi}
        className="w-full rounded border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white"
      >
        View More
      </button>
    </div>
  );
};

export default NavBar;
