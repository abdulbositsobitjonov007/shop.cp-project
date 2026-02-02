import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { IoSearchSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function PhonePanel() {

  const cart = useSelector((state) => state.cart)

  return (
    <div className='md:hidden px-5 py-1 border-t fixed bottom-0 bg-white w-full z-10 border-t-[#b2b2b2]'>
        <ul className='flex items-center justify-between'>
              <Link to={"/"} className='flex flex-col items-center text-center'><BiHomeAlt2 className='text-[30px]'/>Main</Link>
              <Link to={"filter"} className='flex flex-col items-center text-center'><IoSearchSharp className='text-[30px] text-center' />Categories</Link>
        <Link to={"cart"} className='relative flex flex-col text-center'><img className='w-7.5' src="/Frame.svg" alt="" />Cart{cart?.length > 0 ? <span className='absolute top-0.2 -right-1 bg-[red] border border-[black] text-white flex items-center justify-center rounded-[10px] h-3.75 w-3.75'>{cart?.length}</span> : ""}</Link>
              <li className='flex flex-col items-center tetx-center'><img className='w-7.5' src="/Frame (1).svg" alt="" />Profile</li>
        </ul>
    </div>
  )
}

export default PhonePanel