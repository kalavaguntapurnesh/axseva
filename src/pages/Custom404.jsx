import React from "react";
import { Helmet } from "react-helmet";

const Custom404 = () => {
  const handleReport = () => {
    alert("Thank you! Your feedback has been recorded.");
    // You can integrate a reporting API here.
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for doesn't exist. Return to the homepage or explore other pages using the helpful links below."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
        <h1 className="text-6xl font-bold text-mainColor">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          The page you are looking for doesn't exist, or it might have been
          moved.
        </p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Search for pages or topics..."
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full mt-4 bg-mainColor text-white px-4 py-2 rounded hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 md:w-auto w-[100%]">
          <h3 className="text-lg text-center font-medium text-gray-700">
            Here are some helpful links:
          </h3>
          <ul className="grid lg:grid-cols-4 grid-cols-2 mt-4 gap-6">
            <li className="flex md:justify-start justify-center">
              <a href="/" className="text-blue-500 hover:underline">
                Home
              </a>
            </li>
            <li className="flex md:justify-start justify-center">
              <a href="/about-us" className="text-blue-500 hover:underline">
                About Us
              </a>
            </li>
            <li className="flex md:justify-start justify-center">
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact Us
              </a>
            </li>
            <li className="flex md:justify-start justify-center">
              <a
                href="/managed-it-services"
                className="text-blue-500 hover:underline"
              >
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Feedback/Report Button */}
        <button
          onClick={handleReport}
          className="mt-6 px-8 py-2 bg-mainColor text-white rounded hover:bg-blue-600 transition-all"
        >
          Report this issue
        </button>
      </div>
    </>
  );
};

export default Custom404;
