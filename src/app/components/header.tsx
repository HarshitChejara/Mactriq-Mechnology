"use client";

import Link from "next/link";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import React, { useState } from 'react';
import Modal from '../components/modal';

const Header = () => {



  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
      <Popover className={"sticky z-50 mx-auto flex items-center lg:px-12 px-6 py-2 h-24 shadow-md"}>
        <div className="flex inline-flex">
        <Link href="/"><Image src="/logo.png" alt="logo" width="50" height="50"/></Link>
        <Link href="/"><Image src="/Mactriq.png" className="mt-5 ml-3" alt="mactriq" width="180" height="50"/></Link>
        </div>

        {/* <div className="bg-transparent md:ml-auto mr-10">
          <div className="hidden sm:flex text-gray-900 font-bold items-center justify-center lg:gap-12 gap-4">
            <Link href="#home">HOME</Link>
            <Link href="#about_us">ABOUT US</Link>
            <Link href="#our_services">OUR SERVICES</Link>
            <Link href="#our_products">OUR PRODUCTS</Link>
          </div>
        </div> */}

        <div className="bg-transparent md:ml-auto mr-5">
          <div className="hidden sm:flex text-gray-900 font-bold items-center justify-center">
            <Link href="#home" className="hover:bg-[#FA6312] hover:text-white lg:py-6 py-6 lg:px-7 px-4">HOME</Link>
            <Link href="#about_us" className="hover:bg-[#FA6312] hover:text-white lg:py-6 py-6 lg:px-7 px-4">ABOUT US</Link>
            <Link href="#our_services" className="hover:bg-[#FA6312] hover:text-white lg:py-6 py-6 lg:px-7 px-4">OUR SERVICES</Link>
            <Link href="#our_products" className="hover:bg-[#FA6312] hover:text-white lg:py-6 py-6 lg:px-7 px-4">OUR PRODUCTS</Link>
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30"/>

        <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">

        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opaity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex item-center justify-between">
                {/* <Link href="/"><h1 className="text-black font-bold text-xl">The Accountant AI</h1></Link> */}
                <Link href="/"><Image src="/logo.png" alt="logo" width="50" height="50"/></Link>
                <Link href="/"><Image src="/Mactriq.png" className="mt-5" alt="mactriq" width="180" height="50"/></Link>
                <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                </div>
              </div>

              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link className="text-black focus:outline-none px-2 font-bold" href="#home">HOME</Link>
                  <Link className="text-black focus:outline-none px-2 font-bold" href="#about_us">ABOUT US</Link>
                  <Link className="text-black focus:outline-none px-2 font-bold" href="#our_services">OUR SERVICES</Link>
                  <Link className="text-black focus:outline-none px-2 font-bold" href="#our_products">OUR PRODUCTS</Link>
                </nav>
              </div>
              <div className="mt-6 flex-col item-center gap-2">
              <button onClick={openModal} type="button" className="text-white rounded py-1 px-2 leading-6 hover:bg-white hover:text-[#FA6312] bg-[#FA6312] border-[#FA6312] border flex">SIGN UP</button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </Popover.Panel>
        </Transition>

        <div className="hidden sm:block lg:px-5 px-1 py-7 h-24 ">
        <button onClick={openModal} type="button" className="text-white rounded py-1 px-2 leading-6 hover:bg-white hover:text-[#FA6312] bg-[#FA6312] border-[#FA6312] border flex">SIGN UP</button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </Popover>
  );
};
export default Header;