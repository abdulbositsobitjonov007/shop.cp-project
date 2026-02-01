import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import SwiperComments from '../../components/SwiperComments'

function SinglePage() {

  const { id } = useParams()

  const { data } = useFetch({ url: `products/${id}`, key: ["product", id] })

  const singleProduct = data?.data;



  return (
    <section className='pt-30 px-5'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-start gap-10 mx-auto'>
          <div className='max-w-175 w-full h-130.5 bg-[#F0EEED] rounded-[20px]'>
            <img className='w-full object-contain h-full p-10' src={singleProduct?.image} alt="" />
          </div>
          <div className='max-w-175 w-full'>
            <h1 className='text-[32px] md:text-[40px] font-bold'>{singleProduct?.title}</h1>
            <p className='flex items-center text gap-1'><img className='w-6' src="/Star 1.svg" alt="" />{singleProduct?.rating?.rate}</p>
            <p className='text-[32px] font-bold'>${singleProduct?.price}</p>
            <p className='text-[#00000099] first-letter:uppercase line-clamp-2'>{singleProduct?.description}</p>
            <hr className='text-[#b6b5b5] my-3'/>
            <div>
              <p className='text-[#00000099] pb-3'>Select Colors</p>
              <div className='flex items-center gap-2'>
                <span className='rounded-full w-9.25 h-9.25 border border-gray-400 bg-[#c74e09]'></span>
                <span className='rounded-full w-9.25 h-9.25 border border-gray-400 bg-[#a700a7]'></span>
                <span className='rounded-full w-9.25 h-9.25 border border-gray-400 bg-[#037b03]'></span>
                <span className='rounded-full w-9.25 h-9.25 border border-gray-400 bg-[#00007f]'></span>
                <span className='rounded-full w-9.25 h-9.25 border border-gray-400 bg-[#a0a008]'></span>
              </div>
            </div>
            <hr className='text-[#b6b5b5] my-3' />
            <div>
              <p className='pb-3'>Choose Size</p>
              <div className='flex gap-2'>
                <span className='px-6 py-3 bg-[#F0F0F0] rounded-[62px]'>Small</span>
                <span className='px-6 py-3 bg-[#F0F0F0] rounded-[62px]'>Medium</span>
                <span className='px-6 py-3 bg-[#F0F0F0] rounded-[62px]'>Large</span>
                <span className='px-6 py-3 bg-[#F0F0F0] rounded-[62px]'>X-Large</span>
              </div>
            </div>
            <hr className='text-[#b6b5b5] my-3' />
            <button className='sm:max-w-100 w-full cursor-pointer border-2 border-[black] hover:bg-[grey] duration-300 h-13 rounded-[62px] bg-black text-white'>Add to Cart</button>
          </div>
        </div>
        <div className='my-15'>
          <h2 className='text-[30px] md:text-[42px] font-bold'>Product details</h2>
          <p className='text-[23px] md:text-[30px] font-extralight py-3'>Category type: <span className='first-letter:uppercase font-bold'>{singleProduct?.category}</span></p>
          <p className='text-[18px] md:text-[23px] text-[#00000088]'>{singleProduct?.description}</p>
        </div>
        <div>
          <h2 className='text-[42px] font-bold pb-10'>Rating & Reviews</h2>
          <SwiperComments />
        </div>
      </div>
    </section>
  )
}

export default SinglePage