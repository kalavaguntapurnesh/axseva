import React from "react";
import Footer from "../components/Footer";
import ContactNavbar from "../components/ContactNavbar";
import ContactUsButton from "../components/ContactUsButton";

const Privacy = () => {
  const image =
    "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const heading = "Privacy Policy";

  return (
    <div>
      <ContactNavbar />
      <section className=" text-black ">
        <div className="bg-white relative">
          <div className="pt-20 lg:pb-8">
            <div className="w-full relative">
              <div className="inset-0 z-0">
                <img
                  src={image}
                  alt=""
                  className="opacity-[97%] inset-0 object-cover w-full lg:h-[400px] md:h-[360px] h-auto"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white lg:text-5xl text-4xl font-bold">
                    {heading}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="xl:pt-1 pt-8">
        <div className="relative">
          <div className="w-full">
            <div className="w-full mx-auto max-w-[1400px] pb-12 space-y-4">
              <div className="lg:px-2 px-1 space-y-4">
                <div className="xl:text-start text-center ">
                  <p className="text-privacyColor">
                    Thank you for visiting AXSeva's website at{" "}
                    <a
                      href="https://axseva.com"
                      className="underline text-blue-600"
                    >
                      www.axseva.com
                    </a>
                    . This Privacy Policy outlines how we collect, use, process,
                    store, and protect personal and non-personal information
                    obtained from visitors to our website. By accessing and
                    using our website, you consent to the practices described in
                    this policy.
                  </p>
                </div>

                <div className="space-y-2 xl:text-start text-center ">
                  <h1 className="text-headingColor font-medium">
                    1. Information We Collect:
                  </h1>
                  <p className="text-privacyColor">
                    We may collect various types of information from you,
                    including:
                  </p>
                  <ul className="text-privacyColor list-disc xl:ml-6 space-y-1">
                    <li>
                      Personal Information: This includes your name, email
                      address, contact details, and any other information you
                      provide voluntarily when contacting us, subscribing to our
                      newsletters, or using our services.
                    </li>
                    <li>
                      Non-Personal Information: This includes technical
                      information such as IP addresses, browser type, device
                      information, and website usage data collected through
                      cookies and similar technologies.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 xl:text-start text-center ">
                  <h1 className="text-headingColor font-medium">
                    2. How We Use Your Information:
                  </h1>
                  <p className="text-privacyColor">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="text-privacyColor list-disc xl:ml-6 space-y-1">
                    <li>
                      Providing Services: To deliver the services you request,
                      including responding to inquiries, processing
                      transactions, and providing customer support.
                    </li>
                    <li>
                      Website Improvement: To enhance our website’s
                      functionality, content, and user experience based on user
                      interactions and feedback.
                    </li>
                    <li>
                      Communication: To send you relevant updates, newsletters,
                      and promotional materials, subject to your preferences.
                    </li>
                    <li>
                      Analytics: To analyze website usage patterns, trends, and
                      performance metrics for the purpose of improving our
                      website and services.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 xl:text-start text-center ">
                  <h1 className="text-headingColor font-medium">
                    3. Data Sharing and Disclosure:
                  </h1>
                  <p className="text-privacyColor">
                    We do not sell or rent your personal information to third
                    parties. However, we may share your information in the
                    following circumstances:
                  </p>
                  <ul className="text-privacyColor list-disc xl:ml-6 space-y-1">
                    <li>
                      Service Providers: We may share information with trusted
                      third-party service providers who assist us in delivering
                      our services and maintaining our website.
                    </li>
                    <li>
                      Legal Obligations: We may disclose information when
                      required by law or to protect our rights, privacy, safety,
                      or property.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 xl:text-start text-center ">
                  <h1 className="text-headingColor font-medium">
                    4. Your Choices and Rights:
                  </h1>
                  <p className="text-privacyColor">You have the right to:</p>
                  <ul className="text-privacyColor list-disc xl:ml-6 space-y-1">
                    <li>
                      Access and Correct Your Information: You can access and
                      update your personal information through your account
                      settings or by contacting us.
                    </li>
                    <li>
                      Opt-Out: You can opt out of receiving promotional
                      communications from us by following the instructions in
                      our emails or by contacting us.
                    </li>
                    <li>
                      Data Deletion: You can request the deletion of your
                      personal information, subject to legal obligations and
                      legitimate interests.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 xl:text-start text-center ">
                  <h1 className="text-headingColor font-medium">
                    5. Data Security:
                  </h1>
                  <p className="text-privacyColor">
                    We take reasonable measures to safeguard your information
                    against unauthorized access, disclosure, alteration, or
                    destruction. However, no data transmission over the internet
                    or electronic storage method is completely secure.
                  </p>
                </div>

                <div className="space-y-2 xl:text-start text-center ">
                  <h1 className="text-headingColor font-medium">
                    6. Changes to This Policy:
                  </h1>
                  <p className="text-privacyColor">
                    We may update this Privacy Policy periodically to reflect
                    changes in our practices and legal requirements. We will
                    post the updated policy on our website and indicate the
                    effective date of the changes.
                  </p>
                </div>

                <div className="space-y-2 xl:text-start text-center ">
                  <h1 className="text-headingColor font-medium">
                    7. Contact Us:
                  </h1>
                  <p className="text-privacyColor">
                    If you have any questions, concerns, or requests related to
                    this Privacy Policy or your personal information, please
                    contact us at info@axseva.com
                  </p>
                </div>

                <div className="space-y-2 xl:text-start text-center pt-4">
                  <div className="space-y-2 xl:text-start text-center ">
                    <h1 className="text-headingColor text-xl font-medium">
                      Why does the Company collect personal information?
                    </h1>
                    <p className="text-privacyColor">
                      If you have any questions, concerns, or requests related
                      to this Privacy Policy or your personal information,
                      please contact us at info@axseva.com
                    </p>

                    <ul className="text-privacyColor list-disc xl:ml-6 space-y-1">
                      <li>
                        To administer, plan, and manage the relationship with
                        individuals and to communicate with individuals;
                      </li>
                      <li>
                        To better understand how the Company may improve its
                        products and services, to develop and conduct its
                        business and operations, and for other internal business
                        purposes;
                      </li>
                      <li>
                        To provide individuals with information on current and
                        future products and services or other developments with
                        respect to the Company and its affiliates and partners
                        (in accordance with Canada’s Anti-Spam Legislation – see
                        below); and
                      </li>
                      <li>
                        To comply with applicable legal and regulatory
                        requirements or to protect the Company’s legal rights
                        and property;
                      </li>
                      <li>
                        To provide individuals with requested information,
                        products, support, and/or services;
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 xl:text-start text-center pt-4">
                  <div className="space-y-2 xl:text-start text-center ">
                    <h1 className="text-headingColor text-xl font-medium">
                      How does the Company collect personal information?
                    </h1>
                    <p className="text-privacyColor">
                      The Company only collects personal information about an
                      individual with the individual’s knowledge and consent.
                      Generally, this means that the Company collects personal
                      information directly from the individual to whom it
                      relates, whether via the Company’s website, e-mail,
                      telephone, fax, or in person. Occasionally, the Company
                      may collect personal information from third party sources,
                      but only with the knowledge and consent of the individual
                      or where otherwise authorized by law.
                    </p>
                    <p className="text-privacyColor">
                      Visitors to the Company’s website should also be aware
                      that anonymous technical information may be collected by
                      the Company as a result of a visit to the Company’s
                      website. For example, this information may include the
                      visitor’s IP address, browser type, device type, operating
                      system, domain name, access times and referring website
                      addresses. The Company uses this anonymous technical
                      information for purposes such as diagnosing problems with
                      the Company’s servers, improving the operation and content
                      of the Company’s website and compiling aggregate and
                      statistical information.
                    </p>
                    <p className="text-privacyColor">
                      In some cases, this anonymous technical information may be
                      combined with personal information you have provided,
                      including for example to help the Company analyze
                      statistical use patterns and demographic data, and
                      determine which website referred the visitor to the
                      Company’s website. The Company will not otherwise attempt
                      to link or match such anonymous technical information with
                      any personally-identifiable information unless the Company
                      has an individual’s consent, the Company (or its service
                      providers) have detected or reasonably suspect any
                      unlawful use of the Company’s services or a security
                      breach, or the Company has a legal duty or right to do so.
                    </p>

                    <p className="text-privacyColor">
                      The Company may use “cookies” on its website. “Cookies”
                      are small text files placed on computers that can collect
                      and store a variety of information. Persistent cookies are
                      stored for a defined period of time on a user’s hard drive
                      unless manually deleted, while temporary cookies are
                      automatically deleted from the user’s browser upon logging
                      out of a website.{" "}
                      <span className="text-[#1C1C1C] font-medium">
                        Web browsers typically allow users to disable persistent
                        and/or temporary cookies.
                      </span>
                    </p>
                    <p className="text-privacyColor">
                      Please note that the Company uses Google Analytics, and
                      Google Tag Manager. Both solutions are operated by Google
                      LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
                      USA (more information about how Google collects, uses, and
                      processes data can be found{" "}
                      <a
                        href="https://policies.google.com/technologies/partner-sites"
                        className="text-red-400 font-medium underline"
                      >
                        here
                      </a>
                      ). Google Tag Manager allows marketed website tags to be
                      managed using an interface. The Tag Manager tool itself
                      (which implements the tags) is a cookie-less domain and
                      does not register personal information. Rather, the tool
                      causes other tags to be activated which may, for their
                      part, register personal information under certain
                      circumstances. Google Tag Manager does not access this
                      personal information. If recording has been deactivated on
                      a domain or cookie level, this setting will remain in
                      place for all tracking tags implemented with Google Tag
                      Manager.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 xl:text-start text-center pt-4">
                  <div className="space-y-2 xl:text-start text-center ">
                    <h1 className="text-headingColor text-xl font-medium">
                      The Company only uses or discloses personal information as
                      reasonably required to facilitate the Authorized Purposes
                      listed above.
                    </h1>
                    <p className="text-privacyColor">
                      In some cases, the Company may share personal information
                      with third party service providers performing functions on
                      the Company’s behalf, including, for example, vendors that
                      provide information technology services or provide
                      analytics or assessment services.
                    </p>
                    <p className="text-privacyColor">
                      The Company does not otherwise use or disclose personal
                      information unless the Company has an individual’s
                      consent, the Company has a good faith belief that
                      disclosure of the information is necessary to protect the
                      rights or property of Company, or the Company has a legal
                      duty or right to do so.
                    </p>
                    <p className="text-[#1C1C1C] font-medium">
                      The Company does not rent, sell or trade customer lists or
                      other personal information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactUsButton />

      <Footer />
    </div>
  );
};

export default Privacy;
