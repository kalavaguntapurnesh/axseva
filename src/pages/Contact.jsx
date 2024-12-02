import Footer from "../components/Footer";
import ContactNavbar from "../components/ContactNavbar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { MdArrowRightAlt } from "react-icons/md";
import ContactUsButton from "../components/ContactUsButton";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
const Contact = () => {
  // const handleCaptcha = (value) => {
  //   const [verified, setVerified] = useState(false); // Captcha verification state
  //   setVerified(true);
  // };

  const [formData, setFormData] = useState({
    fullname: "",
    jobtitle: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    lookingFor: "",
    message: "",
    // termsAccepted: false,
  });

  console.log("data : ", formData);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCaptcha = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify the reCAPTCHA.");
      return;
    }

    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }

    try {
      // https://axseva-backend.onrender.com
      // http://localhost:3010/api/register
      const response = await axios.post(
        "https://axseva-backend.onrender.com/api/register",
        formData
      );
      Swal.fire({
        title: "Success",
        text: "Form submitted successfully!",
      });
      setFormData({
        fullname: "",
        jobtitle: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        lookingFor: "",
        message: "",
        termsAccepted: false,
      });
      setCaptchaVerified(false);
    } catch (error) {
      console.error(
        "Error submitting form",
        error.response ? error.response.data : error
      );
      Swal.fire({
        title: "Error",
        text: error.response
          ? error.response.data.message
          : "Server error or internal error!",
      });
    }
  };

  return (
    <div>
      <ContactNavbar />
      {/* <ScrollToTop /> */}

      <section className=" text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white">
            <div className="relative lg:pt-28 pt-20 lg:pb-8">
              <div className="w-full">
                <div className="w-full px-4 mx-auto max-w-[1400px]">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    <motion.div
                      variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <div className="flex flex-col space-y-4 mt-8">
                        <div className="flex items-center md:justify-start justify-center md:text-start text-center">
                          <div className="h-4 w-1 bg-mainColor"></div>
                          <h1 className="uppercase ml-2 text-lg font-bold text-mainColor ">
                            Partner With AXSeva
                          </h1>
                        </div>
                        <div className="lg:text-start text-center">
                          <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                            Your Expert Microsoft Dynamix Finance Parter
                          </h1>
                        </div>
                        <div className="lg:text-start text-center">
                          <h1 className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
                            While these functions all stand to benefit your
                            business, they can be difficult to navigate without
                            the help of an experienced ERP specialist. AXSeva
                            can help. As a Microsoft ERP Gold Certified Partner,
                            AXSeva offers years of experience in both Microsoft
                            Dynamics 365 and other ERP and Cloud Systems. We’ll
                            help your business make the most of the Microsoft
                            Dynamics 365 system, giving you the competitive edge
                            you need to succeed.
                          </h1>
                        </div>

                        {/* <ul className="space-y-2 pt-3 md:px-0 px-2 hidden md:flex flex-col justify-center">
                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <FaHandshake className="w-7 h-7 text-gray-600" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium">
                                350+ Successful Handovers and Counting!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center ">
                              <div className="flex flex-row items-center mr-3">
                                <FaNetworkWired className="w-7 h-7 text-gray-600" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium">
                                150+ Qualified Professionals at Your Disposal!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <FaClockRotateLeft className="w-7 h-7 text-gray-600" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium">
                                24/7 Round-the-Clock Support!
                              </h1>
                            </div>
                          </li>

                          <li>
                            <div className="flex items-center">
                              <div className="flex flex-row items-center mr-3">
                                <IoIosSpeedometer className="w-7 h-7 text-gray-600" />
                              </div>
                              <div className="h-6 w-1 bg-mainColor"></div>
                              <h1 className="ml-3 text-lg font-medium">
                                2x Boost in Efficiency and Productivity!
                              </h1>
                            </div>
                          </li>
                        </ul> */}

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-6 md:px-0 px-2">
                          <a
                            href="mailto:info@axseva.com"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                              <div class="space-y-1">
                                <div className="flex justify-center items-center">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/location-11114533-9194397.png?f=webp&w=512"
                                    alt="icon"
                                    className="w-20 h-20"
                                  />
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
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                              <div class="space-y-1">
                                <div className="flex justify-center items-center">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/domain-8235601-6839704.png?f=webp&w=512"
                                    alt="icon"
                                    className="w-20 h-20"
                                  />
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
                    </motion.div>

                    <motion.div
                      variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.5 }}
                      className="mx-2"
                    >
                      <form
                        onSubmit={handleSubmit}
                        className="mt-8 lg:p-6 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded"
                      >
                        {/* Full Name */}
                        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4">
                          <div className="mb-3 w-full">
                            <label
                              htmlFor="fullname"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="fullname"
                              id="fullname"
                              value={formData.fullname}
                              onChange={handleChange}
                              placeholder="Your Full Name"
                              className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>

                          {/* Job Title */}
                          <div className="mb-3 w-full">
                            <label
                              htmlFor="jobtitle"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Job Title
                            </label>
                            <input
                              type="text"
                              name="jobtitle"
                              id="jobtitle"
                              value={formData.jobtitle}
                              onChange={handleChange}
                              placeholder="Your Job Title"
                              className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                        </div>

                        {/* Work Email */}
                        <div className="mb-5 w-full">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                          />
                        </div>

                        {/* Phone Number */}
                        <div className="mb-5 w-full">
                          <label
                            htmlFor="phoneNumber"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                            className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                          />
                        </div>

                        {/* Company Name */}
                        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4">
                          <div className="mb-5 w-full">
                            <label
                              htmlFor="companyName"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="companyName"
                              id="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder="Your Company Name"
                              className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>

                          {/* Looking For */}
                          <div className="mb-5 w-full">
                            <label
                              htmlFor="lookingFor"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Looking For
                            </label>
                            <input
                              type="text"
                              name="lookingFor"
                              id="lookingFor"
                              value={formData.lookingFor}
                              onChange={handleChange}
                              placeholder="You are looking for"
                              className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                            />
                          </div>
                        </div>
                        {/* Message */}
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
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Let us know if you’d like to schedule a meeting, discuss opportunities, or have any questions. We're here to help!"
                            className="w-full resize-none rounded border bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-[#393053]"
                          ></textarea>
                        </div>

                        {/* CAPTCHA */}
                        <div className="w-[100%] flex py-4 text-start justify-center">
                          <ReCAPTCHA
                            sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                            onChange={handleCaptcha}
                          />
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start justify-center mb-5">
                          <input
                            type="checkbox"
                            id="termsAccepted"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <label
                            htmlFor="termsAccepted"
                            className="ml-3 text-sm"
                          >
                            I accept the{" "}
                            <a
                              href="/privacy-policy"
                              className="font-medium text-primary-600 hover:underline"
                            >
                              Terms and Conditions & Privacy Policy of the
                              company
                            </a>
                          </label>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="hover:shadow-form rounded bg-mainColor transition duration-1000 md:py-3 py-2.5 ease-in-out w-full text-base font-medium text-white outline-none"
                        >
                          Submit Form
                        </button>
                      </form>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16 md:px-0 px-2">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="space-y-2"
              >
                <div className="text-center">
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    A word from the founder
                  </h1>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from bottom to top
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="relative bg-[#f2f8fe] mt-8 rounded p-6 max-w-[1200px] lg:mx-auto mx-4 h-[380px] md:h-60"
              >
                <img
                  src="https://www.dynamicssquare.com/img/home/quote-left.png"
                  alt="Quote Left"
                  className="absolute top-[-16px] left-4 lg:w-16 lg:h-16 w-10 h-10"
                />
                <div className="flex flex-col text-center justify-center items-center h-full max-w-[900px] mx-auto">
                  <p className="text-gray-600 text-center mt-2">
                    Our mission is simple yet profound: to help you transform
                    your financial operations, so you can focus on what you do
                    best—growing your business. We believe that with the right
                    tools and the right partner, there's no limit to what you
                    can achieve. We're excited about the opportunity to work
                    with you and are confident that together, we can build a
                    foundation for sustained success.
                  </p>
                  <h2 className="text-black text-2xl mt-4 font-bold text-center flex flex-row items-center">
                    Sumanth Dama
                  </h2>
                </div>
                {/* Bottom-right image */}
                <img
                  src="https://www.dynamicssquare.com/img/home/quote-right.png"
                  alt="Quote Right"
                  className="absolute bottom-[-16px] right-4 lg:w-16 lg:h-16 w-10 h-10"
                />
              </motion.div>
            </div>

            <div className="pt-16">
              <div className="space-y-2">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-center"
                >
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    Transformation has no boundaries.
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8 md:px-0 px-2"
                >
                  <div className="space-y-2">
                    <div className="flex justify-center items-center">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/location-form-1885282-1596727.png?f=webp&w=512"
                        alt=""
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <h1>
                        Submit the contact form. Expect to receive an email from
                        us within one business day.
                      </h1>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-center items-center">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/computer-502-189023.png?f=webp&w=512"
                        alt=""
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <h1>
                        Respond to our email. We’ll ask you about project
                        details and meeting availability.
                      </h1>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-center items-center">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/done-1885316-1596761.png?f=webp&w=512"
                        alt=""
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <h1>
                        Meet with our experts. You’ll walk away knowing more
                        about us and our process — and we’ll learn.
                      </h1>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div class="grid lg:grid-cols-2 grid-cols-1 md:gap-6 gap-4 pt-16 md:px-2 px-4">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                class="flex md:justify-start justify-center w-full"
              >
                <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                  <div class="space-y-3">
                    <div class="flex lg:justify-start justify-center items-center">
                      <h1 class="text-2xl font-bold text-headingColor">
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
                      <MdArrowRightAlt size={24} className="text-mainColor" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                class="flex md:justify-start justify-center"
              >
                <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                  <div class="space-y-3">
                    <div class="flex lg:justify-start justify-center items-center">
                      <h1 class="text-2xl font-bold text-headingColor">
                        Your Path to Success Starts Here.
                      </h1>
                    </div>

                    <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                      <p>Interested in joining the AXSeva team?</p>
                    </div>

                    <div class="flex flex-row lg:justify-start justify-center items-center space-x-2 pt-1">
                      <a
                        href="/contact"
                        class="flex  font-semibold transition duration-1000 ease-out"
                      >
                        Explore open positions
                      </a>
                      <MdArrowRightAlt size={24} className="text-mainColor" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactUsButton />

      <Footer />
    </div>
  );
};

export default Contact;
