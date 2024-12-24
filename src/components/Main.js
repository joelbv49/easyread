import React, { useContext, useState } from 'react';
import { BsLayoutSidebar } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { TbCategory } from 'react-icons/tb';
import { Chatcontext } from '../context/Chatstate';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Main() {
  const location = useLocation(); // Step 1: Hook to track URL changes

  // Handling new chats
  const { contentLoader, Urlchats, handleNewChat, handleChatClick, activeChat } = useContext(Chatcontext);

  // Sidebar toggle state
  const [sideBar, setSideBar] = useState(false);

  // Sidebar toggle handler
  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <div className="flex  w-full h-screen md:h-full">
        {/* Sidebar */}
        {sideBar && (
          <div className="relative group mt-3 pl-3">
            <div className="hover:scale-110" onClick={handleSideBar}>
              <BsLayoutSidebar />
            </div>
            <span className="absolute text-slate-100 text-sm px-1 w-24 text-center -top-1 left-8 hidden group-hover:block rounded-full py-1 bg-gray-500">
              Open Sidebar
            </span>
          </div>
        )}

        <div
          className={`min-w-56 absolute md:static  bg-slate-100 h-screen flex flex-col font-custom1 transition-transform duration-700 ${sideBar ? '-translate-x-96 overflow-hidden' : 'min-w-56'
            }`}
        >
          <div className="w-full h-10 flex justify-between items-center px-4">
            <div className="relative group">
              <div className="hover:scale-110" onClick={handleSideBar}>
                <BsLayoutSidebar />
              </div>
              <span className="absolute text-slate-100 text-xs px-1 w-24 text-center -top-1 left-5 hidden group-hover:block rounded-full py-1 bg-gray-500">
                Close Sidebar
              </span>
            </div>

            {/* New Chat */}
            <div className="relative group" onClick={handleNewChat}>
              <div className="hover:scale-110">
                <FiEdit />
              </div>
              <span className="absolute text-slate-100 text-sm px-1 w-24 text-center -left-10 -bottom-8 hidden group-hover:block rounded-full py-1 bg-gray-500">
                New chat
              </span>
            </div>
          </div>

          <div className="px-2 mt-4 text-sm w-[90%] py-2 self-center flex justify-between hover:bg-slate-200 rounded-md items-center">
            <h3 className="">EasyRead</h3>
            {/* New Chat */}
            <div className="relative group" onClick={handleNewChat}>
              <div className="hover:scale-110">
                <FiEdit />
              </div>
              <span className="absolute text-slate-100 text-sm px-1 w-24 text-center -left-10 -bottom-8 hidden group-hover:block rounded-full py-1 bg-gray-500">
                New chat
              </span>
            </div>
          </div>

          <div className="px-2 text-sm w-[90%] py-2 self-center flex space-x-2 hover:bg-slate-200 rounded-md items-center">
            <div className="">
              <TbCategory />
            </div>
            <h3 className="">Explore EasyRead</h3>
          </div>

          {/* Chat List */}
          <div className="flex flex-col overflow-y-scroll cursor-pointer scrollbar-hide h-[90%] mt-5">
            {Urlchats.map((chats) => (
              <Link to={`/summarize/chat/${chats.id}`} key={chats.id}
                onClick={() => { handleChatClick(chats.id) }}>
                <p
                  className={`flex w-[90%] rounded-lg self-center ${(activeChat === chats.id) ? "bg-slate-200" : "bg-slate-100 scale-"} justify-between  overflow-hidden items-center px-4 py-2 text-sm truncate hover:bg-white`}
                >
                  New Conversation
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* a skeleton */}
        {contentLoader && (
          <div className="flex-1 w-full h-screen p-4">
            <div className="animate-pulse">
              {/* Header Skeleton */}
              <div className="flex items-center mb-8">
                <div className="h-6 bg-slate-200 rounded w-32"></div>
              </div>

              {/* Chat Messages Skeleton */}
              <div className="space-y-6">
                {/* Message 1 */}
                <div className="flex items-start space-x-4 max-w-3xl">
                  <div className="rounded-full bg-slate-200 h-10 w-10 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-slate-200 rounded w-24 mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                      <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>

                {/* Message 2 */}
                <div className="flex items-start space-x-4 max-w-3xl ml-auto">
                  <div className="flex-1">
                    <div className="h-4 bg-slate-200 rounded w-24 mb-2 ml-auto"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-5/6 ml-auto"></div>
                    </div>
                  </div>
                  <div className="rounded-full bg-slate-200 h-10 w-10 flex-shrink-0"></div>
                </div>

                {/* Message 3 */}
                <div className="flex items-start space-x-4 max-w-3xl">
                  <div className="rounded-full bg-slate-200 h-10 w-10 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-slate-200 rounded w-24 mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-slate-200 rounded w-full"></div>
                      <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Box Skeleton */}
              <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl">
                <div className="h-12 bg-slate-200 rounded-lg w-full"></div>
              </div>
            </div>
          </div>
        )}
        {/* Main Content */}
        {!contentLoader && <div className="flex transition duration-700 flex-col w-full">
          <nav className="flex items-center h-10 w-full">
            <h3 className="px-3 font-bold italic font-custom1">EasyRead</h3>
          </nav>

          {/* Chat Component */}
          {/* Step 2: Ensure component re-renders when location changes */}
          <Outlet key={location.pathname} />
        </div>}
        {/* Footer */}

      </div>
      {/* footer */}
      <footer className='flex w-full justify-between items-center  bg-slate-900  h-20'>
        <div className="">
          <h3 className="text-white text-xs pl-4">Contact info: EasyRead@gmail.com</h3>
        </div>
        <div className=" text-white text-xs">
          © 2024 EasyRead. All Rights Reserved.
        </div>

        <ul className="flex space-x-1 md:space-x-10 text-white">
          <li><FaInstagramSquare className='w-5 h-5' /></li>
          <li><FaLinkedin className='w-5 h-5' /></li>
          <li><FaXTwitter className='w-5 h-5' /></li>
          <li>  </li>
        </ul>
      </footer>
    </>
  );
}
