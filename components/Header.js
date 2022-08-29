import React from 'react'
import Image from "next/image"
import HeaderItem from './HeaderItem'
import {
HomeIcon,
CheckBadgeIcon,
MagnifyingGlassIcon,
UserIcon,
BoltIcon,
CircleStackIcon

} from "@heroicons/react/24/outline"

function Header() {
  return (
    <header className='flex flex-col
     sm:flex-row m-5  justify-between items-center h-auto'>
    <div className='flex flex-grow justify-evenly max-w-2xl'>
    <HeaderItem Icon={HomeIcon} title="Home" />
    <HeaderItem Icon={BoltIcon} title="Trending" />
    <HeaderItem Icon={CheckBadgeIcon} title="Verified" />
    <HeaderItem Icon={CircleStackIcon} title="Collection" />
    <HeaderItem Icon={MagnifyingGlassIcon} title="Search" />
    <HeaderItem Icon={UserIcon} title="Account" />
    </div>
    <Image
    src="https://links.papareact.com/ua6"
    className='object-contain'
    width={100}
    height={100}
    />
    
    </header>
  )
}

export default Header