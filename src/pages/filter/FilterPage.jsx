import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCards from '../../components/ProductCards'
import { MdCancel } from 'react-icons/md';

function FilterPage() {

  const [showFilter, setShowFilter] = useState(false);
  const [categoryName, setCategoryName] = useState("All")
  const { data } = useFetch({ url: "products", key: ["products"] })

  const products = data?.data

  const categories = products?.map((el) => {
    return el.category
  })

  const allCategories = [...new Set(categories)]

  return (

    <section className='pt-30 px-5'>
      <div className='container mx-auto flex flex-col md:flex-row gap-10 relative'>
        <div className='flex items-center justify-between md:hidden'>
          <h2 className='text-[25px] font-bold'>Filtering <span className='text-[14px] font-light'>Showing 1-10 of 100 Products</span></h2>
          <img src="/Frame 19.svg" alt="" onClick={() => setShowFilter(true)} className="cursor-pointer w-[46px]" />
        </div>
        {/* Sidebar is always rendered for smooth transition */}
        <div className={`fixed top-0 left-0 w-80 h-full bg-white border border-[#bcbcbc] p-7 rounded-r-[42px] z-50 shadow-lg transition-transform duration-300 ${showFilter ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ pointerEvents: showFilter ? 'auto' : 'none' }}>
          <button onClick={() => setShowFilter(false)} className="absolute duration-300 top-8 right-4"><MdCancel className='text-[36px]' /></button>
          <div className=' w-full'>
            <div className=' w-full'>
              <h3 className='text-[28px] font-bold'>Filters</h3>
              <hr className='text-[#bcbcbc] my-5' />
              <ul className='flex flex-col gap-2'>
                <li className='flex items-center gap-3'>
                  <input className='w-5 h-5' value={"All"} checked={categoryName === "All"} onChange={(e) => setCategoryName(e?.target?.value)} id={"All"} name='radio' type="radio" />
                  <label className='text-[20px]' htmlFor={"All"}>{"All"}</label>
                </li>
                {
                  allCategories?.map((category) => (
                    <li key={category} className='flex items-center gap-3 whitespace-nowrap'>
                      <input className='w-5 h-5'
                        value={category}
                        checked={categoryName === category}
                        onChange={(e) => setCategoryName(e.target.value)}
                        id={category}
                        name='radio'
                        type="radio"
                      />
                      <label className='text-[20px] first-letter:uppercase' htmlFor={category}>{category}</label>
                    </li>
                  ))
                }
              </ul>
              <hr className='text-[#bcbcbc] my-5' />
              <h3 className='text-[28px] font-bold pb-5'>Colors</h3>
              <div className='grid grid-cols-5 gap-3.75'>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#00C12B]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F50606]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F5DD06]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F57906]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#06CAF5]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#063AF5]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#7D06F5]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F506A4]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#FFFFFF]'></span>
                <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#000000]'></span>
              </div>
              <hr className='text-[#bcbcbc] my-5' />
              <h3 className='text-[28px] font-bold pb-5'>Size</h3>
              <div className='flex flex-wrap gap-2'>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>XX-Small</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>X-Small</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>Small</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>Medium</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>Large</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>X-Large</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>XX-Large</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>3X-Large</span>
                <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>4X-Large</span>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-73.75 w-full hidden md:block'>
          <div className=' w-full border border-[#bcbcbc] p-7 rounded-[42px]'>
            <h3 className='text-[28px] font-bold'>Filters</h3>
            <hr className='text-[#bcbcbc] my-5' />
            <ul className='flex flex-col gap-2'>
              <li className='flex items-center gap-3'>
                <input className='w-5 h-5' value={"All"} checked={categoryName === "All"} onChange={(e) => setCategoryName(e?.target?.value)} id={"All"} name='radio' type="radio" />
                <label className='text-[20px]' htmlFor={"All"}>{"All"}</label>
              </li>
              {
                allCategories?.map((category) => (
                  <li key={category} className='flex items-center gap-3 whitespace-nowrap'>
                    <input className='w-5 h-5'
                      value={category}
                      checked={categoryName === category}
                      onChange={(e) => setCategoryName(e.target.value)}
                      id={category}
                      name='radio'
                      type="radio"
                    />
                    <label className='text-[20px] first-letter:uppercase' htmlFor={category}>{category}</label>
                  </li>
                ))
              }
            </ul>
            <hr className='text-[#bcbcbc] my-5' />
            <h3 className='text-[28px] font-bold pb-5'>Colors</h3>
            <div className='grid grid-cols-5 gap-3.75'>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#00C12B]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F50606]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F5DD06]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F57906]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#06CAF5]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#063AF5]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#7D06F5]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#F506A4]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#FFFFFF]'></span>
              <span className='w-9.25 h-9.25 border border-[#bcbcbc] rounded-full bg-[#000000]'></span>
            </div>
            <hr className='text-[#bcbcbc] my-5' />
            <h3 className='text-[28px] font-bold pb-5'>Size</h3>
            <div className='flex flex-wrap gap-2'>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>XX-Small</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>X-Small</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>Small</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>Medium</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>Large</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>X-Large</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>XX-Large</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>3X-Large</span>
              <span className='bg-[#F0F0F0] rounded-[62px] px-6 py-3 text-[#00000099] hover:bg-black hover:text-white'>4X-Large</span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:rid-cols-4 gap-7'>
          {
            categoryName === "All" ? products?.map((product) => (
              <ProductCards key={product.id} {...product} />
            )) : products?.filter((el) => el.category === categoryName)?.map((product) => (
              <ProductCards key={product.id} {...product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default FilterPage