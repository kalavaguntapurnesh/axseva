import { useEffect } from "react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { classNames } from "../components/classNames";

const ContactUsButton = () => {
  const phoneNumber = "14042773220";
  const message =
    "Hello AXSeva, I would like your guidance on Microsoft Dynamics 365 Finance and Operations.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

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
      <a
        href={whatsappUrl}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-mainColor fixed flex items-center justify-center bottom-4 right-5 z-20 p-3 rounded-full transition duration-1000 ease-in-out"
        )}
      >
        <SiWhatsapp className="h-6 w-6 text-white " aria-hidden="true" />
      </a>
    </>
  );
};

export default ContactUsButton;
