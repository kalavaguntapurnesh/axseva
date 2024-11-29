import Footer from "../components/Footer";
import ContactNavbar from "../components/ContactNavbar";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
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


  console.log("data : ",formData);
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
        const response = await axios.post("http://localhost:3010/api/register", formData);
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
        console.error("Error submitting form", error.response ? error.response.data : error);
        Swal.fire({
            title: "Error",
            text: error.response ? error.response.data.message : "Server error or internal error!",
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
                    <div>
                      <div className="flex flex-col space-y-4 mt-8">
                        <div className="flex items-center md:justify-start justify-center md:text-start text-center">
                          <div className="h-4 w-1 bg-mainColor"></div>
                          <h1 className="uppercase ml-2 text-lg font-bold text-mainColor ">
                            get in touch
                          </h1>
                        </div>
                        <div className="lg:text-start text-center">
                          <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                            Ready for Business Innovation? Let’s talk!
                          </h1>
                        </div>
                        <div className="lg:text-start text-center">
                          <h1 className="leading-relaxed tracking-wide lg:text-[20px] text-[16px] text-gray-600 dark:text-gray-800 ">
                            Leverage Microsoft solutions customized specifically
                            for your business needs!
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
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  {/* <FaAddressBook
                                    size={24}
                                    className="text-mainColor"
                                  /> */}
                                  <img src="data:image/png;base64,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"
                                        alt="icon"
                                        className="w-[60px] "
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
                              <div class="space-y-2">
                                <div className="flex justify-center items-center">
                                  {/* <FaMicrophoneAlt
                                  data:image/png;base64,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
                                    size={24}
                                    className="text-mainColor"
                                  /> */}
                                  <img src="data:image/png;base64,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"
                                        alt="icon"
                                        className="w-[60px] "
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
                    </div>

                    <div className="mx-2">
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
            Work Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Work Email"
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
        <div className="flex items-start mb-5">
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
            <a href="/privacy" className="font-medium text-primary-600 hover:underline">
              Terms and Conditions
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
    </div>

                    
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-16 md:px-0 px-2">
              <div className="space-y-2">
                <div className="text-center">
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    A word from the founder
                  </h1>
                </div>
              </div>
              <div className="relative bg-[#f2f8fe] mt-8 rounded p-6 max-w-[1200px] lg:mx-auto mx-4 h-60">
                <img
                  src="https://www.dynamicssquare.com/img/home/quote-left.png"
                  alt="Quote Left"
                  className="absolute top-[-16px] left-4 lg:w-16 lg:h-16 w-10 h-10"
                />
                <div className="flex flex-col text-center justify-center items-center h-full max-w-[900px] mx-auto">
                  <p className="text-gray-600 text-center mt-2">
                    At AX Seva, I’ve built a company rooted in expertise,
                    transparency, tailored strategies, strong partnerships, and
                    measurable results in the field of Microsoft Dynamics 365
                    Finance & Operations.
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
              </div>
            </div>

            <div className="pt-16">
              <div className="space-y-2">
                <div className="text-center">
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
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

            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-16 md:px-2 px-4">
              <div class="flex md:justify-start justify-center w-full">
                <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
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
              </div>

              <div class="flex md:justify-start justify-center">
                <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="space-y-3">
                    <div class="flex lg:justify-start justify-center items-center">
                      <h1 class="text-2xl font-bold text-headingColor">
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
                      <MdArrowRightAlt size={24} className="text-mainColor" />
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
