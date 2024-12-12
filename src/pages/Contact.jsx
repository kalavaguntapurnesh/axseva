import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants.js";
import { MdArrowRightAlt } from "react-icons/md";
import ContactUsButton from "../components/ContactUsButton";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const slides = [
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1010836040-2048x2048-1.jpg",
      heading: "Want to get a valuable advice?",
      paragraph:
        "AXSeva is here to provide good recommendations for your business",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

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
      <div className="flex flex-col h-screen ">
        {/* NavBar */}
        <NavBar />

        <section className="relative h-full w-full overflow-hidden select-none">
          {/* Background Images */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence>
              <motion.img
                key={slides[currentIndex].image}
                src={slides[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 object-cover w-full h-full"
              />
            </AnimatePresence>
          </div>

          {/* Static Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4">
            <h2 className="text-4xl font-semibold sm:text-5xl md:text-6xl uppercase">
              {slides[currentIndex].heading}
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light">
              {slides[currentIndex].paragraph}
            </p>
          </div>
        </section>
      </div>

      <section id="contact_form" className=" text-black pb-12 select-none">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-white">
            <div className="relative xl:pt-20 pt-12">
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
                        <div className="flex items-center lg:justify-start justify-center lg:text-start text-center">
                          <div className="h-4 w-1 bg-mainColor"></div>
                          <h2 className=" ml-2 text-lg font-bold text-mainColor ">
                            Collaborate with AXSeva
                          </h2>
                        </div>
                        <div className="lg:text-start text-center">
                          <p className="text-4xl font-bold text-headingColor">
                            Your Expert in Microsoft Dynamics 365 Finance &
                            Operations
                          </p>
                        </div>
                        <div className="lg:text-start text-center">
                          <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
                            While these functions all stand to benefit your
                            business, they can be difficult to navigate without
                            the help of an experienced specialist. AXSeva
                            can help. We’ll help your business make the most of
                            the Microsoft Dynamics 365 system, giving you the
                            competitive edge you need to succeed.
                          </p>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-6 md:px-0 px-2">
                          <a
                            href="https://maps.app.goo.gl/86cEfhqBVqryeg8x9"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/statue-of-liberty-5251958-4426372.png?f=webp&w=512"
                                    alt="contact_one"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div class="flex justify-center items-center">
                                  <h4 class="text-xl text-headingColor font-semibold text-center">
                                    Headquarters
                                  </h4>
                                </div>

                                <div class="flex flex-col justify-center items-center text-sideHeading text-center font-medium">
                                  <p>1691 Kettering St.</p>
                                  <p>Irvine, California, USA-92614</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="https://maps.app.goo.gl/n6xipDDg3NYg4bqs8"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/hyderabad-icon-download-in-svg-png-gif-file-formats--charminar-monument-mosque-heritage-buildings-icons-112414.png?f=webp&w=512"
                                    alt="contact_two"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div class="flex justify-center items-center">
                                  <h4 class="text-xl text-headingColor font-semibold text-center">
                                    Offshore Development Center
                                  </h4>
                                </div>

                                <div class="flex flex-col justify-center items-center text-sideHeading text-center font-medium ">
                                  <p>
                                    1-53, P NO.27, SY NO.41/P, 42/P Guttala,
                                  </p>
                                  <p>Begumpet, Hyderabad, India-500016</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="mailto:info@axseva.com"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/email-address-8510581-6701837.png?f=webp&w=512"
                                    alt="contact_three"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div class="flex justify-center items-center">
                                  <h4 class="text-xl text-headingColor font-semibold text-center">
                                    Email Address
                                  </h4>
                                </div>

                                <div class="flex flex-col justify-center items-center text-sideHeading text-center font-medium">
                                  <p>info@axseva.com</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="mailto:info@axseva.com"
                            class="flex md:justify-start justify-center"
                          >
                            <div class="w-full p-4 bg-white border border-gray-200 rounded shadow">
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  <img
                                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/social-media-5686022-4752631.png?f=webp&w=512"
                                    alt="contact_four"
                                    className="w-20 h-20"
                                  />
                                </div>
                                <div class="flex justify-center items-center">
                                  <h4 class="text-xl text-headingColor font-semibold text-center">
                                    Social Media Links
                                  </h4>
                                </div>

                                <div class="grid grid-cols-3 pt-2">
                                  <a
                                    href="https://www.linkedin.com/in/sumanthdama/"
                                    className="flex justify-center items-center"
                                  >
                                    <FaLinkedin className="text-headingColor w-6 h-6" />
                                  </a>
                                  <div className="flex justify-center items-center">
                                    <FaXTwitter className="text-headingColor w-6 h-6" />
                                  </div>
                                  <div className="flex justify-center items-center">
                                    <FaInstagram className="text-headingColor w-6 h-6" />
                                  </div>
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
                        <div className="flex items-center justify-center mb-5">
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
                              href="/terms-and-conditions"
                              className="font-medium text-primary-600 hover:underline"
                            >
                              Terms and Conditions
                            </a>{" "}
                            &{" "}
                            <a
                              href="/privacy-policy"
                              className="font-medium text-primary-600 hover:underline"
                            >
                              Privacy Policy
                            </a>{" "}
                            of the company.
                          </label>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          class="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                        >
                          <span class="relative z-10">Submit</span>
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
                  <h3 className=" text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    A word from the founder
                  </h3>
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
                  alt="QuoteLeft"
                  className="absolute top-[-16px] left-4 lg:w-16 lg:h-16 w-10 h-10"
                />
                <div className="flex flex-col text-center justify-center items-center h-full max-w-[900px] mx-auto">
                  <p className="text-gray-600 text-center mt-2 lg:text-lg">
                    Our mission is simple yet profound: to help you transform
                    your financial operations, so you can focus on what you do
                    best—growing your business. We believe that with the right
                    tools and the right partner, there's no limit to what you
                    can achieve. We're excited about the opportunity to work
                    with you and are confident that together, we can build a
                    foundation for sustained success.
                  </p>
                  <h6 className="text-black text-2xl mt-4 font-bold text-center flex flex-row items-center">
                    Sumanth Dama
                  </h6>
                </div>
                {/* Bottom-right image */}
                <img
                  src="https://www.dynamicssquare.com/img/home/quote-right.png"
                  alt="QuoteRight"
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
                  <h3 className=" text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    Transformation has no boundaries.
                  </h3>
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
                        alt="contact_five"
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <p>
                        Submit the contact form. Expect to receive an email from
                        us within one business day.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-center items-center">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/computer-502-189023.png?f=webp&w=512"
                        alt="contact_six"
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <p>
                        Respond to our email. We’ll ask you about project
                        details and meeting availability.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-center items-center">
                      <img
                        src="https://cdn.iconscout.com/icon/premium/png-512-thumb/done-1885316-1596761.png?f=webp&w=512"
                        alt="contact_seven"
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="text-center text-gray-600 text-lg">
                      <p>
                        Meet with our experts. You’ll walk away knowing more
                        about us and our process — and we’ll learn.
                      </p>
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
                      <h4 class="text-2xl font-bold lg:text-start text-center  text-headingColor">
                        Discovery and Planning
                      </h4>
                    </div>

                    <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                      <p>
                        We begin by understanding your business goals,
                        challenges and requirements.
                      </p>
                    </div>

                    <div class="flex flex-row lg:justify-start justify-center items-center space-x-2 pt-1">
                      <a
                        href="/privacy-policy"
                        class="flex text-headingColor  font-semibold transition duration-1000 ease-out"
                      >
                        Know about privacy policy
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
                      <h4 class="text-2xl font-bold lg:text-start text-center text-headingColor">
                        Your Path to Success Starts Here.
                      </h4>
                    </div>

                    <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                      <p>
                        Our team configures Dynamics 365 Finance & Operations to align with
                        your specific processes and workflows.
                      </p>
                    </div>

                    <div class="flex flex-row lg:justify-start justify-center items-center space-x-2 pt-1">
                      <a
                        href="/terms-and-conditions"
                        class="flex text-headingColor  font-semibold transition duration-1000 ease-out"
                      >
                        Our Terms & Conditions
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
