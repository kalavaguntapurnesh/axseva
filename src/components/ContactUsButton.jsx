import React, { useState } from "react";
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
        className="fixed bottom-5 right-5 z-20 bg-buttons text-white px-3 py-3 rounded-full shadow-lg transition duration-300 block"
      >
        <MdMessage className="h-6 w-6" />
      </button>

      {/* Popup Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center lg:justify-end items-center">
          <div className="bg-gradient-to-b from-blue-300 to-white p-6 rounded-lg shadow-xl w-full max-w-md lg:w-2/5 lg:mr-5 lg:h-[60%] h-auto flex flex-col">
            <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg"
                    placeholder="Enter your email"
                  />
                </div>
              </form>
            </div>
            {/* Buttons */}
            <div className="flex justify-end mt-4">
              <button
                type="button"
                onClick={togglePopup}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-buttons text-white px-4 py-2 rounded-lg "
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
