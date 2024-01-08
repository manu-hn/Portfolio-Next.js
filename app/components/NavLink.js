import Link from 'next/link'
import React from 'react'

const NavLink = ({href, title}) => {
    return (
        <Link href={href} className='block py-2 px-4 text-gray-500 sm:text-xl rounded md:p-0 hover:text-white'>{title}</Link>
    )
}

export default NavLink