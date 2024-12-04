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
    // <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    //   <div className="bg-white w-11/12 max-w-md rounded shadow shadow-blue-400 p-6">
    //     <h2 className="text-lg font-semibold mb-4">We Value Your Privacy</h2>
    //     <p className="text-sm text-gray-600 mb-6">
    //       We use cookies to improve your browser experience, serve personalized
    //       ads content and analyze the traffic on our site. By clicking "Accept
    //       All", you consent to use our cookies. Click here to{" "}
    //       <a href="/privacy-policy" className="text-blue-500 underline">
    //         Learn more
    //       </a>
    //       .
    //     </p>
    //     <div className="flex justify-end space-x-4">
    //       <button
    //         onClick={handleDecline}
    //         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
    //       >
    //         Decline
    //       </button>
    //       <button
    //         onClick={handleAccept}
    //         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
    //       >
    //         Accept
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="fixed bottom-0 left-0 w-full bg-white py-4 px-6 flex flex-col md:flex-row items-center md:justify-between gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50">
      <div>
        <h2 className="text-lg font-bold mb-2 text-center md:text-left">
          We Value Your Privacy
        </h2>
        <div className="text-center md:text-left font-light">
          We use cookies to improve your experience. By using this site, you
          agree to our use of cookies.{" "}
          <a href="/privacy-policy" className="underline text-mainColor">
            Learn more
          </a>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <button
          onClick={handleAccept}
          className="bg-white border-mainColor border text-mainColor hover:text-white px-6 py-2 hover:bg-mainColor w-full md:w-auto transition ease-in-out duration-1000"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-mainColor text-white hover:border hover:border-mainColor px-6 py-2 hover:bg-white hover:text-mainColor transition ease-in-out duration-1000 w-full md:w-auto"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
