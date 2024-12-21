import React from 'react'
import Navbar from './Navbar'
import About from './About'
import read from '../images/read.jpg'
import { useNavigate } from 'react-router-dom'
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
export default function Home() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/summarize/chat/1');
  }
  return (
    <>
      <div className="relative w-full h-full bg-[#030513] scrollbar-hide">
        <Navbar />
        <div className="h-full w-full  ">
          <div className="flex flex-col space-y-20 justify-center  items-center h-[92.5%] w-full absolute top-[3.5rem]  bg-gradient-to-r from-[#030513] from-10% via-transparent via-100%   to-[#030513] top-90% ">
            <h1 className="text-white text-5xl font-bold font-custom2">Revolutionize your reading journey with EasyRead</h1>
            <p className="text-white text-xl font-semibold font-custom2">Your ultimate tool for quick and efficient reading</p>
            <div className="flex flex-col space-y-5 items-center">
              <button className="w-44  h-10 bg-white text-slate-950 font-semibold rounded-md py-2  hover:bg-slate-500  transition-all duration-700" onClick={handleNavigation}>Get Started</button>
              <p className="text-white  mt-4 animate-bounce font-custom1">Start summarizing now and save time like never before!</p>
            </div>

            <div className="flex items-center justify-center mt-4"></div>
          </div>
          <img className="h-full w-full bg-cover top" src={read} alt="img" />
        </div>

      </div>

      <hr />
      <div id='about' className="w-full pb-7 bg-[#030513]">
        <About />
      </div>

      <footer className='flex w-full justify-between items-center  bg-black px-6 h-20'>
        <div className="">
          <h3 className="text-white text-sm pl-4">Contact info: EasyRead@gmail.com</h3>
        </div>
        <div className=" text-white text-sm">
          © 2024 EasyRead. All Rights Reserved.
        </div>

        <ul className="flex space-x-10 text-white">
          <li><FaInstagramSquare className='w-5 h-5' /></li>
          <li><FaLinkedin className='w-5 h-5' /></li>
          <li><FaXTwitter className='w-5 h-5' /></li>
          <li>  </li>
        </ul>
      </footer>
    </>
  )
}
