import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


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
                {/* <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} className="h-8 w-8"/></a>
                <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faSquareTwitter} className="h-8 w-8"/></a>
                <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} className="h-8 w-8"/></a>
                <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="h-8 w-8"/></a> */}
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
                {/* <li className="text-sm"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>Homepage</a></li>
                <li className="text-sm mt-4"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>About Us</a></li>
                <li className="text-sm mt-4"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>Services</a></li>
                <li className="text-sm mt-4"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>Project</a></li> */}
                </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-2xl mb-4">&nbsp;</h2>
                <nav className="list-none mb-10">
                {/* <li className="text-sm"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>Homepage</a></li>
                <li className="text-sm mt-4"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>About Us</a></li>
                <li className="text-sm mt-4"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>Services</a></li>
                <li className="text-sm mt-4"><a href=""><FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 mr-1"/>Project</a></li> */}
                </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-bold text-2xl mb-4">CONTACT US</h2>
                <nav className="list-none mb-10">
                {/* <li className="text-sm"><a href=""><FontAwesomeIcon icon={faLocationDot} className="h-4 w-4 mr-1"/>Location of the company’s office</a></li>
                <li className="text-sm mt-4"><a href=""><FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 mr-1"/>Hello@XYZ.com</a></li> */}
                <li className="text-sm mt-4">
                    <div className="relative">
                        <input type="email" name="email" id="email" placeholder="Email Address" className="p-4 w-full border-b-4 border-gray-500"/>
                        {/* <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 absolute top-4 right-4 text-gray-500"/> */}
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