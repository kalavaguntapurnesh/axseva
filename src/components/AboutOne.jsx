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
                    About AXSeva
                  </h1>
                </div>

                <div className="lg:text-5xl text-4xl md:text-start text-center font-bold text-headingColor md:ml-2 px-2 md:px-0">
                  <h1>Transforming Businesses Through Technology</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2 px-2 md:px-0">
                  <p>
                    AXSeva is engaged in mustering energy among people to create
                    a better world and solve critical business problems through
                    digital transformation and innovative cloud technology
                    solutions. We are not only helping businesses become
                    resilient but also empowering them to stay ahead of the
                    curve.
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
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/community-2788626-2311008.png?f=webp&w=512"
                          alt="icon"
                          className="w-20 h-20"
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
                        <img
                          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/unity-4870710-4061698.png?f=webp&w=512"
                          className="w-20 h-20"
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
                    Running a business like AXSeva takes energy, creativity and
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
