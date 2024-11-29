import React from "react";
import Accordion from "./Accordion";

const HomeFinal = () => {
  return (
    <div className="mt-12">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            {/* <div className="mx-auto px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                <div className="max-w-xl lg:max-w-lg">
                  <h2 className="md:text-start text-center text-3xl font-bold tracking-tight text-sideHeading sm:text-4xl">
                    We help you to grow your business big
                  </h2>
                  <p className="md:text-start text-sideHeading text-center mt-4 text-lg leading-8 text-colorTwo">
                    At AX Seva, we help you execute digital transformation in
                    your organization by optimizing the solutions offered by
                    Microsoft.
                  </p>
                  <div className="mt-6 flex max-w-md gap-x-4">
                    <label for="email-address" class="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      className="min-w-0 flex-auto rounded border-0 bg-white/5 px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="flex-none rounded bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-colorTwo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                  <div className="flex flex-col md:items-start items-center">
                    <div className="rounded bg-white/5 p-2 ring-1 ring-white/10">
                      <BsGraphUpArrow className="text-mainColor w-8 h-8" />
                    </div>
                    <dt className="mt-4 font-semibold text-colorTwo">
                      Weekly articles
                    </dt>
                    <dd className="mt-2 leading-7 md:text-start text-center">
                      We are initiating the weekly articles which contains
                      in-depth information on dynamic 365 finance & operations.
                    </dd>
                  </div>
                  <div className="flex flex-col md:items-start items-center">
                    <div className="rounded bg-white/5 p-2 ring-1 ring-white/10">
                      <GoGoal className="text-mainColor w-8 h-8" />
                    </div>
                    <dt className="mt-4 font-semibold text-colorTwo">
                      No spam
                    </dt>
                    <dd className="mt-2 leading-7 md:text-start text-center">
                      We are spam free and we try to understand the user privacy
                      and their data security to enhance supply chain
                      management.
                    </dd>
                  </div>
                </dl>
              </div>
            </div> */}

            <div className="pt-12 pb-12 px-2" id="faq">
              <div className="flex items-center text-center justify-center ">
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor ">
                  Need Help
                </h1>
              </div>

              <div className="mx-auto max-w-[1000px] text-center mt-4">
                <h1 className="text-4xl font-bold text-headingColor">
                  Frequently Asked Questions
                </h1>
              </div>

              <div className="max-w-[1200px] mx-auto pt-12 ">
                <Accordion
                  title="What is meant by Microsoft Dynamics 365 Finance & Operations?"
                  answer="If we were to give Dynamics 365 overview, it is basically a suite of enterprise-level intelligent cloud-based applications. It breaks down silos between customer relationship management and enterprise resource planning and offers purpose-built applications that seamlessly manage core business processes. The Dynamics 365 suite of applications can be implemented individually or in various combinations and include:"
                />
                <Accordion
                  title="What are the benefits of Microsoft Dynamics 365 to organizations?"
                  answer="Microsoft Dynamics 365 enables businesses to achieve speed and agility across their organization. With its CRM and ERP capabilities combined, Microsoft Dynamics 365 Products can help a company serve its customers better, make decisions based on AI-driven analytics, automate business processes, optimize profits, and experience growth."
                />
                <Accordion
                  title="What are the features of Dynamics 365 and how can they optimize operations?"
                  answer="Dynamics 365 is an integrated suite of business applications that combines CRM and ERP capabilities. Its key features vary across modules. For example, Dynamics 365 Sales helps streamline sales processes, manage customer relationships, and track opportunities. Dynamics 365 Finance enables efficient financial management with features like budgeting, accounting, and reporting."
                />
                <Accordion
                  title="How does Dynamics 365 Finance & Operations streamline business processes?"
                  answer="It helps streamline business processes by centralizing data, automating tasks, and providing real-time insights. With Business Central, you can manage finance, sales, purchasing, inventory, and more from a single platform. It simplifies workflows, improves collaboration across teams, and enables data-driven decision-making."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFinal;
