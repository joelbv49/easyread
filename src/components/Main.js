import React, { useState } from 'react'
import { BsLayoutSidebar } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { TbCategory } from 'react-icons/tb'
import Chat from './Chat'

export default function Main() {
  const [sideBar,setSideBar] = useState(false);
  const handleSideBar = ()=>{
    setSideBar(!sideBar);
  }
  return (
    <div className='flex  w-screen h-screen' >
      {/* sideBar */}
      {sideBar&&<div className="relative group mt-3 pl-3">
        <div className="hover:scale-110" onClick={handleSideBar}> <BsLayoutSidebar /></div> 
        <span className="absolute text-slate-100 text-sm px-1 w-24 text-center -top-1 left-8  hidden  group-hover:block rounded-full py-1 bg-gray-500 "> Open Sidebar</span>
      </div>}

      <div className={`min-w-56   bg-slate-100 h-screen flex flex-col font-custom1 transition-transform duration-700 ${sideBar?" -translate-x-96 overflow-hidden":"min-w-56"}`}>
        
        <div className="w-full h-10 flex justify-between items-center px-4 ">
            <div className="relative group">
              <div className="hover:scale-110" onClick={handleSideBar}> <BsLayoutSidebar /></div> 
              <span className="absolute text-slate-100 text-sm px-1 w-24 text-center -top-1 left-5  hidden  group-hover:block rounded-full py-1 bg-gray-500"> close Sidebar</span>
            </div>
            <div className="relative group">
              <div className="hover:scale-110"><FiEdit /></div>
              <span className="absolute text-slate-100 text-sm px-1 w-24 text-center   -left-10 -bottom-8 hidden  group-hover:block rounded-full py-1 bg-gray-500">New chat</span>
            </div>
        </div>

        <div className="px-2 mt-4 text-sm w-[90%] py-2 self-center flex justify-between hover:bg-slate-200 rounded-md items-center">
          <h3 className="">EasyRead</h3>
          <div className="relative group">
              <div className="hover:scale-110"><FiEdit /></div>
              <span className="absolute text-slate-100 text-sm px-1 w-24 text-center   -left-10 -bottom-8 hidden  group-hover:block rounded-full py-1 bg-gray-500">New chat</span>
            </div>
        </div>

        <div className="px-2 text-sm w-[90%] py-2 self-center flex space-x-2 hover:bg-slate-200 rounded-md items-center">
          <div className=""><TbCategory /></div>
          <h3 className="">Explore EasyRead</h3>
        </div>

        {/* chat */}
        <div className="flex flex-col overflow-y-scroll scrollbar-hide h-[90%] mt-5">
          <div className="flex w-[90%]  rounded-lg self-center justify-between items-center px-4 py-2 text-sm truncate ... hover:bg-slate-200">New conversation </div>
        </div>


      </div>

      {/* main content */}
      <div className="flex transition duration-700 flex-col w-full">
        <nav className="flex items-center h-10 w-full ">
            <h3 className=" px-3 font-bold italic font-custom1">EasyRead</h3>
        </nav>

        {/* chat component */}
        <Chat/>

      </div>
     
    </div>
  )
}
