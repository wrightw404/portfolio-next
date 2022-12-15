import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function Nav() {
    return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2-xl:px-16'> 
        <Image src='/../public/assets/logos/cLogo.png' alt='logo' width='75'height='75' />
        <ul className='flex flex-wrap items-center justify-end text-xl'>
                <li className='px-3 text-dark-blue hover:text-electric-blue hover:scale-75'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='px-3 text-dark-blue hover:text-electric-blue hover:scale-75'>
                    <Link href='/about'>About</Link>

                </li>
                <li className='px-3 text-dark-blue hover:text-electric-blue hover:scale-75'>
                    <Link href='/products'>Projects</Link>

                </li>
                <li className='px-3 text-dark-blue hover:text-electric-blue hover:scale-75'>
                    <Link href='/login'>Contact</Link>
               </li>
            </ul>
        </div>
    </div>
    );
}

