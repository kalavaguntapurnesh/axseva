import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaGlobe, FaHandshake, FaMedal } from "react-icons/fa";

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
    <div className="mt-28">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col space-y-6 w-full">
                <div className="flex items-center md:justify-start justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>
                  <h1 className="ml-2 text-lg font-bold text-mainColor uppercase">
                    About AX Seva
                  </h1>
                </div>

                <div className="lg:text-5xl text-4xl md:text-start text-center font-bold text-headingColor">
                  <h1>Transforming Businesses Through Cloud Technology</h1>
                </div>

                <div className="md:text-lg text-base text-sideHeading md:text-start text-center">
                  <p>
                    AX Seva is engaged in mustering energy among people to
                    create a better world and solve critical business problems
                    through digital transformation and innovative cloud
                    technology solutions. We are not only helping businesses
                    become resilient but also empowering them to stay ahead of
                    the curve.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 md:px-0 px-2">
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                    <div className="text-sideHeading font-semibold">
                      <p>In-depth Product Knowledge</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                    <div className="text-sideHeading font-semibold">
                      <p>Flexible Engagement Model</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                    <div className="text-sideHeading font-semibold">
                      <p>Higher Customer Satisfaction</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] rounded flex flex-col justify-center items-center p-4">
                    <div className="text-sideHeading font-semibold">
                      <p>Quality Driven Products</p>
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

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-8 md:px-0 px-2">
              <div className="bg-[#f8f9fa] rounded p-8">
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
              <div className="bg-[#f8f9fa] rounded p-8">
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
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-20 h-20 border-2 border-green-50 bg-green-50 rounded-full">
                          <FaHandshake size={36} className="text-mainColor" />
                        </div>
                      </div>
                      <div class="flex justify-center items-center">
                        <h1 class="text-3xl text-colorTwo font-bold text-center">
                          Reward Collaboration
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Recognize member initiatives with businesses both
                          locally and globally with incentives.
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                        >
                          View Features
                        </a>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-20 h-20 border-2 border-green-50 bg-green-50 rounded-full">
                          <FaMedal size={36} className="text-mainColor" />
                        </div>
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-colorTwo font-bold text-center">
                          Build Global Community
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Establish a global presence that encourages networking
                          and mutual benefits.
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                        >
                          View Features
                        </a>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="" class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                    <div class="space-y-4">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center w-20 h-20 border-2 border-green-50 bg-green-50 rounded-full">
                          <FaGlobe size={36} className="text-mainColor" />
                        </div>
                      </div>

                      <div class="flex justify-center items-center">
                        <h1 class=" text-3xl text-colorTwo font-bold text-center">
                          Foster Social Bonds
                        </h1>
                      </div>

                      <div class="flex justify-center items-center text-gray-600 text-center">
                        <p>
                          Develop a nurturing environment that fosters enduring
                          friendships and a robust social network.
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <a
                          href="/contact-us"
                          class="border-[1px] border-mainColor text-mainColor transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full"
                        >
                          View Features
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div class=" lg:grid-cols-2 grid-cols-1 gap-6 pt-8 hidden">
                <div class="flex md:justify-start justify-center w-full">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="space-y-6">
                      <div class="flex lg:justify-start justify-center items-center">
                        <img
                          src="https://uptimerobot.com/assets/images/monitor-icons/ssl-monitoring.svg"
                          alt=""
                          class="w-20 h-20"
                        />
                      </div>
                      <div class="flex lg:justify-start justify-center items-center">
                        <h1 class="text-2xl font-bold">Website monitoring</h1>
                      </div>

                      <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                        <p>
                          Is the email service still UP? How about the critical
                          database server? Let's check! Monitor any specific
                          service running on any port.
                        </p>
                      </div>

                      <div class="flex lg:justify-start justify-center">
                        <a
                          href="/contact"
                          class="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white hover:bg-brand rounded-3xl group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                          <span class="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                            Website monitoring
                          </span>
                          <span class="relative invisible">Button Text</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex md:justify-start justify-center">
                  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="space-y-6">
                      <div class="flex lg:justify-start justify-center items-center">
                        <img
                          src="https://uptimerobot.com/assets/images/monitor-icons/cron-job-monitoring.svg"
                          alt=""
                          class="w-20 h-20"
                        />
                      </div>
                      <div class="flex lg:justify-start justify-center items-center">
                        <h1 class="text-2xl font-bold">Cron job monitoring</h1>
                      </div>

                      <div class="flex lg:justify-start justify-center items-center lg:text-start text-center text-gray-600 text-lg">
                        <p>
                          Is the email service still UP? How about the critical
                          database server? Let's check! Monitor any specific
                          service running on any port.
                        </p>
                      </div>

                      <div class="flex lg:justify-start justify-center">
                        <a
                          href="/contact"
                          class="relative inline-flex items-center justify-center py-3 px-20 overflow-hidden font-semibold hover:bg-brand text-brand shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-out bg-white rounded-3xl group"
                        >
                          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out"></span>
                          <span class="absolute flex items-center justify-center w-full h-full font-bold hover:text-white duration-1000 transition ease-in-out">
                            Cron Job Monitoring
                          </span>
                          <span class="relative invisible">Button Text</span>
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
    </div>
  );
};

export default AboutOne;
