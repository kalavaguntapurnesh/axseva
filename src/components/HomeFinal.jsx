import React from "react";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const HomeFinal = () => {
  return (
    <div className="pt-8 select-none">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px] pb-12">
            <div className=" px-2" id="faq">
              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="flex items-center text-center justify-center "
              >
                <div className="h-4 w-1 bg-mainColor"></div>
                <h1 className="ml-2 text-lg font-bold text-mainColor ">
                  Require Assistance
                </h1>
              </motion.div>

              <motion.div
                variants={fadeIn("down", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="mx-auto max-w-[1000px] text-center mt-4"
              >
                <h1 className="text-4xl font-bold text-headingColor">
                  Frequently Asked Questions
                </h1>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.1)} // Fade in from top to bottom
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className="max-w-[1200px] mx-auto pt-12 "
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFinal;
