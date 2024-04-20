"use client";

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Modal = ({ isOpen, onClose }) => {


const [First_Name, setFirstName]=useState('');
const [Last_Name, setLastName]=useState('');
const [Email, setEmail]=useState('');
const [Company, setCompany]=useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const data={
            First_Name:First_Name,
            Last_Name:Last_Name,
            Email:Email,
            Company:Company
        };
        axios.post('https://sheet.best/api/sheets/19f5afb4-e2a2-4e91-82e4-9f49c0ce962d',data).then((response)=>{
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
    <React.Fragment>
    <div className={`fixed inset-0 bg-gray-500 bg-opacity-50 ${isOpen ? '' : 'hidden'} flex items-center justify-center`}>
    <div className="lg:w-2/5 w-5/6">
      <div className="bg-[#FA6312] p-4 flex justify-end">
        <button className="text-xl text-white font-bold" onClick={onClose}>X</button>
      </div>
      <div className="bg-white p-4 lg:py-16 lg:px-20 py-8">
      <form className="form-group" onSubmit={handleSubmit} >
        <div className="flex flex-wrap -m-2 lg:mb-10 mb-2">
            <div className="p-2 w-1/2 mb-5">
                <div className="relative">
                    <input type="text" id="First_Name" name="First_Name" onChange={(e)=>setFirstName(e.target.value)} value={First_Name} required placeholder="FIRST NAME" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-1/2 mb-5">
                <div className="relative">
                    <input type="text" id="Last_Name" name="Last_Name" onChange={(e)=>setLastName(e.target.value)} value={Last_Name} required placeholder="LAST NAME" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-full mb-5">
                <div className="relative">
                    <input type="email" id="Email" name="Email" onChange={(e)=>setEmail(e.target.value)} value={Email} required placeholder="EMAIL" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                    <input type="text" id="Company" name="Company" onChange={(e)=>setCompany(e.target.value)} value={Company} required placeholder="COMPANY/ORGANIZATION" class="w-full rounded border border-[#FA6312] focus:bg-white focus:ring-1 focus:ring-[#FA6312] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
            </div>
        </div>
        <div className="flex justify-center">
            <button type="submit" onClick={handleSuccessClick} className="text-white font-medium rounded py-4 px-12 leading-6 hover:bg-white hover:text-[#FA6312] bg-[#FA6312] border-[#FA6312] border flex">SUBMIT</button>
        </div>
      </form>
      </div>
    </div>


  </div>
  </React.Fragment>
  );
};

export default Modal;