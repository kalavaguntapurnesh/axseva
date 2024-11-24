import React, { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import {
  FaBuildingColumns,
  FaComputerMouse,
  FaUsers,
  FaXTwitter,
} from "react-icons/fa6";
import { FaGlobeAmericas, FaInstagram, FaMicrophoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import free from "../assets/free.png";
import premium from "../assets/money.png";
import { SiAdguard, SiSecurityscorecard } from "react-icons/si";

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

  // Toggle dropdown and close others
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // close if the same dropdown is clicked
    } else {
      setOpenDropdown(dropdown); // open the clicked dropdown
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setOpenDropdownMobile((prev) => (prev === dropdown ? null : dropdown)); // Toggle the dropdown
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-6" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex items-center">
          <img
            src="https://www.dynamicssquare.com/img/dynamics_square-logo.svg"
            alt=""
            width={282}
            height={18}
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
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
            className="border-[1px] border-mainColor text-white hover:text-mainColor bg-mainColor hover:bg-mainColor lg:px-6 md:px-4 py-2 rounded-full text-sm font-medium transition duration-500"
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
          <a href="/" className="flex items-center m-4">
            <img
              src="https://www.dynamicssquare.com/img/dynamics_square-logo.svg"
              alt=""
              width={282}
              height={18}
              className="mt-4"
            />
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
                Industries
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
                Our Services
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
                      <a href="/privacy-policy" className="text-sm">
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

export default NavBar;

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors font-medium ${
        selected === tab ? " bg-mainColor text-neutral-100" : "text-grayColor"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-[100%] bg-white rounded-lg shadow p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden " key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-mainColor"
    />
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="/pricing" className="w-full border-[1px] p-2 rounded">
          <div className="flex justify-center items-center">
            <img
              className="mb-2 h-16 w-16 rounded "
              src={premium}
              alt="Placeholder image"
            />
          </div>
          <h4 className="mb-0.5 text-sm font-medium text-center">
            Premium Subscription
          </h4>
          <ul className="space-y-1 text-sm text-neutral-600 flex justify-center items-center flex-col">
            <li>Platinum</li>
            <li>Gold</li>
            <li>Silver</li>
            <li>Bronze</li>
          </ul>
        </a>
        <a href="/pricing" className="w-full border-[1px] p-2 rounded">
          <div className="flex justify-center items-center">
            <img
              className="mb-2 h-16 w-16 rounded "
              src={free}
              alt="Placeholder image"
            />
          </div>
          <h4 className="mb-0.5 text-sm font-medium text-center">
            Free Subscription
          </h4>
          <ul className="space-y-1 text-sm flex justify-center items-center flex-col text-neutral-600">
            <li>Free Tier</li>
            <li>Rewards Engage</li>
          </ul>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-mainColor font-semibold">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <a
        href="/learn-about-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiHome className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">About Us</span>
      </a>
      <a
        href="/learn-about-us#logo_meaning"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiBarChart2 className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Logo Meaning
        </span>
      </a>
      <a
        href="/learn-about-us#about_founder"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">Leadership</span>
      </a>
    </div>
  );
};

const Subscription = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-2">
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://lmclub.club/wp-content/uploads/2024/09/Picture2-300x300.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-black">LM Beehive</h4>
          <p className="text-xs text-neutral-400">
            Coupons, information and opportunities from local restaurants hotel,
            retailers.
          </p>
        </a>
        <a href="#">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://lmclub.club/wp-content/uploads/2024/09/Picture1-300x300.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-black">
            LM Broadcast
          </h4>
          <p className="text-xs text-neutral-400">
            Advertise local businesses on your social media and we will pay you
            a percentage of the revenue earned.
          </p>
        </a>
        <a href="/enroll-rewards">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://lmclub.club/wp-content/uploads/2024/09/Picture3-300x300.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-black">
            Enroll Rewards
          </h4>
          <p className="text-xs text-neutral-400">
            Activate GROW & ENROLL to earn rewards for helping our community to
            expand.
          </p>
        </a>
        <a href="https://ecommerce-green-theta.vercel.app/">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://cdn-icons-png.flaticon.com/512/3445/3445817.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium text-black">
            Ecommerce Platform
          </h4>
          <p className="text-xs text-neutral-400">
            Ecommerce platform is the place where you can find customized
            jerseys.
          </p>
        </a>
      </div>
      <button className="ml-auto mt-4 flex items-center font-semibold gap-1 text-sm text-mainColor">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Privacy = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <a
        href="/privacy-policy"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <RiCustomerService2Fill className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Privacy Policy
        </span>
      </a>
      <a
        href="/consumer-privacy"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaUsers className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Consumer Policy
        </span>
      </a>
      <a
        href="/privacy-report"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <SiAdguard className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Privacy Report
        </span>
      </a>
      <a
        href="/privacy-statement"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <SiSecurityscorecard className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Privacy Statement
        </span>
      </a>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <a
        href="/contact-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaGlobeAmericas className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Head Quarters
        </span>
      </a>
      <a
        href="/contact-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaBuildingColumns className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Branch Offices
        </span>
      </a>
      <a
        href="/contact-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaComputerMouse className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Contact by Email
        </span>
      </a>
      <a
        href="/contact-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdComputer className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Contact by Chat
        </span>
      </a>
      <a
        href="/contact-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaMicrophoneAlt className="mb-2 text-xl text-mainColor" />
        <span className="text-xs font-semibold text-gray-700">
          Contact by Phone
        </span>
      </a>
    </div>
  );
};

const TABS = [
  { title: "Solutions", Component: Homebar },
  {
    title: "Our Services",
    Component: Subscription,
  },
  {
    title: "Industries",
    Component: Blog,
  },

  {
    title: "Company",
    Component: Privacy,
  },
  {
    title: "Blog",
    Component: ContactBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
