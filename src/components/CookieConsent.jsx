import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000); // Show popup after 5 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    // <div className="fixed bottom-0 left-0 w-full bg-white py-4 px-6 flex flex-col md:flex-row items-center md:justify-between gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50">
    //   <div>
    //     <h2 className="text-lg text-[#212121] font-bold mb-2 text-center md:text-left">
    //       We value your privacy
    //     </h2>
    //     <div className="text-center md:text-left font-light">
    //       We use cookies to improve your experience. By using this site, you
    //       agree to our use of cookies.{" "}
    //       <a
    //         href="/privacy-policy#learn_more_privacy"
    //         className="underline text-mainColor"
    //       >
    //         Learn more
    //       </a>
    //     </div>
    //   </div>

    //   <div className="flex flex-row gap-2">
    //     <button
    //       onClick={handleAccept}
    //       className="bg-mainColor text-white hover:border hover:border-mainColor px-10 py-2 hover:bg-white hover:text-mainColor transition ease-in-out duration-1000 w-full md:w-auto"
    //     >
    //       Accept
    //     </button>
    //     <button
    //       onClick={handleDecline}
    //       className="bg-white border-mainColor border text-mainColor hover:text-white px-10 py-2 hover:bg-mainColor w-full md:w-auto transition ease-in-out duration-1000"
    //     >
    //       Decline
    //     </button>
    //   </div>
    // </div>

    <div
      className="select-none fixed bottom-0 md:bottom-8 md:left-8 w-full md:w-auto bg-white py-4 px-6 flex flex-col items-center md:justify-between gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50
      rounded md:max-w-sm"
    >
      <div className="flex flex-col">
        <h2 className="text-lg text-[#212121] font-bold mb-2 text-center">
          We value your privacy
        </h2>

        <div className="flex items-center justify-center">
          <img
            src="https://www.sliderrevolution.com/wp-content/uploads/2020/05/cookie_icon.png"
            className="w-[64px] h-[64px]"
            alt="cookie_image"
          />
        </div>
        <div className="text-center font-light">
          We use cookies to improve your experience. By using this site, you
          agree to our use of cookies.{" "}
          <a
            href="/privacy-policy#learn_more_privacy"
            className="underline text-mainColor"
          >
            Learn more
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-2 w-[100%]">
        <button
          onClick={handleAccept}
          className="bg-mainColor text-white hover:border hover:border-mainColor px-6 py-2 hover:bg-white hover:text-mainColor transition ease-in-out duration-1000 w-full"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-white border-mainColor border text-mainColor hover:text-white px-6 py-2 hover:bg-mainColor w-full transition ease-in-out duration-1000"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
