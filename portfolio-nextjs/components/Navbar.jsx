import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    <div className='fixed w-full h-20 shadwo-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2-xl:px-16'> 
        <Image src='../public/assets/logos/cLogo.png' alt='logo' />
        </div>
    </div>
}

export default Navbar;