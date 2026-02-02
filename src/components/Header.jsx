import React, { useState, useRef, useEffect } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState('Shop');
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        setSelected(option);
        setDropdownOpen(false);
        if (option === 'Shop') navigate('/filter');
        // Add navigation for other options if needed
    };

    return (
        <header className='py-3 lg:py-6 fixed w-full top-0 z-10 bg-[white] px-5 border-b border-[#c5c3c3]'>
            <nav className='container mx-auto flex items-center gap-5 justify-between'>
                <Link to={'/'} className='text-[32px] font-bold font-Integral CF'>SHOP.CO</Link>

                {/* Custom dropdown for mobile */}
                <div className="relative w-40 md:flex gap-5 2xl:gap-15 items-center whitespace-nowrap hidden lg:hidden" ref={dropdownRef}>
                    <button
                        className="w-full bg-[#F0F0F0] border border-[#c5c3c3] text-gray-700 py-3 px-4 pr-8 rounded-[60px] text-left text-[18px] font-medium flex items-center justify-between focus:outline-none focus:bg-white focus:border-black"
                        onClick={() => setDropdownOpen((open) => !open)}
                        type="button"
                    >
                        {selected}
                        <svg className="ml-2 h-4 w-4 fill-current text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548a.75.75 0 0 1 1.06 0L10 10.97l3.424-3.423a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z" /></svg>
                    </button>
                    {dropdownOpen && (
                        <ul className="absolute left-0 top-10 mt-5 w-full bg-white border border-[#c5c3c3] rounded-[20px] shadow-lg z-50">
                            {['Shop', 'On Sale', 'New Arrivals', 'Brands'].map(option => (
                                <li
                                    key={option}
                                    className={`px-4 py-2 text-[18px] cursor-pointer hover:bg-[#F0F0F0] ${selected === option ? 'font-bold text-black' : 'text-gray-700'}`}
                                    onClick={() => handleSelect(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <ul className='lg:flex gap-10 2xl:gap-15 items-center whitespace-nowrap hidden'>
                    <li><Link to={'filter'}>Shop</Link></li>
                    <li>On Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>

                <div className='max-w-144.25 w-full sm:flex items-center hidden '>
                    <span className='bg-[#F0F0F0] border-none rounded-r-none px-5 rounded-[60px] h-12 flex items-center'><img src="/Frame (2).svg" alt="" /></span>
                    <input placeholder='Search for products...' className='bg-[#F0F0F0] border-none rounded-l-none outline-none rounded-[60px] h-12 w-full' type="text" />
                </div>
                <div className='hidden md:flex items-center sm:max-w-25 gap-5 sm:gap-7.5 w-full sm:justify-between'>
                    <Link to={"cart"} className='relative'><img src="/Frame.svg" alt="" />{
                        cart?.length > 0 ? <span className='absolute -top-1 -right-1 bg-[red] border border-[black] text-white flex items-center justify-center rounded-[10px] h-3.75 w-3.75'>{cart.length}</span> : ""
                    }</Link>
                    <Link><img src="/Frame (1).svg" alt="" /></Link>
                </div>
            </nav>
        </header>
    )
}

export default Header