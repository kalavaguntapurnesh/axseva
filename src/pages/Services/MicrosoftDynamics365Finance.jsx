import React from 'react'
import Footer from '../../components/Footer';
import AboutLayout from "../../components/AboutLayout";
import ContactUsButton from '../../components/ContactUsButton';
import { Link } from 'react-router-dom';

const MicrosoftDynamics365Finance = () => {
    const services = [
        {
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwgyvXLsHUq7X0hqXA4lsLsZNgrICo6HqSaVKvir35BIsehOcBUR46DupjvAvNSDaCrs&usqp=CAU",
          title: "Cost-effective solution",
          description:
            "Give your sales, marketing, and service teams smart tools to improve customer relationships and boost growth. From AI-powered analytics to sales and marketing automation and customer journey to lead management, Dynamics 365 CRM helps your team surpass consumer expectations at every touchpoint. At AXSeva, we specialize in delivering tailored Dynamics 365 CRM solutions, enabling your teams to leverage advanced features seamlessly. Our expertise ensures that your organization not only meets but exceeds customer expectations, driving measurable business growth and fostering long-term relationships."
        },
        {
          imageUrl: "data:image/png;base64,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",
          title: "Finance",
          description:
            "Finance is an application designed to help businesses make smarter financial decisions. With real-time insights and intelligence, the Finance application enables businesses to evaluate their decisions, implement effective changes and gain the competitive edge they need. Even better, the system offers flexibility and scalability so that it can help businesses of all sizes and industries maximize profitability."
        },
        {
            imageUrl: "data:image/png;base64,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",
          title: "Supply Chain Management",
          description:
            "You want to implement the industry-best technology to optimize your supply chain at every stage of the product lifecycle. Microsoft Dynamics 365 Supply Chain Management is a leading operational management and cloud-based software. The innovative solution enables you to connect your business to the established Internet of Things (IoT) and leverage artificial intelligence (AI) and other smart tech functions, enhancing your production and agility and delivering actionable insights in real time."
       },
        {
            imageUrl: "data:image/png;base64,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",
          title: "Applications",
       
          description:
            "This application development program also provides ongoing enhancements, app security, DevOps, and reporting.",
        },
       
      ];

  return (
    <div>
        <AboutLayout/>

          {/* section 1 */}
        <div className='w-full   p-12 bg-[#f8f9fa]'>
            <div className='relative'>
                <div className='max-w-[1400px] mx-auto px-4 sm-px-6 py-[100px]'>
                    <div className='flex flex-col gap-4 space-y-8'>
                       
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                                    Microsoft Dynamics 365 Finance and Oparations
                                </div>                        
                            </div>
                            {/* grid 2 */}
                        
                          
                            <div className="flex flex-col space-y-6 w-full">
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                   Elevate your business performance with Microsoft Dynamics 365 Finance and Operations, a cutting-edge cloud-based ERP solution designed to streamline and automate critical business functions.
                                </p>
                                <div className="flex justify-center">
                                    <button className="relative  text-black font-bold text-2xl p-4 rounded-lg lg:w-2/4 w-3/4 mx-auto md:mx-0 border-4 border-black shadow-lg shadow-blue-500 transition-all duration-1000 hover:bg-mainColor hover:text-white hover:shadow-none">
                                        <Link to="/contact">Book a Consultation</Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* section 2 */}
        <div className='w-full  p-12 bg-[#f8f9fa]'>
            <div className='relative'>
                <div className='max-w-[1400px] mx-auto px-4 sm-px-6 '>
                    <div className='flex flex-col gap-4 space-y-8'>
                        <h1 className='lg:text-5xl text-4xl text-center font-bold text-mainColor'>Microsoft Dynamics 365 Finance and Oparations</h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                {/* <div className="lg:text-3xl text-2xl text-center md:text-start font-bold text-mainColor">
                                    Microsoft Dynamics 365 Finance and Oparations
                                </div> */}
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-headingColor">
                                    Enterprise Solutions from <span className='lg:text-5xl text-2xl md:text-start text-center font-semibold text-mainColor'>
                                    AX <span className="text-black">Seva</span> </span>
                                </div>
                                
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                    Elevate your business performance with Microsoft Dynamics 365 Finance and Operations, a cutting-edge cloud-based ERP solution designed to streamline and automate critical business functions. Empower your organization to optimize financial management, enhance supply chain efficiency, and drive seamless commerce operations. With built-in AI and real-time analytics, Microsoft Dynamics 365 enables smarter decision-making, scalability, and compliance with global standards, ensuring your business stays competitive in an ever-evolving marketplace.
                                </p>

                                <button className="bg-mainColor text-white p-4 rounded-full lg:w-1/4 w-3/4 mx-auto md:mx-0">
                                    <Link to="/contact">Contact Us</Link>
                                </button>
                                        
                            </div>
                            {/* grid 2 */}
                        
                          
                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full ">
                                    <img src="https://dynamicseip.com/wp-content/uploads/2020/12/original_picture_167.png"
                                        className="lg:w-full lg:h-full w-[80%] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        

        {/* section 3 */}

        <div className='w-full  p-12 bg-[#f8f9fa]'>
            <div className='relative'>
                <div className='max-w-[1400px] mx-auto px-4 sm-px-6 '>
                    <div className='flex flex-col gap-8 space-y-8'>
                        <h1 className='lg:text-5xl text-4xl text-center font-bold text-footerItem'>Microsoft Dynamics 365 Finance Capabilities</h1>
                        <p className="md:text-2xl text-base text-center  text-sideHeading">
                            Just a few of the capabilities offered by Dynamics 365 for Finance includes:
                        </p>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                                    Finance
                                </div>        
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                    Manage your financial processes seamlessly with Microsoft Dynamics 365 Finance, a centralized financial system designed to optimize and automate core accounting operations. This solution streamlines financial transactions, enhances compliance, and provides real-time insights to support strategic decision-making. Key features include advanced general ledger management, budget planning tools, customizable financial reporting, efficient credit and collections processes, and comprehensive cost accounting capabilities. With Dynamics 365 Finance, businesses can achieve greater operational efficiency and drive smarter financial outcomes.
                                </p>   
                            </div>

                            {/* grid 2 */}
                        
                    
                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full ">
                                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/image-1-2?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2249&hei=1261&qlt=100&fit=constrain"
                                        className="lg:w-full lg:h-full w-[80%] object-cover"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6">
                            {/* grid 1 */}

                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full ">
                                    <img src="https://www.beyondkey.com/blog/wp-content/uploads/2022/09/Microsoft-Dynamics-365-Supply-Chain-Management-Features.jpg"
                                        className="lg:w-full lg:h-full w-[80%] object-cover"
                                    />
                                </div>
                            </div>

                             {/* grid 2 */}
                        
                    
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                                    Supply chain
                                </div>        
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                    Gain end-to-end visibility and control over your supply chain with Microsoft Dynamics 365 Supply Chain Management. Connect sales, logistics, production, and warehousing seamlessly to create an integrated ecosystem. Enhance vendor collaboration using advanced purchase order management tools, maintain real-time inventory updates with intelligent control systems and valuation methods, and streamline warehouse operations with improved communication and automation. Leverage AI-powered demand forecasting and business intelligence to adapt to changing needs while tracking every shipment from origin to destination. With Dynamics 365 Supply Chain Management, optimize every stage of your supply chain for efficiency and agility.
                                </p>   
                            </div> 
                            
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                                    Cloud Services
                                </div>        
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                    Empower your IT department to drive efficiency and innovation with Microsoft 365 Cloud Services. From seamless collaboration tools to advanced lifecycle management, Microsoft 365 offers flexible deployment options tailored to your organization's needs. Enhance system agility while ensuring enterprise-grade security, compliance, and data integrity. With built-in AI capabilities and integration across apps like Teams, SharePoint, and OneDrive, your IT team can streamline operations, support a modern hybrid workforce, and scale effortlessly in a secure cloud environment. Microsoft 365 Cloud Services provide the foundation for digital transformation, keeping your organization connected and productive.
                                </p>   
                            </div>

                            {/* grid 2 */}
                        
                    
                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full ">
                                    <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2021/07/MicrosoftTeams-image-13.png"
                                        className="lg:w-full lg:h-full w-[80%] object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6">
                            
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full ">
                                    <img src="https://bravocg.com/wp-content/uploads/2022/07/OFFICE-365-1200x675.png"
                                        className="lg:w-full lg:h-full w-[80%] object-cover"
                                    />
                                </div>
                            </div>

                             {/* grid 2 */}
                        
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                                    Workspaces
                                </div>        
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                    Enable your employees to work smarter and faster with Microsoft Dynamics 365 Finance analytical workspaces. These comprehensive workspaces serve as centralized hubs, seamlessly connecting your team to the data, tools, and functions they need to excel in their roles. Equipped with customizable quick links, interactive dashboards, and rich visualizations, these workspaces offer real-time insights that drive informed decision-making. Designed for efficiency and flexibility, they empower your employees to streamline processes, enhance productivity, and deliver exceptional business outcomes.
                                </p>   
                            </div>     
                        </div>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                                    Cloud Services
                                </div>        
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                    Empower your IT department to drive efficiency and innovation with Microsoft 365 Cloud Services. From seamless collaboration tools to advanced lifecycle management, Microsoft 365 offers flexible deployment options tailored to your organization's needs. Enhance system agility while ensuring enterprise-grade security, compliance, and data integrity. With built-in AI capabilities and integration across apps like Teams, SharePoint, and OneDrive, your IT team can streamline operations, support a modern hybrid workforce, and scale effortlessly in a secure cloud environment. Microsoft 365 Cloud Services provide the foundation for digital transformation, keeping your organization connected and productive.
                                </p>   
                            </div>

                            {/* grid 2 */}
                        
                    
                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full ">
                                    <img src="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/sites/2/2021/07/MicrosoftTeams-image-13.png"
                                        className="lg:w-full lg:h-full w-[80%] object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" grid md:grid-cols-2 grid-cols-1 gap-6">
                            
                            {/* grid 1 */}
                            <div className="flex flex-col space-y-6 w-full">
                                <div className="flex justify-center md:justify-start w-full h-full ">
                                    <img src="https://cdn-bbaid.nitrocdn.com/wYFmIWkSNKpdInpiRfVoEqTErZtkFjBo/assets/images/optimized/rev-4de3647/www.rishabhsoft.com/wp-content/uploads/2019/03/Microsoft-Dynamics-365-For-Retail.jpg"
                                        className="lg:w-full lg:h-full w-[80%] object-cover"
                                    />
                                </div>
                            </div>

                             {/* grid 2 */}
                        
                            <div className="flex flex-col space-y-8 w-full justify-center">
                                <div className="lg:text-5xl text-4xl text-center md:text-start font-bold text-sideHeading">
                                    Retail
                                </div>        
                                <p className="md:text-lg text-base text-center md:text-start text-sideHeading">
                                    Enable your employees to work smarter and faster with Microsoft Dynamics 365 Finance analytical workspaces. These comprehensive workspaces serve as centralized hubs, seamlessly connecting your team to the data, tools, and functions they need to excel in their roles. Equipped with customizable quick links, interactive dashboards, and rich visualizations, these workspaces offer real-time insights that drive informed decision-making. Designed for efficiency and flexibility, they empower your employees to streamline processes, enhance productivity, and deliver exceptional business outcomes.
                                </p>   
                            </div>     
                        </div>


                    </div>
                </div>
            </div>
        </div>  

        {/* section 4   */}

        <div className='w-full  p-12 bg-[#f8f9fa]'>
            <div className='relative'>
                <div className='max-w-[1400px] mx-auto px-4 sm-px-6 '>
                    <div className='flex flex-col gap-4 space-y-8'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='lg:text-5xl text-4xl text-start  text-footerItem'>Impact of</h1>
                            <h1 className='lg:text-5xl text-4xl text-start font-bold text-footerItem'>Microsoft Dynamics 365 Finance and Oparations</h1>
                        </div>
                        <div className="p-6 bg-gray-100">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                            <div
                                className="p-6 border flex flex-col space-y-4 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-4 hover:bg-sky-200 bg-transparent"
                                >
                                <div className="flex justify-center items-center  rounded-full">
                                    {/* <IoBarChart size={32} className="text-mainColor" /> */}
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tBY8oUxuvTnIVsTwvlMr56bzT7yr16V_Bg&s"
                                    className="w-[60px] "
                                />
                                </div>
                                <h3 className="text-xl font-bold text-center">Cost-effective solution</h3>
                                <p className="text-gray-700 text-center">Dynamics 365 Finance and Operations streamlines operations by eliminating unnecessary resources and reducing costs through digitalization. It simplifies customization and integration, saving on expenses and lowering training costs.</p>
                            </div>
                            
                            <div
                                className="p-6 border flex flex-col space-y-4 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-4 hover:bg-sky-200 bg-transparent"
                                >
                                <div className="flex justify-center items-center  rounded-full">
                                    {/* <IoBarChart size={32} className="text-mainColor" /> */}
                                    <img src="https://cdn-icons-png.flaticon.com/512/2861/2861472.png"
                                    className="w-[60px] "
                                />
                                </div>
                                <h3 className="text-xl font-bold text-center">Improved data security & accessibility</h3>
                                <p className="text-gray-700 text-center">Microsoft Dynamics 365 Finance and Operations, hosted on the Azure cloud platform, delivers unmatched flexibility and security for your business. With robust data protection, built-in disaster recovery, and 24/7 support, it ensures business continuity and peace of mind. Its cross-platform UI support enables users to access the system seamlessly from any device, anywhere in the world. Additionally, the platform leverages Azure's scalability and performance to adapt to your growing business needs, empowering your organization to drive efficiency and innovation in a secure, cloud-based environment.</p>
                            </div>

                            <div
                                className="p-6 border flex flex-col space-y-4 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-4 hover:bg-sky-200 bg-transparent"
                                >
                                <div className="flex justify-center items-center  rounded-full">
                                    {/* <IoBarChart size={32} className="text-mainColor" /> */}
                                    <img src="data:image/png;base64,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"
                                    className="w-[60px] "
                                />
                                </div>
                                <h3 className="text-xl font-bold text-center">Enhanced visibility and control</h3>
                                <p className="text-gray-700 text-center">Microsoft Dynamics 365 Finance and Operations delivers powerful data-driven insights by unifying intelligence across key business functions and supply chain touchpoints. This enables leaders to make informed decisions, enhance productivity, and access real-time financial and operational data. With its robust analytics and reporting capabilities, the platform empowers businesses to drive efficiency, optimize performance, and maintain a competitive edge in a dynamic marketplace.</p>
                            </div>

                            <div
                                className="p-6 border flex flex-col space-y-4 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-4 hover:bg-sky-200 bg-transparent"
                                >
                                <div className="flex justify-center items-center  rounded-full">
                                    {/* <IoBarChart size={32} className="text-mainColor" /> */}
                                    <img src="data:image/png;base64,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"
                                    className="w-[60px] "
                                />
                                </div>
                                <h3 className="text-xl font-bold text-center">Optimized business operations</h3>
                                <p className="text-gray-700 text-center">
                                Microsoft Dynamics 365’s cloud-based ERP solution is tailored for businesses across various industries, providing flexible, customizable applications to automate processes and enhance productivity. By seamlessly integrating data and workflows, it empowers organizations to respond swiftly to evolving customer needs, streamline operations, and drive business growth. With its scalability and adaptability, Dynamics 365 enables businesses to stay competitive and efficient in an ever-changing market landscape.</p>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <ContactUsButton/>
        <Footer/>
    </div>
  )
}

export default MicrosoftDynamics365Finance