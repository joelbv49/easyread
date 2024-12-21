import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { Link } from 'react-scroll';
export default function Navbar() {
    const [menu,setMenu] = useState(true);
    const handleMenu = ()=>{
        setMenu(!menu);
    }
  return (
    <div className='shadow-lg justify-between  items-center z-30  flex h-14 bg-slate-900 fixed w-full'>

      <h3 className="text-white font-bold pl-4">EasyRead</h3>
      
     
      <div className="text-white  h-6 pr-4 mr-4 md:hidden" onClick={handleMenu}><FiAlignJustify/> </div>

      
      <ul className={`md:flex  md:space-x-32 md:pr-12 text-white md:bg-transparent absolute md:static top-16 md:top-0 right-1 md:right-0 space-y-4 md:space-y-0 bg-slate-900 p-4 md:p-0 transition-all md:transition-none overflow-hidden duration-500  ${(menu)?"translate-x-52":"translate-x-0 "} `}>
        <li className="">Chat with pdf</li>
        <hr className="md:hidden" />
        <li className="">
          <Link
            to="about" // Match the id of the About section
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline mr-20"
          >
          features
          </Link>
        </li>
        <hr className="md:hidden" />
        <li className="">contact us</li>
      </ul>

     
    </div>
  )
}
