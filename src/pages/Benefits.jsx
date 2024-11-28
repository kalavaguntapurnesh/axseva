import React from 'react'
import { Link } from 'react-router-dom'
import AboutOne from "../components/AboutOne";
import Footer from "./../components/Footer";
import AboutLayout from "./../components/AboutLayout";
import ContactUsButton from "../components/ContactUsButton";
const Benefits = () => {
  return (
    <>
    <AboutLayout />
    <div className='bg-[#f8f9fa] p-12 mt-20'>
        {/* Section 1 */}
        <div className='w-full'>
            <div className='relative'>
                <div className='max-w-[1400px] mx-auto px-4 sm-px-6 '>
                    <div className='flex flex-col gap-4 space-y-8'>
                        <h1 className='lg:text-5xl text-4xl text-center font-bold text-headingColor'>Key Benefits of Partnering with <span className='lg:text-5xl text-2xl md:text-start text-center font-semibold text-mainColor'>
                          AX <span className="text-black">Seva</span>
                        </span> </h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-headingColor">
                                    Deep Industry Expertise:
                                </div>
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                With extensive experience in Microsoft 365 and Dynamics 365 Finance, we bring unparalleled expertise to every project. Our deep understanding of these platforms enables us to deliver tailored solutions that optimize business processes, enhance financial management, and drive operational efficiency. Whether it’s streamlining workflows, implementing advanced financial analytics, or integrating with existing systems, we ensure every solution is designed to meet your specific industry needs and deliver measurable outcomes.
                                </p>
                                
                            
                            </div>
                            {/* grid 2 */}
                        
                          
                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full">
                                    <img src="https://media.licdn.com/dms/image/v2/D4E12AQE3qf_hny9JQA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695732813287?e=2147483647&v=beta&t=TnDz4Z3QZQtdQycASA8XcYjLtPncoZAyOVMo0haWybU"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* section 2 */}

    <div className="mt-[50px] mb-20">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* grid 1 */}


                <div className="flex flex-col space-y-6 w-full">
                    <div className="flex justify-center md:justify-start w-full h-full">
                        <img
                       src="data:image/png;base64,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"                     
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* grid 2 */}
                <div className="flex flex-col space-y-6 w-full justify-center">
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                        Certified Professionals:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                        Our team consists of certified Microsoft 365 and Dynamics 365 Finance experts, committed to delivering exceptional results. With in-depth knowledge of ERP systems and Microsoft technologies, our specialists ensure seamless implementations, optimized workflows, and innovative solutions tailored to your business requirements.
                    </p>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* section 3 */}
        <div className="mt-[50px] mb-20">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* grid 1 */}
                
                <div className="flex flex-col space-y-6 w-full justify-center">
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                        Customer-Centric Approach:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                        We craft and implement tailored Microsoft 365 and Dynamics 365 Finance solutions that address your unique business challenges, ensuring measurable outcomes and long-term success. By focusing on your specific needs, we deliver value-driven results that align with your goals.
                    </p>  
                </div>
                {/* grid 2 */}
                
                <div className="flex flex-col space-y-6 w-full">
                    <div className="flex justify-center md:justify-start w-full h-full">
                        <img
                        src="https://www.confiz.com/wp-content/uploads/2023/10/upgradation.png"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className="mt-[50px] mb-20">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* grid 1 */}
                <div className="flex flex-col space-y-6 w-full">
                    <div className="flex justify-center md:justify-start w-full h-full">
                        <img
                        src="https://www.bespokesoftwaredevelopment.com/blog/wp-content/uploads/2022/08/our-process2-905x509.jpg"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div> 
                {/* grid 2 */}
                <div className="flex flex-col space-y-6 w-full justify-center">
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                        Agile Delivery Methodology:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                        Harness the power of agile principles to achieve faster, smoother implementations with minimal downtime. Our iterative approach ensures flexibility, continuous collaboration, and rapid delivery of value, enabling seamless transitions while maintaining business continuity.
                   </p>  
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="mt-[50px] mb-20">
        <div className="relative">
          <div className="w-full">
            <div className="w-full lg:mx-auto max-w-[1400px] pb-12 px-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* grid 1 */}
                
                <div className="flex flex-col space-y-6 w-full justify-center">
                    <div className="lg:text-5xl text-4xl text-center md:text-start font-semibold text-headingColor">
                        End-to-End Support:
                    </div>
                    <p className="md:text-lg text-base text-sideHeading md:text-start text-center md:ml-2">
                        From initial consultation to seamless implementation and ongoing maintenance, we stand as your trusted partner at every stage. Our comprehensive support ensures your Microsoft 365 and Dynamics 365 Finance solutions operate flawlessly, empowering your business for long-term success.
                    </p>  
                </div>
                {/* grid 2 */}
                
                <div className="flex flex-col space-y-6 w-full">
                    <div className="flex justify-center md:justify-start w-full h-full">
                        <img
                        src="data:image/jpeg;base64,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"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
    <div className="flex flex-col gap-4 space-y-8 text-center">
      <h1 className="lg:text-5xl text-4xl font-semibold text-mainColor">
        Transform Your Operations with Confidence
      </h1>
      <p className="md:text-lg text-base text-sideHeading">
        At{" "}
        <span className="lg:text-2xl text-xl font-semibold text-mainColor">
          AX <span className="text-black">Seva</span>
        </span>
        , we understand the challenges businesses face in adopting modern ERP
        systems. That’s why we provide personalized solutions and hands-on
        support to ensure a smooth transition and long-term success.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {/* Left Grid */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-6">
          <button className="bg-mainColor text-white px-10 py-4 rounded shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#004c8b]">
            <Link to="/contact">Get Started Today</Link>
          </button>
          <p className="md:text-lg text-base text-sideHeading">
            Unlock your business’s full potential with Microsoft Dynamics 365
            and ERP solutions. Reach out to us today to schedule a consultation
            and explore how our expertise can help you achieve your goals and
            drive success.
          </p>
        </div>
        {/* Right Grid */}
        <div className="flex flex-col justify-center items-center py-10 space-y-6 w-full">
          <h2 className="text-mainColor font-bold text-2xl">Join Our Family</h2>
          <div className="w-full flex flex-col items-center space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="w-2/3 rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-2 transition-all duration-300 focus:border-mainColor"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-2/3 rounded bg-[#f1f0f4] py-3 px-6 text-base text-[#393053] outline-none focus:bg-white focus:border-2 transition-all duration-300 focus:border-mainColor"
            />
            <button className="bg-mainColor text-white px-10 py-4 rounded shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-[#004c8b]">
              <Link to="/contact">Join</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    </div>

    <ContactUsButton />
    <Footer />
    </>
  )
}

export default Benefits