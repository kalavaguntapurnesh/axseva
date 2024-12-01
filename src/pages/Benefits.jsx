import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import Footer from "./../components/Footer";
import AboutLayout from "./../components/AboutLayout";
import ContactUsButton from "../components/ContactUsButton";
const Benefits = () => {
  return (
    <>
      <AboutLayout />
      <div className="mt-12">
        {/* Section 1 */}
        <div className="pt-16">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  {/* grid 1 */}

                  {/* grid 2 */}
                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full justify-start"
                  >
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                      Deep Industry Expertise:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                      With extensive experience in Microsoft 365 and Dynamics
                      365 Finance, we bring unparalleled expertise to every
                      project. Our deep understanding of these platforms enables
                      us to deliver tailored solutions that optimize business
                      processes, enhance financial management, and drive
                      operational efficiency. Whether it’s streamlining
                      workflows, implementing advanced financial analytics, or
                      integrating with existing systems, we ensure every
                      solution is designed to meet your specific industry needs
                      and deliver measurable outcomes.
                    </p>
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

        {/* section 2 */}

        <div className="pt-16">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  {/* grid 1 */}

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

                  {/* grid 2 */}
                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full justify-start"
                  >
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                      Certified Professionals:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                      Our team consists of certified Microsoft 365 and Dynamics
                      365 Finance experts, committed to delivering exceptional
                      results. With in-depth knowledge of ERP systems and
                      Microsoft technologies, our specialists ensure seamless
                      implementations, optimized workflows, and innovative
                      solutions tailored to your business requirements.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="pt-16">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  {/* grid 1 */}

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full justify-start"
                  >
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                      Customer-Centric Approach:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                      We craft and implement tailored Microsoft 365 and Dynamics
                      365 Finance solutions that address your unique business
                      challenges, ensuring measurable outcomes and long-term
                      success. By focusing on your specific needs, we deliver
                      value-driven results that align with your goals.
                    </p>
                  </motion.div>
                  {/* grid 2 */}

                  <motion.div
                    variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex justify-center md:justify-start w-full h-full">
                      <img
                        src="https://www.tectura.com/wp-content/uploads/2023/05/shutterstock_1852757821-scaled.jpg"
                        className="w-full h-full rounded"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 4 */}

        {/* section 5 */}
        <div className="pt-16">
          <div className="relative">
            <div className="w-full">
              <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  {/* grid 1 */}

                  <motion.div
                    variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex flex-col space-y-6 w-full"
                  >
                    <div className="flex justify-center md:justify-start w-full h-full">
                      <img
                        src="https://www.tectura.com/wp-content/uploads/2023/05/shutterstock_2142010187-scaled.jpg"
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
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                      End-to-End Support:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                      From initial consultation to seamless implementation and
                      ongoing maintenance, we stand as your trusted partner at
                      every stage. Our comprehensive support ensures your
                      Microsoft 365 and Dynamics 365 Finance solutions operate
                      flawlessly, empowering your business for long-term
                      success.
                    </p>
                  </motion.div>
                  {/* grid 2 */}
                </div>
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
