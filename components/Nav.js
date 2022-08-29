import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

function Nav() {
  const router=useRouter();
  return (
    <nav className='relative'>
    <div className='flex scrollbar-hide px-10 sm:px-20
     text-2xl whitespace-nowrap space-x-10
      sm:space-x-20 overflow-x-scroll'>
    {Object.entries(requests).map(([key,{title,url}])=>(
      <h2
      onClick={()=>router.push(`/?genre=${key}`)}
      key={key} className="last:pr-20 cursor-pointer transition : ;
      transform duration-100 hover:scale-125 hover:text-white
       active:text-red-500"
      >{title}</h2>
    ))}
    </div>
    <div className='absolute top-0 right-0 bg-gradient-to-l
     from-[#06202A] h-10 w-1/12'/>
    </nav>
  )
}

export default Nav