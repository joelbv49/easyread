import React, { useState } from 'react'
import { FiAlignJustify, FiX } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const navigate = useNavigate();
    const handleNavigation = () => {
      navigate('/summarize/chat/1');
    }

    return (
        <nav className='bg-slate-900 fixed w-full z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between md:h-12 h-16'>
                    <div className='flex items-center'>
                        <h3 className="text-white font-bold text-xl font-custom1"><span className='text-3xl font-serif '>E</span>asyRead</h3>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <div className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 hover:scale-110 transition-all duration-700 cursor-pointer rounded-md text-sm font-medium' onClick={handleNavigation}>Chat with URL</div>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 hover:scale-110 transition-all duration-700  rounded-md text-sm font-medium cursor-pointer'
                            >
                                Features
                            </Link>
                            <div className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 hover:scale-110 transition-all duration-700 cursor-pointer rounded-md text-sm font-medium'>Contact Us</div>
                        </div>
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='inline-flex  items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none '
                        >
                            <span className='sr-only'>Open main menu</span>
                            {menuOpen ? <FiX className='block h-6 w-6' /> : <FiAlignJustify className='block h-6 w-6' />}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <div className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium' onClick={handleNavigation}>Chat with PDF</div>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                            onClick={toggleMenu}
                        >
                            Features
                        </Link>
                        <div className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>Contact Us</div>
                    </div>
                </div>
            )}
        </nav>
    )
}

