import React, { useState } from "react";
import { SiPaloaltosoftware } from "react-icons/si";
import { MdMessage } from "react-icons/md";

const ContactUsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Contact Us Button */}
      <button
        onClick={togglePopup}
        className="fixed bottom-5 right-5 z-20 bg-buttons text-white px-3 py-3 rounded-full shadow-lg transition flex items-center justify-center duration-300 "
      >
        <MdMessage className="h-6 w-6" />
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center lg:justify-end items-center">
          <div className="bg-gradient-to-b from-white via-white to-white md:p-6 p-4 rounded shadow-xl w-[90%] max-w-md lg:w-2/5 lg:mr-5 lg:h-[60%] h-auto flex flex-col">
            <a
              href="/"
              className="flex flex-row items-center justify-center md:ml-0 ml-2"
            >
              <SiPaloaltosoftware className="text-mainColor text-2xl leading-none" />
              <h1 className="ml-1 text-2xl text-mainColor font-bold cursor-pointer">
                AX <span className="text-black">Seva</span>
              </h1>
            </a>
            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Enter your email"
                  />
                </div>
              </form>
            </div>
            {/* Buttons */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={togglePopup}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-buttons text-white px-4 py-2 rounded "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUsButton;
