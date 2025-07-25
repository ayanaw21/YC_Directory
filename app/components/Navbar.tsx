import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='py-3 px-5 bg-white shadow-sm'>
        <nav className='flex justify-between items-center'>
            <Link href='/'>
                <Image src='' alt='yc_directory'/>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar
