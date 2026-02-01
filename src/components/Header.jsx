import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='py-3 lg:py-6 fixed w-full top-0 z-10 bg-[white] px-5 border-b border-[#c5c3c3]'>
            <nav className='container mx-auto flex items-center gap-5 justify-between'>
                <a className='text-[32px] font-bold font-Integral CF' href="">SHOP.CO</a>
                <ul className='lg:flex gap-10 2xl:gap-15 items-center whitespace-nowrap hidden'>
                    <li>Shop</li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
                
                <div className='max-w-144.25 w-full sm:flex items-center hidden '>
                    <span className='bg-[#F0F0F0] border-none rounded-r-none px-5 rounded-[60px] h-12 flex items-center'><img src="/Frame (2).svg" alt="" /></span>
                    <input placeholder='Search for products...' className='bg-[#F0F0F0] border-none rounded-l-none outline-none rounded-[60px] h-12 w-full' type="text" />
                </div>
                <div className='hidden md:flex items-center sm:max-w-25 gap-5 sm:gap-7.5 w-full sm:justify-between'>
                    
                    <Link><img src="/Frame.svg" alt="" /></Link>
                    <Link><img src="/Frame (1).svg" alt="" /></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header