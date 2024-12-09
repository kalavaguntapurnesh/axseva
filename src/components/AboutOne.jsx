import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import world from "../assets/world.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const AboutOne = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="lg:pt-28 pt-16">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-col space-y-6 w-full"
              >
                <div className="flex items-center lg:justify-start justify-center md:ml-4">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor ">
                    About AXSeva
                  </h1>
                </div>

                <div className="text-4xl lg:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                  <h1>Building a Brighter Financial Future Together</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading lg:text-start text-center lg:ml-2 px-2 md:px-0">
                  <p>
                    AXSeva is engaged in solving critical business problems
                    through digital transformation and innovative cloud
                    technology solutions. We are not only helping businesses
                    become resilient but also empowering them to stay ahead of
                    the curve.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-0 px-2">
                  {/* <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>In-depth Product Knowledge</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Flexible Engagement Model</p>
                    </div>
                  </div> */}
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Customized Execution Strategy</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Complete Project Management</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Supply Chain Optimization</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Strategic Advisor to CIO's</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center items-center w-[100%]"
              >
                <div>
                  <img
                    src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    // width="612"
                    height="512"
                    className="rounded lg:block hidden"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded lg:hidden block w-[90%]"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-20 md:px-0 px-2">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-[#f8f9fa] rounded p-8 shadow"
              >
                <div className="space-y-2 md:text-start text-center md:mx-4">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      Our Mission
                    </h1>
                  </div>
                  <div className="md:text-4xl text-3xl font-bold text-headingColor md:w-3/4">
                    <h1>Transform your financial operations</h1>
                  </div>
                  <div className="text-sideHeading">
                    <h1>
                      To help you transform your financial operations, so you
                      can focus on what you do best—growing your business. We
                      believe that with the right tools and the right partner,
                      there's no limit to what you can achieve.
                    </h1>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="bg-[#f8f9fa] rounded p-8 shadow"
              >
                <div className="space-y-2 md:text-start text-center md:mx-4">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-bold text-mainColor ">
                      Our Vision
                    </h1>
                  </div>
                  <div className="md:text-4xl text-3xl font-bold text-headingColor md:w-3/4">
                    <h1>Empower businesses process</h1>
                  </div>
                  <div className="text-sideHeading">
                    <h1>
                      To empower businesses to reach their full potential
                      through innovative financial technology solutions. In
                      today's dynamic and competitive marketplace, having a
                      robust financial management system isn't just an
                      advantage—it's a necessity.
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("down", 0.1)} // Fade in from top to bottom
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="w-full px-4 mx-auto max-w-[1400px] mt-20"
            >
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor">
                  Our amazing strength
                </h1>
              </div>

              <div className="mx-auto max-w-[1000px] text-center mt-4">
                <h1 className="text-4xl font-bold text-headingColor">
                  An Unmatched Experience
                </h1>
              </div>

              <div className="text-center mt-4">
                <h1 className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                  AXSeva is the leading Microsoft Solution partner, offering
                  future-ready business solutions to global organizations.
                </h1>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pt-8">
                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center  rounded-full">
                          {/* <IoBarChart size={32} className="text-mainColor" /> */}
                          <img
                            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/innovation-2277793-1897480.png?f=webp&w=512"
                            alt="icon"
                            className="w-20 h-20"
                          />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl text-headingColor font-bold text-center">
                          Seamless Integration
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          We specialize in integrating Dynamics 365 Finance with
                          your existing systems and workflows, minimizing
                          disruptions and maximizing productivity.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center  rounded-full">
                        {/* <IoBarChart size={32} className="text-mainColor" /> */}
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/community-2788626-2311008.png?f=webp&w=512"
                          alt="icon"
                          className="w-20 h-20"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Team of Professionals
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Our certified consultants bring years of experience
                          and deep expertise in financial systems, guaranteeing
                          a smooth and efficient implementation process.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center  rounded-full">
                        {/* <IoBarChart size={32} className="text-mainColor" /> */}
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/unity-4870710-4061698.png?f=webp&w=512"
                          className="w-20 h-20"
                        />
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Future-Proof Solutions
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          We design implementations with scalability in mind, so
                          your financial systems can grow and adapt alongside
                          your business.
                        </p>
                      </div>

                      {/* <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded"
                        >
                          View Features
                        </a>
                      </div> */}
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            <div id="location_map" className="pt-24 md:px-0 px-2">
              <div className="space-y-2">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-center"
                >
                  <h1 className="text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    Visit us at this location
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <a
                    href="https://maps.app.goo.gl/MVjv2DyeQkwUS8Wr5"
                    className="max-w-[1200px] mx-auto pt-8 flex justify-center items-center"
                  >
                    <img src={world} alt="" className="md:w-[90%] w-[100%]" />
                  </a>
                </motion.div>
              </div>
            </div>

            <div id="our_leadership" className="pt-20 md:px-0 px-2">
              <div className="space-y-2">
                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-center"
                >
                  <h1 className=" text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    Our Leadership
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-center mt-4"
                >
                  <h1 className="leading-relaxed tracking-wide text-base text-gray-600 dark:text-gray-800 ">
                    Running a business like AXSeva takes energy, creativity and
                    a love of just getting things done. Find out more about the
                    people we’ve chosen to lead the business.
                  </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-16">
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex justify-center items-center w-[100%]"
                  >
                    <div className="md:flex justify-center hidden w-[100%]">
                      <img
                        src="https://media.licdn.com/dms/image/v2/C5103AQFs7wvNUQZNDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516344652480?e=1738195200&v=beta&t=qb2KkU0HEe9LkCvIdEaYrGDDq7LXgz_m26loLWdCADg"
                        alt=""
                        // width="612"
                        // height="512"
                        className="rounded md:block hidden w-[80%] h-[460px]"
                      />
                    </div>
                    <div className="flex justify-center items-center md:hidden w-[90%]">
                      <img
                        src="https://media.licdn.com/dms/image/v2/C5103AQFs7wvNUQZNDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516344652480?e=1738195200&v=beta&t=qb2KkU0HEe9LkCvIdEaYrGDDq7LXgz_m26loLWdCADg"
                        alt=""
                        className="rounded w-[100%]"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full md:justify-start"
                  >
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor ">
                        About the founder
                      </h1>
                    </div>

                    <div className="text-4xl md:text-start text-center font-bold text-headingColor">
                      <h1>Sumanth Dama</h1>
                    </div>

                    <div className="md:text-lg text-sideHeading md:text-start text-center space-y-1">
                      <p>
                        When I founded AXSeva, my vision was clear: to empower
                        businesses to reach their full potential through
                        innovative financial technology solutions. In today's
                        dynamic and competitive marketplace, having a robust
                        financial management system isn't just an advantage—it's
                        a necessity. That's why we've dedicated ourselves to
                        mastering Microsoft Dynamics 365 Finance.
                      </p>
                      <p>
                        This powerful platform has the capacity to revolutionize
                        the way you manage your financial operations, providing
                        real-time insights, automating complex processes, and
                        enabling strategic decision-making like never before
                        through a thoughtful, customized implementation—one that
                        aligns perfectly with your unique business needs and
                        goals.
                      </p>
                    </div>

                    <div className="md:flex items-center lg:justify-start justify-center hidden">
                      <a
                        href="https://www.linkedin.com/in/sumanthdama/"
                        className="border-mainColor text-mainColor hover:text-white hover:bg-mainColor  border-[1px] font-medium outline-none
                      rounded flex items-center hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm px-8 md:py-3 py-2 text-center"
                      >
                        <FaLinkedinIn size={16} />
                        <span className="ml-1 ">LinkedIn Profile</span>
                      </a>
                    </div>

                    <div className="mx-8 md:hidden block">
                      <a
                        href="https://www.linkedin.com/in/sumanthdama/"
                        className="bg-mainColor flex items-center justify-center hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                      >
                        <FaLinkedinIn size={16} />
                        <span className="ml-1">LinkedIn Profile</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
