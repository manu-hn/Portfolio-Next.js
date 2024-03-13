'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuForMobile from './MenuForMobile';

const navLink = [
    {
        title: "About",
        path: '#about'
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: 'Contact',
        path: "#hire-me"
    }
]

const NavBar = () => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false)
    return (
        <nav className='w-full border-b-[0.5px] border-gray-200 px-10 py-6 fixed top-0 left-0 ring-0 z-10 bg-black bg-opacity-95 container'>
            <div className='flex w-full justify-between items-center '>
                <Link href={'/'}>
                    {/* <Image className='' src={'/images/HeaderNoBg.png'} alt='Header Logo' width={100} height={60} /> */}
                    <h1 className='font-semibold text-3xl italic sm:text-sm md:text-3xl lg:text-4xl text-white'>Manu H N</h1>
                </Link>
                {/* <div className='mobile-menu block md:hidden '>
                    {
                        !isNavBarOpen ? (
                            <button onClick={()=>setIsNavBarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white'>
                                <Bars3Icon className='w-5 h-5' />
                            </button>
                        ) : (
                            <button onClick={()=>setIsNavBarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div> */}
                {/* <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-5 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLink.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink href={link.path} title={link.title} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div> */}
            </div>
            {isNavBarOpen ? <MenuForMobile links={navLink} />: null}
        </nav>
    )
}

export default NavBar