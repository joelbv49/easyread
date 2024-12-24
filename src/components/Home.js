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
    <div className="flex flex-col min-h-screen bg-[#030513]">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-screen">
          <img className="h-full w-full object-cover" src={read} alt="Reading background" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030513] from-10% via-transparent via-50% to-[#030513] to-90%">
            <div className="h-full flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-3xl md:text-3xl lg:text-5xl font-bold font-custom2 mb-6">Revolutionize your reading journey with EasyRead</h1>
              <p className="text-white text-xl md:text-2xl font-semibold font-custom2 mb-10">Your ultimate tool for quick and efficient reading</p>
              <button 
                className="bg-white text-slate-950 font-semibold rounded-md py-2 px-8 hover:bg-slate-900 hover:text-white hover:scale-105 transition-all duration-700"
                onClick={handleNavigation}
              >
                Get Started
              </button>
              <p className="text-white mt-6 animate-bounce font-custom1">Start summarizing now and save time like never before!</p>
            </div>
          </div>
        </div>
        <div id='about' className="py-20">
          <About />
        </div>
      </main>
      <footer className='bg-black px-6 py-8'>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-white text-sm">Contact info: EasyRead@gmail.com</h3>
          </div>
          <div className="text-white text-sm">
            © 2024 EasyRead. All Rights Reserved.
          </div>
          <ul className="flex space-x-6 text-white">
            <li><FaInstagramSquare className='w-6 h-6 hover:text-gray-300 transition-colors duration-300' /></li>
            <li><FaLinkedin className='w-6 h-6 hover:text-gray-300 transition-colors duration-300' /></li>
            <li><FaXTwitter className='w-6 h-6 hover:text-gray-300 transition-colors duration-300' /></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

