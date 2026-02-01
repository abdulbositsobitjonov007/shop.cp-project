import React from 'react'
import { Link } from 'react-router-dom'

function ProductCards({image, title, price, rating, id}) {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <Link to={`product/${id}`}>
                    <div className='max-w-93.75 w-full rounded-[20px] bg-[#F0EEED]'>
                        <img className='object-contain hover:scale-[1.1] duration-300 h-74.5 w-full p-10' src={image} alt="" />
                    </div>
                </Link>
                <div className='flex flex-col gap-2'>
                    <p className='text-[20px] line-clamp-1 font-bold'>{title}</p>
                    <span className='flex items-center text-[14px]'><img src="/Star 1.svg" alt="" />{rating?.rate}</span>
                    <p className='text-[24px] font-bold'>${price}</p>
                </div>
            </div>
        </>
    )
}

export default ProductCards