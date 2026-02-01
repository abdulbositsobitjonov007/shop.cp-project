import React from 'react'
import { BiHomeAlt2 } from 'react-icons/bi'
import { IoSearchSharp } from 'react-icons/io5'

function PhonePanel() {
  return (
    <div className='md:hidden px-5 py-2 border-t fixed bottom-0 bg-white w-full z-10 border-t-[grey]'>
        <ul className='flex items-center justify-between'>
              <li className='flex flex-col items-center text-center gap-1'><BiHomeAlt2 className='text-[36px]'/>Main</li>
              <li className='flex flex-col items-center text-center gap-1'><IoSearchSharp className='text-[36px] text-center' />Categories</li>
              <li className='relative flex flex-col text-center gap-1'><img className='w-9' src="/Frame.svg" alt="" />Cart <span className='absolute top-0.2 -right-1 bg-[red] border border-[black] text-white flex items-center justify-center rounded-[10px] h-[15px] w-[15px]'>0</span></li>
              <li className='flex flex-col items-center tetx-center gap-1'><img className='w-9' src="/Frame (1).svg" alt="" />Profile</li>
        </ul>
    </div>
  )
}

export default PhonePanel