"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Footer()
{
    return(
        <React.Fragment>
        <footer className="bg-[#EEEDED] body-font">
        <div className="container text-[#000000] px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
                <span className="font-bold text-2xl">NEED HELP?</span>
            </a>
            <p className="mt-7 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="md:flex gap-3 mt-8">
                <a href="https://www.facebook.com/" target="_blank">
                    {/* <FontAwesomeIcon icon={faSquareFacebook} className="h-8 w-8"/> */}
                    <Image className="h-7 w-7" width={100} height={100} alt="facebook" src="/facebook.png"/>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 24 24">
                        <path d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z"></path>
                    </svg> */}
                </a>
                <a href="https://twitter.com/" target="_blank">
                    {/* <FontAwesomeIcon icon={faSquareTwitter} className="h-8 w-8"/> */}
                    <Image className="h-7 w-7" width={100} height={100} alt="twitter" src="/twitter.png"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    {/* <FontAwesomeIcon icon={faSquareInstagram} className="h-8 w-8"/> */}
                    <Image className="h-7 w-7" width={100} height={100} alt="insta" src="/insta.png"/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                    {/* <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8"/> */}
                    <Image className="h-7 w-7" width={100} height={100} alt="linkedin" src="/linkedin.png"/>
                </a>
            </div>
            <div className="flex md:flex mt-5">
                <Link href="/"><Image src="/logo.png" alt="logo" width="50" height="50"/></Link>
                <Link href="/"><Image src="/Mactriq.png" className="mt-auto mt-5 ml-3" alt="mactriq" width="180" height="50"/></Link>
            </div>
            </div>

            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-2xl mb-4">MORE INFORMATION</h2>
                <nav className="list-none mb-10">
                <li className="text-sm"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    Homepage</a>
                </li>
                <li className="text-sm mt-4"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    About Us</a>
                </li>
                <li className="text-sm mt-4"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    Services</a>
                </li>
                <li className="text-sm mt-4"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    Project</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-2xl mb-4">&nbsp;</h2>
                <nav className="list-none mb-10">
                <li className="text-sm"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    Homepage</a>
                </li>
                <li className="text-sm mt-4"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    About Us</a>
                </li>
                <li className="text-sm mt-4"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    Services</a>
                </li>
                <li className="text-sm mt-4"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                    Project</a>
                </li>
                </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-2xl mb-4">CONTACT US</h2>
                <nav className="list-none mb-10">
                <li className="text-sm"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                    </svg>
                    Location of the company’s office</a>
                </li>
                <li className="text-sm mt-4"><a href="" className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                    </svg>
                    Hello@XYZ.com</a>
                </li>
                <li className="text-sm mt-4">
                    <div className="relative">
                        <input type="email" name="email" id="email" placeholder="Email Address" className="p-4 w-full border-b-4 border-gray-500"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="absolute top-4 right-4 text-gray-500" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                        </svg>
                    </div>
                </li>
                </nav>
            </div>
            </div>
        </div>

        <div className="container text-[#000000] mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row border-t border-gray-500">
            <div className="text-sm text-center sm:text-left font-medium">
                <a>ALLRIGHT RESERVED - MACTRIQ TECHNOLOGIES</a>
            </div>
            <div className="bg-transparent md:ml-auto">
                <div className="hidden sm:flex text-sm font-medium items-center justify-center lg:gap-10 gap-4">
                    <Link href="/">DISCLAIMER</Link>
                    <Link href="">PRIVACY POLICY</Link>
                    <Link href="">TERM OF USE</Link>
                </div>
            </div>
        </div>
        </footer>
        </React.Fragment>
    );
}