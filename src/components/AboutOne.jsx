import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaGlobe, FaHandshake, FaMedal } from "react-icons/fa";
import world from "../assets/world.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";

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
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col space-y-6 w-full">
                <div className="flex items-center md:justify-start justify-center md:ml-4">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    About AX Seva
                  </h1>
                </div>

                <div className="lg:text-5xl text-4xl md:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                  <h1>Transforming Businesses Through Technology</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
                  <p>
                    AX Seva is engaged in mustering energy among people to
                    create a better world and solve critical business problems
                    through digital transformation and innovative cloud
                    technology solutions. We are not only helping businesses
                    become resilient but also empowering them to stay ahead of
                    the curve.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:px-0 px-2">
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>In-depth Product Knowledge</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Flexible Engagement Model</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Higher Customer Satisfaction</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Quality Driven Products</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>Adversiry Roles to CIO</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4 shadow">
                    <div className="text-sideHeading font-semibold">
                      <p>24/7 Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center w-[100%]">
                <div>
                  <img
                    src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width="612"
                    height="512"
                    className="rounded md:block hidden"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="rounded md:hidden block w-[90%]"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-20 md:px-0 px-2">
              <div className="bg-[#f8f9fa] rounded p-8 shadow">
                <div className="space-y-2 md:text-start text-center md:mx-4">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-semibold text-mainColor">
                      Our Mission
                    </h1>
                  </div>
                  <div className="md:text-4xl text-3xl font-bold text-headingColor md:w-3/4">
                    <h1>Building Trust Among Companies</h1>
                  </div>
                  <div className="text-sideHeading">
                    <h1>
                      Building Trust Among Companies & Customers Relationships
                      are built over an ever-valuable commodity, Trust. We're
                      out with a simple motto in mind.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="bg-[#f8f9fa] rounded p-8 shadow">
                <div className="space-y-2 md:text-start text-center md:mx-4">
                  <div className="flex items-center md:justify-start justify-center ">
                    <div className="h-4 w-1 bg-mainColor"></div>
                    <h1 className="ml-2 text-lg font-semibold text-mainColor">
                      Our Vision
                    </h1>
                  </div>
                  <div className="md:text-4xl text-3xl font-bold text-headingColor md:w-3/4">
                    <h1>Simplify the business processes</h1>
                  </div>
                  <div className="text-sideHeading">
                    <h1>
                      Improve customer experience, boost sales ROI by breaking
                      data silos into meaningful insights by integrating Power
                      BI, AI, and ML.
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 mx-auto max-w-[1400px] mt-20">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                  Our spectacular strength
                </h1>
              </div>

              <div className="mx-auto max-w-[1000px] text-center mt-4">
                <h1 className="text-4xl font-bold text-headingColor">
                  An Unmatched Experience
                </h1>
              </div>

              <div className="text-center mt-4">
                <h1 className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                  AX Seva is the leading Microsoft Solution partner, offering
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
                          <img src="data:image/png;base64,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"
                              alt="icon"
                              className="w-[60px] "
                          />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl text-headingColor font-bold text-center">
                          Innovation
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Recognize member initiatives with businesses both
                          locally and globally with incentives.
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
                          <img src="data:image/jpeg;base64,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"                              alt="icon"
                              className="w-[60px] "
                          />
                        </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Build Global Community
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Establish a global presence that encourages networking
                          and mutual benefits.
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
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesDkQcy7RAWb9vRYRqvZd8X1sadLw7_77LlqW5d_LPaLw8_vgW70GxlifqDy2JQoTOXw&usqp=CAU"                            className="w-[60px] "
                          />
                        </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-headingColor font-bold text-center">
                          Foster Social Bonds
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Develop a nurturing environment that fosters enduring
                          friendships and a robust social network.
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
            </div>

            <div className="pt-20 md:px-0 px-2">
              <div className="space-y-2">
                <div className="text-center">
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    Where can you find us!
                  </h1>
                </div>

                <a
                  href="https://maps.app.goo.gl/MVjv2DyeQkwUS8Wr5"
                  className="max-w-[1200px] mx-auto pt-8 flex justify-center items-center"
                >
                  <img src={world} alt="" className="md:w-[90%] w-[100%]" />
                </a>
              </div>
            </div>

            <div className="pt-20 md:px-0 px-2">
              <div className="space-y-2">
                <div className="text-center">
                  <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-headingColor">
                    Our Leadership
                  </h1>
                </div>

                <div className="text-center mt-4">
                  <h1 className="leading-relaxed tracking-wide text-base text-gray-600 dark:text-gray-800 ">
                    Running a business like AX Seva takes energy, creativity and
                    a love of just getting things done. Find out more about the
                    people we’ve chosen to lead the business.
                  </h1>
                </div>

                {/* <div className="max-w-[1200px] mx-auto pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="flex flex-col justify-center items-center space-y-1">
                    <img
                      src="https://media.licdn.com/dms/image/v2/C5103AQFs7wvNUQZNDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516344652480?e=1738195200&v=beta&t=qb2KkU0HEe9LkCvIdEaYrGDDq7LXgz_m26loLWdCADg"
                      className="md:w-60 md:h-60 h-80 w-80 rounded"
                      alt=""
                    />
                    <div className="text-xl pt-2 font-semibold tracking-normal md:leading-relaxed leading-normal text-colorThree">
                      <h1>Sumanth Dama</h1>
                    </div>
                    <div className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                      <p>Founder & Business Head</p>
                    </div>

                    <div className="flex items-center lg:justify-start justify-center ">
                      <a
                        href="https://www.linkedin.com/in/sumanthdama/"
                        className="bg-white border-[1px] border-mainColor font-medium outline-none
                      rounded flex items-center hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white md:px-6 px-8 py-2 text-center"
                      >
                        <FaLinkedinIn size={16} className="text-mainColor" />
                        <span className="ml-1 text-mainColor">
                          LinkedIn Profile
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 justify-center items-center">
                    <img
                      src="https://media.licdn.com/dms/image/v2/C4D03AQHblLCeYxGqiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1589251992840?e=1738195200&v=beta&t=DNoUnZs6MbWMgrKzQKeF7fdoz336vXFbfMPKvjWRMIs"
                      className="md:w-60 md:h-60 h-80 w-80 rounded"
                      alt=""
                    />
                    <div className="text-xl pt-2 font-semibold tracking-normal md:leading-relaxed leading-normal text-colorThree">
                      <h1>Amarnath Revuri</h1>
                    </div>
                    <div className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                      <p>Founder & CTO</p>
                    </div>
                    <div className="flex items-center lg:justify-start justify-center ">
                      <a
                        href="https://www.linkedin.com/in/amarnathpenumur/"
                        className="bg-white border-[1px] border-mainColor font-medium outline-none
                      rounded flex items-center hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white md:px-6 px-8 py-2 text-center"
                      >
                        <FaLinkedinIn size={16} className="text-mainColor" />
                        <span className="ml-1 text-mainColor">
                          LinkedIn Profile
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 justify-center items-center">
                    <img
                      src="https://media.licdn.com/dms/image/v2/C4E03AQG1WjrArK1OzA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517761454164?e=1738195200&v=beta&t=3MoJpq0ls8jRll-xPe49vkMXZ9pjR6UWZ43Detg4IkQ"
                      className="md:w-60 md:h-60 h-80 w-80 rounded"
                      alt=""
                    />

                    <div className="text-xl pt-2 font-semibold tracking-normal md:leading-relaxed leading-normal text-colorThree">
                      <h1>Amarnath Reddy Penumuru</h1>
                    </div>
                    <div className="leading-relaxed tracking-wide font-medium text-base text-gray-600 dark:text-gray-800 ">
                      <p>Founder & CPO</p>
                    </div>

                    <div className="flex items-center lg:justify-start justify-center ">
                      <a
                        href="https://www.linkedin.com/in/amarnathpenumur/"
                        className="bg-white border-[1px] border-mainColor font-medium outline-none
                      rounded flex items-center hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white md:px-6 px-8 py-2 text-center"
                      >
                        <FaLinkedinIn size={16} className="text-mainColor" />
                        <span className="ml-1 text-mainColor">
                          LinkedIn Profile
                        </span>
                      </a>
                    </div>
                  </div>
                </div> */}

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-12">
                  <div className="flex justify-center items-center w-[100%]">
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
                  </div>

                  <div className="flex flex-col space-y-6 w-full md:justify-start">
                    <div className="flex items-center md:justify-start justify-center ">
                      <div className="h-4 w-1 bg-mainColor"></div>
                      <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                        About the founder
                      </h1>
                    </div>

                    <div className="text-4xl md:text-start text-center font-bold text-headingColor">
                      <h1>Sumanth Dama</h1>
                    </div>

                    <div className="md:text-lg text-sideHeading md:text-start text-center">
                      <p>
                        As a Microsoft Dynamics AX Solutions Architect, I am
                        responsible for overseeing the design of software
                        solutions that provide seamless automation of business
                        operations and support for my clients. My experience as
                        a consultant and architect supporting Microsoft Dynamics
                        AX extends nearly 12 years. A long-standing career in
                        software consulting and a passion for coaching and
                        mentoring other software engineers has helped me to
                        build
                      </p>
                    </div>

                    <div className="md:flex items-center lg:justify-start justify-center hidden">
                      <a
                        href="https://www.linkedin.com/in/sumanthdama/"
                        className="border-mainColor border-[1px] font-medium outline-none
                      rounded flex items-center hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center"
                      >
                        <FaLinkedinIn className="text-mainColor" size={16} />
                        <span className="ml-1 text-mainColor">
                          LinkedIn Profile
                        </span>
                      </a>
                    </div>

                    <div className="mx-8 md:hidden block">
                      <a
                        href="https://www.linkedin.com/in/rickardo-anderson-a8964a220/"
                        className="bg-mainColor flex items-center justify-center hover:bg-white hover:text-mainColor hover:border-[1px] hover:border-mainColor font-medium outline-none
                      rounded hover:shadow-form transition duration-1000 ease-in-out text-base text-white px-8 py-2.5 text-center"
                      >
                        <FaLinkedinIn size={16} />
                        <span className="ml-1">LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
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
