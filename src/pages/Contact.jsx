import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";

const Contact = () => {
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
                                <FaHandshake className="w-8 h-8" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium text-gray-600 ">
                                350+ Successful Handovers and Counting!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center ">
                              <div className="flex flex-row items-center mr-3">
                                <FaNetworkWired className="w-8 h-8" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium text-gray-600 ">
                                150+ Qualified Professionals at Your Disposal!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <FaClockRotateLeft className="w-8 h-8" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium text-gray-600 ">
                                24/7 Round-the-Clock Support!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <IoIosSpeedometer className="w-8 h-8" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium text-gray-600 ">
                                2x Boost in Efficiency and Productivity!
                              </h1>
                            </div>
                          </li>
                        </ul>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-6">
                          <a
                            href="mailto:info@axseva.com"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <div className="flex justify-center items-center w-10 h-10 border-2 border-mainColor rounded-full">
                                    <FaAddressBook
                                      size={20}
                                      className="text-mainColor"
                                    />
                                  </div>
                                </div>
                                <div class="flex justify-center items-center">
                                  <h1 class="text-xl text-headingColor font-semibold text-center">
                                    Address
                                  </h1>
                                </div>

                                <div class="flex flex-col justify-center items-center text-sideHeading text-center font-medium">
                                  <p>1691 Kettering St.</p>
                                  <p>Irvine, CA 92614</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="mailto:info@axseva.com"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <div className="flex justify-center items-center w-10 h-10 border-2 border-mainColor rounded-full">
                                    <FaMicrophoneAlt
                                      size={20}
                                      className="text-mainColor"
                                    />
                                  </div>
                                </div>
                                <div class="flex justify-center items-center">
                                  <h1 class="text-xl text-headingColor font-semibold text-center">
                                    Email Address
                                  </h1>
                                </div>

                                <div class="flex flex-col justify-center items-center text-sideHeading text-center font-medium">
                                  <p>info@axseva.com</p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <form
                        action=""
                        method="POST"
                        className="mt-8 lg:p-6 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded"
                      >
                        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4">
                          <div className="mb-3 w-full">
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
                              className="w-full rounded-md bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                          <div className="mb-3 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Job Title
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Job Title"
                              className="w-full rounded-md bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                        </div>
                        <div className="w-full grid grid-cols-1 md:gap-4">
                          <div className="mb-5 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Work Email
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Work Email"
                              className="w-full rounded-md bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                        </div>

                        <div className="w-full grid grid-cols-1 md:gap-4">
                          <div className="mb-5 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Phone Number"
                              className="w-full rounded-md bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                        </div>

                        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4">
                          <div className="mb-5 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Company Name"
                              className="w-full rounded-md bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                          <div className="mb-5 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Looking For
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="You are looking for"
                              className="w-full rounded-md bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                        </div>

                        <div className="w-full grid grid-cols-1 md:gap-4">
                          <div className="mb-3 w-full">
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
                              className="w-full resize-none rounded-md border bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            ></textarea>
                          </div>
                        </div>

                        <div className="w-full grid grid-cols-1 md:gap-4 lg:ml-1">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="terms"
                                aria-describedby="terms"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                                required
                              ></input>
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="terms"
                                className="font-light text-gray-500 dark:text-gray-300"
                              >
                                I accept the{" "}
                                <a
                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                  href="/privacy"
                                >
                                  Terms and Conditions
                                </a>{" "}
                                and the{" "}
                                <a
                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                  href="/privacy"
                                >
                                  Privacy Policy
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="w-full grid grid-cols-1 md:gap-4">
                          <div className="mt-4 w-full">
                            <button className="hover:shadow-form rounded-full bg-mainColor transition duration-1000 md:py-3 py-2.5 ease-in-out w-full text-base font-medium text-white outline-none">
                              Submit Form
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16">
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
              <div className="relative bg-[#f2f8fe] mt-8 rounded-lg p-6 max-w-[1200px] lg:mx-auto mx-4 h-60">
                <img
                  src="https://www.dynamicssquare.com/img/home/quote-left.png"
                  alt="Quote Left"
                  className="absolute top-[-16px] left-4 lg:w-16 lg:h-16 w-10 h-10"
                />
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

            <div className="pt-16">
              <div className="space-y-2">
                <div className="text-center">
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-colorThree">
                    Transformation has no boundaries.
                  </h1>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-0 px-2">
                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://centricconsulting.com/wp-content/uploads/2020/07/Website-service-icons_52020-22-350x350.png"
                        alt=""
                        className="w-28 h-28"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <h1>
                        Submit the contact form. Expect to receive an email from
                        us within one business day.
                      </h1>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://centricconsulting.com/wp-content/uploads/2020/07/Salesforce-icon-350x350.png"
                        alt=""
                        className="w-28 h-28"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <h1>
                        Respond to our email. We’ll ask you about project
                        details and meeting availability.
                      </h1>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-center items-center">
                      <img
                        src="https://centricconsulting.com/wp-content/uploads/2020/07/Website-service-icons_52020-22-350x350.png"
                        alt=""
                        className="w-28 h-28"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <h1>
                        Meet with our experts. You’ll walk away knowing more
                        about us and our process — and we’ll learn.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-16 md:px-0 px-4">
              <div class="flex md:justify-start justify-center w-full">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-3">
                    <div class="flex lg:justify-start justify-center items-center">
                      <h1 class="text-2xl font-bold">
                        Businesses Meet Expected ROI
                      </h1>
                    </div>

                    <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                      <p>
                        For press or investor queries, please reach out to our
                        Communications team
                      </p>
                    </div>

                    <div class="flex flex-row lg:justify-start justify-center items-center space-x-2 pt-1">
                      <a
                        href="/contact"
                        class="flex  font-semibold transition duration-1000 ease-out"
                      >
                        See Investor Relations
                      </a>
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-8 h-8 border-[2px] border-mainColor rounded-full">
                          <FaArrowRightLong
                            size={20}
                            className="text-mainColor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-3">
                    <div class="flex lg:justify-start justify-center items-center">
                      <h1 class="text-2xl font-bold">
                        Your Path to Success Starts Here.
                      </h1>
                    </div>

                    <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                      <p>Interested in joining the AX Seva team?</p>
                    </div>

                    <div class="flex flex-row lg:justify-start justify-center items-center space-x-2 pt-1">
                      <a
                        href="/contact"
                        class="flex  font-semibold transition duration-1000 ease-out"
                      >
                        Explore open positions
                      </a>
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-8 h-8 border-[2px] border-mainColor rounded-full">
                          <FaArrowRightLong
                            size={20}
                            className="text-mainColor"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
