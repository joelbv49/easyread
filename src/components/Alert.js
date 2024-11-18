import React from 'react'
import { IoAlertCircle } from 'react-icons/io5'

export default function Alert(props) {
  return (
    <>
      {props.alert&&<div className={`md:w-52 ${props.success?"bg-green-700":"bg-slate-500"} ${props.failure?"bg-red-700":"bg-slate-500"} space-x-2 transition-all duration-700 flex ${props.alert?"translate-y-0":"-translate-y-14"}  items-center px-2 rounded-lg md:h-10 border self-center top-4 absolute `}>
          <div className=""><IoAlertCircle className='w-5  h-5' /></div>
          <p className="text-white text-sm">{props.msg}</p>
       </div>}
    </>
  )
}
