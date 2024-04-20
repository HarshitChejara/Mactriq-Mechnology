"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Modal = ({ isOpen, onClose }) => {


const [first_name, setFirstName]=useState('');
const [last_name, setLastName]=useState('');
const [email, setEmail]=useState('');
const [company, setCompany]=useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const data={
            First_Name:first_name,
            Last_Name:last_name,
            Email:email,
            Company:company
        };
        axios.post('https://sheet.best/api/sheets/61fb6db0-5339-4006-9609-0bb9c495bd57',data).then((response)=>{
            // console.log(response);
            setFirstName('');
            setLastName('');
            setEmail('');
            setCompany('');
        })
    }

    const handleSuccessClick = () => {
        Swal.fire('Success!', 'Your data has been submitted successfully.', 'success');
    }

  return (
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-50 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>
    <div className="lg:w-2/5 w-5/6">
      <div className="bg-[#FA6312] p-4 flex justify-end">
        <button className="text-xl text-white font-bold" onClick={onClose}>X</button>
      </div>
      <div className="bg-white p-4 lg:py-16 lg:px-20 py-8">
      <form onSubmit={handleSubmit} >
        <div className="flex flex-wrap -m-2 lg:mb-10 mb-2">
            <div className="p-2 w-1/2 mb-5">
                <div className="relative">
                    <input type="text" id="first_name" name="first_name" onChange={(e)=>setFirstName(e.target.value)} value={first_name} required placeholder="FIRST NAME" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-1/2 mb-5">
                <div className="relative">
                    <input type="text" id="last_name" name="last_name" onChange={(e)=>setLastName(e.target.value)} value={last_name} required placeholder="LAST NAME" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-full mb-5">
                <div className="relative">
                    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} required placeholder="EMAIL" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <input type="text" id="company" name="company" onChange={(e)=>setCompany(e.target.value)} value={company} required placeholder="COMPANY/ORGANIZATION" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <button type="button" onClick={handleSuccessClick} className="text-white font-medium rounded py-4 px-12 leading-6 hover:bg-white hover:text-[#FA6312] bg-[#FA6312] border-[#FA6312] border flex">SUBMIT</button>
        </div>
      </form>
      </div>
    </div>


  </div>
  );
};

export default Modal;