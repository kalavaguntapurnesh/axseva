import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { classNames } from "../components/classNames";

const ContactUsButton = () => {
  // const phoneNumber = "14042773220";
  // const message =
  //   "Hello AXSeva, I would like your guidance on Microsoft Dynamics 365 Finance and Operations.";
  // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //   message
  // )}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    if (window.pageYOffset > 120) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <button
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-mainColor fixed flex items-center text-white  justify-center bottom-4 right-5 z-20 p-3 rounded-full"
        )}
      >
        <FaAngleUp className="h-5 w-5" aria-hidden="true" />
      </button>
    </>
  );
};

export default ContactUsButton;
