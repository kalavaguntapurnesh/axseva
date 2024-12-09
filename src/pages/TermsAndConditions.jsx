import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/Navbar";
// import ContactUsButton from "../components/ContactUsButton";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  const slides = [
    {
      image:
        "https://www.tectura.com/wp-content/uploads/2023/04/Industries_LegalServices-1.jpg",
      heading: "AXSeva Terms & Conditions",
      paragraph: "Terms and Conditions for Consultation Request",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);
  return (
    <div>
      <div className="flex flex-col h-screen">
        {/* NavBar */}
        <NavBar />

        <section className="relative h-full w-full overflow-hidden">
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
            <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl uppercase">
              {slides[currentIndex].heading}
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light">
              {slides[currentIndex].paragraph}
            </p>
          </div>
        </section>
      </div>

      <div className="xl:pt-8 pt-16">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12 space-y-4">
              <div className="lg:px-2 px-1 space-y-4">
                <div className="space-y-2 xl:text-start text-center pt-4">
                  <div className="space-y-2 xl:text-start text-center ">
                    <h1 className="text-headingColor text-xl font-medium pb-4">
                      Terms and Conditions for Consultation Request
                    </h1>
                    <p className="text-privacyColor">
                      By submitting a consultation request, you acknowledge and
                      agree to the following terms and conditions. The
                      consultation service is intended to provide tailored
                      guidance and recommendations based on the information you
                      provide. It does not constitute legal, financial, or
                      professional advice unless explicitly stated. To ensure
                      the best possible outcome, you agree to provide accurate,
                      complete, and current information. The quality of the
                      consultation may be impacted by any inaccuracies or
                      omissions in the information supplied.
                    </p>
                    <p className="text-privacyColor">
                      All information shared during the consultation will be
                      handled with strict confidentiality and will not be
                      disclosed to third parties without your consent, except as
                      required by law. Likewise, you are responsible for
                      maintaining the confidentiality of any insights,
                      recommendations, or materials shared by the consultant.
                    </p>
                    <p className="text-privacyColor">
                      While we strive to offer valuable insights, the
                      consultation is provided on a good-faith, best-effort
                      basis, and no guarantees or warranties regarding specific
                      outcomes or results are provided. If applicable, fees for
                      the consultation must be paid in full before the session
                      unless otherwise agreed. Payments are non-refundable
                      except in cases specified under the cancellation policy.
                      To reschedule or cancel a session, requests must be
                      submitted at least 24 hours in advance. Late cancellations
                      or missed appointments will result in forfeiture of fees.
                    </p>
                    <p className="text-privacyColor">
                      Any materials or intellectual property shared during the
                      consultation remain the exclusive property of the
                      consultant and may not be reproduced, distributed, or used
                      without prior written consent. The consultant is not
                      liable for any direct, indirect, incidental, or
                      consequential damages resulting from the consultation. You
                      agree to use the guidance provided at your own discretion
                      and risk.
                    </p>
                    <p className="text-privacyColor">
                      The consultant reserves the right to terminate a session
                      or engagement if the terms are violated or if the
                      engagement is deemed unsuitable. These terms and
                      conditions are governed by the laws of United States of
                      America, and any disputes will be resolved in accordance
                      with these laws. We may update these terms and conditions
                      from time to time, and any changes will be communicated
                      prior to subsequent consultations.
                    </p>
                    <p className="text-privacyColor">
                      By submitting your consultation request, you confirm that
                      you have read, understood, and agreed to these terms and
                      conditions. If you have any questions or need further
                      clarification, please contact us at{" "}
                      <a
                        href="mailTo:info@axseva.com"
                        className="text-blue-500 underline"
                      >
                        info@axseva.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ContactUsButton /> */}

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
