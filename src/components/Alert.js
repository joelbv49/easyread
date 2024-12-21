import React from 'react'
import { IoAlertCircle } from 'react-icons/io5'

export default function Alert(props) {
  return (
    <>
      {props.alert&&<div className={`z-50 ${props.success||false?"bg-green-700":""} ${props.Default||false?"bg-slate-600":""}  ${props.failure||false?"bg-red-700":""} space-x-2  flex ${props.alert?"md:min-w-52 ":"md:min-w-0 "} transition-all duration-1000 items-center px-2 rounded-lg md:h-10 border self-center top-4 absolute `}>
          <div className=""><IoAlertCircle className='w-5  h-5' /></div>
          <p className="text-white text-sm">{props.msg}</p>
       </div>}
    </>
  )
}
