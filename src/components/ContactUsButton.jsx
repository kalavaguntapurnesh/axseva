import { useEffect } from "react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { classNames } from "../components/classNames";

const ContactUsButton = () => {
  const phoneNumber = "14042773220";
  const message =
    "Hello LM Club, I need your guidance on professional technicians..."; // Pre-filled message
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

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

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
          "bg-mainColor fixed flex items-center justify-center lg:bottom-6 bottom-6 lg:right-2 right-2 z-20 p-3 rounded-full transition duration-1000 ease-in-out"
        )}
      >
        <SiWhatsapp className="h-6 w-6 text-white " aria-hidden="true" />
      </a>
    </>
  );
};

export default ContactUsButton;
