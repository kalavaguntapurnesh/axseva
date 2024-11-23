import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { FaBlenderPhone, FaBuilding, FaHandshake } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Navbar />
      {/* <ScrollToTop /> */}

      <section className=" text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white">
            <div className="relative lg:pt-28 pt-20 lg:pb-8">
              <div className="w-full">
                <div className="w-full px-4 mx-auto max-w-[1400px]">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <div className="flex flex-col space-y-4 mt-8">
                        <div className="lg:text-start text-center">
                          <h1 className="uppercase font-bold text-colorFour tracking-wide">
                            get in touch
                          </h1>
                        </div>
                        <div className="lg:text-start text-center">
                          <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-colorThree">
                            Ready for Business Innovation? Let’s talk!
                          </h1>
                        </div>
                        <div className="lg:text-start text-center">
                          <h1 className="leading-relaxed tracking-wide font-medium lg:text-[20px] text-[16px] text-gray-600 dark:text-gray-800 ">
                            Leverage Microsoft solutions customized specifically
                            for your business needs!
                          </h1>
                        </div>

                        <ul className="space-y-2 pt-3">
                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <img
                                  src="https://www.dynamicssquare.com/img/menu-icons/dynamics-365-customer-engagement.svg"
                                  alt=""
                                  className="w-8 h-8"
                                />
                              </div>
                              <div className="h-6 w-1 bg-grayColor"></div>
                              <h1 className="ml-3 text-lg font-medium ">
                                350+ Successful Handovers and Counting!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center ">
                              <div className="flex flex-row items-center mr-3">
                                <img
                                  src="https://www.dynamicssquare.com/img/menu-icons/dynamics-365-marketing.svg"
                                  alt=""
                                  className="w-8 h-8"
                                />
                              </div>
                              <div className="h-6 w-1 bg-grayColor"></div>
                              <h1 className="ml-3 text-lg font-medium ">
                                150+ Qualified Professionals at Your Disposal!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <img
                                  src="https://www.dynamicssquare.com/img/menu-icons/dynamics-365-finance.svg"
                                  alt=""
                                  className="w-8 h-8"
                                />
                              </div>
                              <div className="h-6 w-1 bg-grayColor"></div>
                              <h1 className="ml-3 text-lg font-medium ">
                                24/7 Round-the-Clock Support!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <img
                                  src="https://www.dynamicssquare.com/img/menu-icons/d365-icon.png"
                                  alt=""
                                  className="w-8 h-8"
                                />
                              </div>
                              <div className="h-6 w-1 bg-grayColor"></div>
                              <h1 className="ml-3 text-lg font-medium ">
                                2x Boost in Efficiency and Productivity!
                              </h1>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <form action="" method="POST" className="mt-8">
                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Full Name"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="example@domain.com"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                            />
                          </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="subject"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              placeholder="Enter your subject"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            />
                          </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="message"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Message
                            </label>
                            <textarea
                              rows="4"
                              name="message"
                              id="message"
                              placeholder="Type your message"
                              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                            ></textarea>
                          </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-8/12 w-full">
                            <button className="hover:shadow-form rounded-3xl bg-colorFour hover:bg-colorFour transition duration-1000 ease-in-out py-3 px-12 text-base font-semibold text-white outline-none">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pt-8">
              <div className="space-y-2">
                <div className="text-center">
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-colorThree">
                    Why Businesses Trust AX Seva?
                  </h1>
                </div>
                <div className="text-center">
                  <h1 className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                    AX Seva is the leading Microsoft Solution partner, offering
                    future-ready business solutions to global organizations.
                  </h1>
                </div>
              </div>
              <div className="relative bg-[#f2f8fe] mt-8 rounded-lg p-6 max-w-[1400px] lg:mx-auto mx-4 h-60">
                {/* Top-left image */}
                <img
                  src="https://www.dynamicssquare.com/img/home/quote-left.png"
                  alt="Quote Left"
                  className="absolute top-[-16px] left-4 lg:w-16 lg:h-16 w-10 h-10"
                />
                {/* Content */}
                <div className="flex flex-col text-center justify-center items-center h-full max-w-[900px] mx-auto">
                  <p className="text-gray-600 text-center mt-2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque libero necessitatibus quidem numquam ullam,
                    architecto sit repudiandae fuga reprehenderit assumenda
                    quasi natus inventore voluptates ipsum?
                  </p>
                  <h2 className="text-grayColor text-2xl mt-4 font-semibold text-center">
                    Card Title
                  </h2>
                </div>
                {/* Bottom-right image */}
                <img
                  src="https://www.dynamicssquare.com/img/home/quote-right.png"
                  alt="Quote Right"
                  className="absolute bottom-[-16px] right-4 lg:w-16 lg:h-16 w-10 h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
