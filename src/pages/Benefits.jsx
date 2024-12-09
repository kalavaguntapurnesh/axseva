import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { FaHandshake } from "react-icons/fa";
import Footer from "./../components/Footer";
import AboutLayout from "./../components/AboutLayout";
import { MdAutoGraph } from "react-icons/md";
import { BiSolidNavigation } from "react-icons/bi";
import { FaInbox } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { RiEmotionHappyFill } from "react-icons/ri";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import ContactUsButton from "../components/ContactUsButton";
import { useState } from "react";
const Benefits = () => {
  const values1 = [
    {
      icon: <FaHandshake />,
      Title: "Best in class partner experience",
      description:
        "We have a value-driven partnerships philosophy which relies on trust & collaboration, a joint focus on our customers backed up by ownership and accountability, and constant learning and growth.",
      color: "text-green-500", // Blue color for this icon
    },
    {
      icon: <FaInbox />,
      Title: "Diverse product and ecosystem",
      description:
        "We are leaders in the emerging Headless CMS category, MACH Alliance Certified and we have a strong ecosystem and marketplace of native integrations.",
      color: "text-blue-500", // Green color for this icon
    },
    {
      icon: <BiSolidNavigation />,
      Title: "Revenue potential",
      description:
        "We offer diverse opportunities for growth and revenue - our partners can benefit from cost efficiencies and 10% revenue share, active demand generation and practice opportunities with services revenue potential.",
      color: "text-yellow-400", // Red color for this icon
    },
    {
      icon: <FaMessage />,
      Title: "Perks",
      description:
        "As a token of our appreciation for our partnership, you will receive practical or limited edition Hygraph swag, invitations to workshops, conferences & events, as well as a lifetime license for company website.",
      color: "text-teal-500", // Yellow color for this icon
    },
    {
      icon: <MdAutoGraph />,
      Title: "Collaboration",
      description:
        "We develop mutual business plans with our partners, focusing on co-marketing and co-selling, ensuring both parties align goals, resources, and strategies effectively. We track progress in joint quarterly reviews.",
      color: "text-pink-500", // Purple color for this icon
    },
    {
      icon: <RiEmotionHappyFill />,
      Title: "Enablement and support",
      description:
        "Our partners have priority admittance to technical & commercial trainings, they gain insider access to new product features, and they benefit from community support for swift issue resolution.",
      color: "text-violet-500", // Pink color for this icon
    },
  ];

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
    <>
      <AboutLayout />
      <div>
        {/* Section 1 */}

        <div className="pt-12 bg-[#f6f8f9] select-none">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4 sm:px-6 mx-auto">
                <div className="flex flex-col">
                  {/* Heading */}
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-4xl text-headingColor font-bold text-center"
                  >
                    Why partner with AXSeva?
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <p className="text-base text-sideHeading text-center md:text-lg pt-4">
                      Partnering with us unlocks an opportunity to elevate your
                      offerings and maximize growth opportunities together.
                    </p>
                  </motion.div>
                  {/* Cards Grid */}
                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10 max-w-full"
                  >
                    {values1.map((value, index) => (
                      <div
                        key={index}
                        className="flex lg:justify-start justify-center"
                      >
                        <div className="w-full p-6">
                          <div className="space-y-3">
                            <div
                              className={`text-4xl flex lg:justify-start justify-center lg:items-start items-center ${value.color}`}
                            >
                              {value.icon}
                            </div>

                            <div className="flex lg:justify-start justify-center md:items-start items-center">
                              <h1 className="text-2xl text-headingColor font-semibold lg:text-start text-center">
                                {value.Title}
                              </h1>
                            </div>
                            <div className="flex text-gray-600  lg:justify-start justify-center lg:items-start items-center">
                              <p className="lg:text-start text-center">
                                {value.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}

        <div className="pt-20 select-none">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
                  {/* grid 1 */}

                  {/* grid 2 */}
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full lg:justify-start justify-center"
                  >
                    <div className="text-4xl text-center lg:text-start font-bold text-headingColor">
                      Collaborate with{" "}
                      <span className="text-mainColor">AX</span>Seva for
                      Seamless Synergy
                    </div>
                    <p className="md:text-lg text-base text-sideHeading lg:text-start text-center">
                      With extensive experience in Dynamics 365 Finance &
                      Operations we bring unparalleled expertise to every
                      project. Our deep understanding of these platforms enables
                      us to deliver tailored solutions that optimize business
                      processes, enhance financial management, and drive
                      operational efficiency.
                    </p>

                    <div className="flex lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
                      >
                        <span class="relative z-10">Browse our network</span>
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex justify-center md:justify-start w-full h-full">
                      <img
                        src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1303809341-2048x2048-1.jpg"
                        className="w-full h-full rounded"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}

        <div className="pt-16 select-none">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-8">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex justify-center md:justify-start w-full h-full">
                      <img
                        src="https://www.tectura.com/wp-content/uploads/2023/02/istockphoto-1346944001-2048x2048-1.jpg"
                        className="w-full h-full rounded"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full justify-start"
                  >
                    <div className="text-4xl text-center lg:text-start font-bold text-headingColor md:ml-4">
                      Certified Professionals Delivering Unmatched Business
                      Solutions
                    </div>
                    <p className="md:text-lg text-base text-sideHeading lg:text-start text-center lg:ml-4">
                      Our expert team specializes in Dynamics 365 Finance &
                      Operations, bringing unmatched expertise to streamline
                      financial management and operational efficiency. Certified
                      professionals deliver tailored solutions, ensuring
                      seamless implementations, optimized workflows, and
                      innovative strategies. Trust us to enhance your business
                      processes with cutting-edge insights and proven results.
                    </p>

                    <div className="flex lg:justify-start justify-center lg:ml-4">
                      <a
                        href="/contact"
                        class="relative mt-8 flex h-[50px] w-48 items-center justify-center overflow-hidden bg-mainColor border border-mainColor text-white  transition-all before:absolute before:h-0 before:w-0  before:bg-white hover:text-mainColor before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56 rounded"
                      >
                        <span class="relative z-10">Browse our network</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 4 */}

        <div className="pt-20 bg-[#f6f8f9] select-none">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-16 px-4">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-4xl text-headingColor font-bold text-center"
                >
                  Become a partner today
                </motion.div>

                {/* Description */}
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="text-base text-sideHeading text-center md:text-lg pt-4">
                    Partnering with us unlocks an opportunity to elevate your
                    offerings and maximize growth opportunities together.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="mx-auto max-w-[900px]"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 lg:p-12 p-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded bg-white"
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
                          className="w-full rounded py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] border-[0.5px] border-headingColor ease-in-out transition duration-1000 focus:border-[#393053]"
                        />
                      </div>

                      {/* Job Title */}
                      <div className="mb-3 w-full">
                        <label
                          htmlFor="jobtitle"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="jobtitle"
                          id="jobtitle"
                          value={formData.jobtitle}
                          onChange={handleChange}
                          placeholder="Your Last Name"
                          className="w-full rounded py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] border-[0.5px] border-headingColor ease-in-out transition duration-1000 focus:border-[#393053]"
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
                        className="w-full rounded py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] border-[0.5px] border-headingColor ease-in-out transition duration-1000 focus:border-[#393053]"
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
                        className="w-full rounded py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] border-[0.5px] border-headingColor ease-in-out transition duration-1000 focus:border-[#393053]"
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
                          className="w-full rounded py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] border-[0.5px] border-headingColor ease-in-out transition duration-1000 focus:border-[#393053]"
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
                          className="w-full rounded py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] border-[0.5px] border-headingColor ease-in-out transition duration-1000 focus:border-[#393053]"
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
                        className="w-full rounded py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-[0.5px] border-[0.5px] border-headingColor ease-in-out transition duration-1000 focus:border-[#393053]"
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
                      <label htmlFor="termsAccepted" className="ml-3 text-sm">
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
      </div>
      
      <ContactUsButton />
      <Footer />
    </>
  );
};

export default Benefits;
