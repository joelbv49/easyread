import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'

export default function Navbar() {
    const [menu,setMenu] = useState(true);
    const handleMenu = ()=>{
        setMenu(!menu);
    }
  return (
    <div className='shadow-lg justify-between items-center  flex h-14 bg-slate-900 fixed w-full'>

      <h3 className="text-white font-bold pl-4">EasyRead</h3>
      
     
      <div className="text-white  h-6 pr-4 mr-4 md:hidden" onClick={handleMenu}><FiAlignJustify/> </div>

      
      <div className={`md:flex  md:space-x-32 md:pr-12 text-white md:bg-transparent absolute md:static top-16 md:top-0 right-1 md:right-0 space-y-4 md:space-y-0 bg-slate-900 p-4 md:p-0 transition-all md:transition-none overflow-hidden duration-500  ${(menu)?"translate-x-52":"translate-x-0"} `}>
        <p className="">Chat with pdf</p>
        <hr className="md:hidden" />
        <p className="">Browser extension</p>
        <hr className="md:hidden" />
        <p className="">features</p>
        <hr className="md:hidden" />
        <p className="">about</p>
        <hr className="md:hidden" />
        <p className="">contact us</p>
      </div>

     
    </div>
  )
}
