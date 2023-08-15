import Image from 'next/image'
import React from 'react'
import logo from '../../images/logo.png'
const NavBar = () => {
    return (
        <div className='px-20 flex items-center justify-between h-[15vh]'>
            {/* logo */}
            <div>
                <Image src={logo} alt='logo' width={70} height={70} />
            </div>
            {/* navbar items */}

            <ul className='flex gap-[3vw] text-gray-500 font-mono font-bold'>
                <li className='hover:cursor-pointer'>Home</li>
                <li className='hover:cursor-pointer'>Menu</li>
                <li className='hover:cursor-pointer'>What's New</li>
                <li className='hover:cursor-pointer'>Contact</li>
            </ul>

        </div>
    )
}

export default NavBar