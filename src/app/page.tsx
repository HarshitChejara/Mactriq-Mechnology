"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <React.Fragment>
      <section className="text-gray-600 body-font" id="home">
        <div className="container mx-auto flex px-5 lg:px-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="font-bold text-gray-900 text-lg">WELCOME TO MACTRIQ TECHNOLOGIES</p>
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900 mt-10 tracking-widest">Empowering Growth Through Tailored Solutions And Technological Excellence</h1>
            <span className="inline-block h-2 w-28 rounded bg-[#FA6312] mb-14"></span>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#FA6312] hover:bg-white hover:text-[#FA6312] border border-[#FA6312] py-5 px-8 focus:outline-none rounded text-sm font-medium">BOOK A CALL</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded" width={500} height={500} alt="hero" src="/hero.png"/>
          </div>
        </div>
      </section>





      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-3/4 flex-col sm:flex-row sm:items-center items-start mx-auto shadow-xl p-10">
            <p className="flex-grow text-xl title-font text-black">We aim to empower through advanced technology, unveil untapped potential by introducing tailored resources and expert consultancy. Seamlessly bridge the gap between legacy systems and heightened profitability, ensuring optimal ROI with minimal effort for SMEs.</p>
            <h1 className="text-right text-black font-bold text-xl mt-5">WE ARE MACTRIQ TECHNOLOGIES! </h1>
          </div>
        </div>
      </section>




      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 lg:px-20 py-24 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" width={700} height={600} alt="Business_decisions_bro" src="/Business_decisions_bro.png"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-black">
            <p className="font-bold text-gray-500 text-lg">WHY MACTRIQ TECHNOLOGIES</p>
            <h1 className="title-font sm:text-4xl text-3xl py-4 font-medium text-gray-900 tracking-wide">BLUEPRINT FOR YOUR SEAMLESS BUSINESS ADVANCEMENT JOURNEY</h1>
            <p className="py-7 leading-relaxed">The current market landscape is undergoing a seismic shift, and the digital space has become more user oriented, greatly reducing time and monetary costs for a business owner to succeed. </p>
            <p className="mb-8 leading-relaxed">In a dynamic digital landscape, Mactriq offers unparalleled expertise, crafting bespoke ERP and CRM solutions. Our commitment to scalability, integration, data security, and proactive support ensures optimal performance and resilience. We provide a transformative advantage for sustained business growth amid evolving challenges.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-[#53AFBE] bg-white border border-[#53AFBE] py-3 px-6 focus:outline-none hover:bg-[#53AFBE] hover:text-white rounded text-sm font-medium">TRY MACTRIQ</button>
            </div>
          </div>
        </div>
      </section>





      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col">
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-bold">EXPLORE OUR SERVICES</p>
            <h1 className="sm:text-4xl text-2xl font-bold title-font py-2 text-gray-900 tracking-widest">OUR SERVICES</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-black h-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4">
                  <Image width={100} height={100} alt="AI_modal" src="/AI_modal.png"/>
                </div>
                <h2 className="text-xl text-black font-bold title-font mb-2 underline tracking-wide">AI Model Development</h2>
                <p className="leading-relaxed text-base">We excel in precision AI & ML solutions, offering tailored models, scalable implementations, comprehensive expertise, and strategic insights across finance, sales, automation, ERP, CRM, accounting, inventory, and manufacturing domains.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-black h-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4">
                  <Image width={100} height={100} alt="custom" src="/custom.png"/>
                </div>
                <h2 className="text-xl text-black font-bold title-font mb-2 underline tracking-wide">Custom Software Development</h2>
                <p className="leading-relaxed text-base">Mactriq delivers tailored ERP, CRM, accounting, inventory, and manufacturing solutions with scalable architecture, integration, security, analytics, and proactive support for optimal business performance and growth.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-black h-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4">
                  <Image width={100} height={100} alt="IT_consult" src="/IT_consult.png"/>
                </div>
                <h2 className="text-xl text-black font-bold title-font mb-2 underline tracking-wide">IT Consultation</h2>
                <p className="leading-relaxed text-base">We offer tailored tech readiness training, featuring expert-led webinars for firsthand insights. Our interactive and flexible modules deliver cutting-edge tech insights, ensuring businesses adapt to evolving IT trends effectively.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-black h-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4">
                  <Image width={100} height={100} alt="chatbot" src="/chatbot.png"/>
                </div>
                <h2 className="text-xl text-black font-bold title-font mb-2 underline tracking-wide">Chatbot Development</h2>
                <p className="leading-relaxed text-base">We provide website chatbots offering intelligent, multilingual engagement, seamless integration, and advanced analytics. Additionally, our WhatsApp chatbots deliver dynamic, multi-functional interactions with rich media integration and secure data handling.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-black h-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4">
                  <Image width={100} height={100} alt="website" src="/website.png"/>
                </div>
                <h2 className="text-xl text-black font-bold title-font mb-2 underline tracking-wide">Website Development</h2>
                <p className="leading-relaxed text-base">We deliver tailored websites with future-ready designs, ensuring seamless user experiences. Utilizing cutting-edge technology, we provide personalized support and static websites for simplicity, elegance, and impact. </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 text-black h-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4">
                  <Image width={100} height={100} alt="development" src="/development.png"/>
                </div>
                <h2 className="text-xl text-black font-bold title-font mb-2 underline tracking-wide">App Development</h2>
                <p className="leading-relaxed text-base">We craft tailored Android apps with cross-platform expertise, emphasizing user-centric design and scalable architecture. For iOS, we excel in precision, design excellence, optimized performance, swift development, and scalability.</p>
              </div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto ">
            <div className="lg:w-3/4 flex-col sm:flex-row sm:items-center items-start mx-auto shadow-xl py-16 px-5">
              <h1 className="flex-grow text-center lg:text-5xl text-2xl title-font font-bold text-black tracking-wide">INNOVATIVE PRODUCTS TAILORED FOR YOUR SUCCESS</h1>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-[#FA6312] py-5 px-8 focus:outline-none border border-[#FA6312] hover:bg-white hover:text-[#FA6312] rounded text-sm font-medium">OUR PRODUCTS</button>
          </div>
        </div>
      </section>








      <section className="text-gray-600 body-font">
        <div className="lg:px-20">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" width={700} height={600} alt="ledgepay" src="/ledgepay.png"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-black">
            <h1 className="title-font sm:text-4xl text-3xl py-4 font-medium text-gray-900 tracking-wide">ACCOUNTING- LEDGEPAY</h1>
            <p className="py-7 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-[#0CB14B] bg-white border border-[#0CB14B] py-3 px-6 focus:outline-none hover:bg-[#0CB14B] hover:text-white rounded text-sm font-medium">TRY LEDGEPAY</button>
            </div>
          </div>
        </div>


        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-black">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 tracking-wide">CRM - Samachar App</h1>
            <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-[#FA6312] bg-white border border-[#FA6312] py-3 px-6 focus:outline-none hover:bg-[#FA6312] hover:text-white rounded text-sm font-medium">TRY SAMACHAAR APP</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image className="object-cover object-center rounded" width={700} height={600} alt="crm_app" src="/crm_app.png"/>
          </div>
        </div>


        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" width={700} height={600} alt="commixco" src="/commixco.png"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-black">
            <h1 className="title-font sm:text-4xl text-3xl py-4 font-medium text-gray-900 tracking-wide">Logistics Commixco</h1>
            <p className="py-7 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-[#33C5F0] bg-white border border-[#33C5F0] py-3 px-6 focus:outline-none hover:bg-[#33C5F0] hover:text-white rounded text-sm font-medium">TRY LOGISTICS COMMIXCO</button>
            </div>
          </div>
        </div>


        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-black">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 tracking-wide">Payroll & HR : Sanchar App</h1>
            <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-[#0CB14B] bg-white border border-[#0CB14B] py-3 px-6 focus:outline-none hover:bg-[#0CB14B] hover:text-white rounded text-sm font-medium">TRY SAMACHAAR APP</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image className="object-cover object-center rounded" width={700} height={600} alt="sanchar_app" src="/sanchar_app.png"/>
          </div>
        </div>


        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" md:w-1/2 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" width={700} height={600} alt="whatsapp" src="/whatsapp.png"/>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-black">
            <h1 className="title-font sm:text-4xl text-3xl py-4 font-medium text-gray-900 tracking-wide">WhatsApp Chatbot : ReplyKaro</h1>
            <p className="py-7 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className="mb-8 leading-relaxed">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-[#FA6312] bg-white border border-[#FA6312] py-3 px-6 focus:outline-none hover:bg-[#FA6312] hover:text-white rounded text-sm font-medium">TRY REPLYKARO</button>
            </div>
          </div>
        </div>


        </div>
        <div className="container px-5 py-20 mx-auto ">
          <div className="lg:w-3/4 text-center flex-col sm:flex-row sm:items-center items-start mx-auto shadow-xl py-16 px-5">
            <h6 className="font-bold text-sm text-gray-500 mb-4">INSIGHTFUL BLOGS</h6>
            <h1 className="flex-grow lg:text-5xl text-2xl title-font font-bold text-black tracking-wide">EXPLORE OUR BLOG FOR EXPERT PERSPECTIVES AND INDUSTRY TRENDS.</h1>
          </div>
          <button className="flex mx-auto mt-16 text-[#0CB14B] bg-white border border-[#0CB14B] py-5 px-14 focus:outline-none hover:bg-[#0CB14B] hover:text-white rounded text-sm font-medium">BLOGS</button>
        </div>
      </section>







      <section className="text-gray-600 body-font">
        <div className="container px-5 lg:px-16 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-12 md:w-1/2">
              <div className="h-full border-2 border-gray-200 overflow-hidden">
                <Image className="object-cover object-center" width={620} height={300} src="/background.png" alt="background"/>
                <div className="p-6 bg-[#D9D9D9]">
                  <h1 className="title-font font-bold text-gray-600 mb-3">INSIGHTFUL BLOGS</h1>
                </div>
              </div>
            </div>
            <div className="p-12 md:w-1/2">
              <div className="h-full border-2 border-gray-200 overflow-hidden">
                <Image className="object-cover object-center" width={620} height={300} src="/background.png" alt="background"/>
                <div className="p-6 bg-[#D9D9D9]">
                  <h1 className="title-font font-bold text-gray-600 mb-3">INSIGHTFUL BLOGS</h1>
                </div>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-[#0CB14B] border border-[#0CB14B] py-5 px-14 focus:outline-none hover:bg-white hover:text-[#0CB14B] rounded text-sm font-medium">LOAD MORE</button>
        </div>
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-3/4 text-center flex-col sm:flex-row sm:items-center items-start mx-auto shadow-xl py-16 px-5">
            <h1 className="flex-grow lg:text-5xl text-2xl title-font font-bold text-black">UNVEILING TRIUMPHS: THE HEARTFELT STORIES OF OUR VALUED CLIENTS.</h1>
          </div>
          <button className="flex mx-auto mt-16 text-[#33C5F0] bg-white border border-[#33C5F0] py-5 px-14 focus:outline-none hover:bg-[#33C5F0] hover:text-white rounded text-sm font-medium">CLIENT STORIES</button>
        </div>
      </section>







      <section className="text-gray-600 body-font">
        <div className="container px-5 lg:px-20 py-24 lg:mb-20 mx-auto">
          <div className="flex flex-wrap -m-4">

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
                <p className="w-full px-10 py-24">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                <div className="p-6 bg-[#F3EFEF]">
                  <a className="inline-flex items-center">
                    <Image alt="blog" src="/round.png" width={200} height={200} className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-bold text-black">JOHN DE</span>
                      <span className="text-gray-400 text-sm font-bold tracking-widest mt-0.5">ART DIRECTOR</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
              <p className="w-full px-10 py-24">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                <div className="p-6 bg-[#F3EFEF]">
                  <a className="inline-flex items-center">
                    <Image alt="blog" src="/round.png" width={200} height={200} className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-bold text-black">JOHN DE</span>
                      <span className="text-gray-400 text-sm font-bold tracking-widest mt-0.5">ART DIRECTOR</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden">
              <p className="w-full px-10 py-24">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                <div className="p-6 bg-[#F3EFEF]">
                  <a className="inline-flex items-center">
                    <Image alt="blog" src="/round.png" width={200} height={200} className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-bold text-black">JOHN DE</span>
                      <span className="text-gray-400 text-sm font-bold tracking-widest mt-0.5">ART DIRECTOR</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-[#33C5F0] border border-[#33C5F0] py-5 px-14 focus:outline-none hover:bg-white hover:text-[#33C5F0] rounded text-sm font-medium">LOAD MORE</button>
        </div>
        <div className="container px-5 mx-auto ">
          <div className="bg-[#FA6312] text-center flex-col sm:flex-row sm:items-center items-start mx-auto shadow-xl lg:px-20 px-12">
            <h1 className="bg-white py-5">&nbsp;</h1>
            <div className="py-8">
              <h1 className="flex-grow lg:text-5xl text-2xl title-font font-bold text-white">EMPOWERING ENTERPRISES, ENABLING EXCELLENCE - MACTRIQ AT YOUR SERVICE.</h1>
              <button className="flex mx-auto mt-10 text-[#1B1717] bg-white border-[#1B1717]white py-5 px-14 focus:outline-none hover:bg-[#1B1717] hover:text-white rounded text-sm font-medium">CONTACT US</button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
