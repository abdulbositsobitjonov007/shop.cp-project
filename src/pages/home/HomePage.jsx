import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import ProductCards from '../../components/ProductCards'
import SwiperComments from '../../components/SwiperComments'

function HomePage() {
    // Use an object to track expanded categories
    const [expanded, setExpanded] = useState({})

    const getData = async () => {
        let res = await axios.get("https://fakestoreapi.com/products")
        return res
    }

    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: getData
    })

    const products = data?.data

    const categories = products?.map((el) => {
        return el.category
    })

    const allCategories = [...new Set(categories)]

    function viewMore(category) {
        setExpanded((prev) => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <section id='hero' className=' md:pt-23 bg-[#F2F0F1]'>
                <div className='relative container mx-auto px-5'>
                    <div className='pt-26.25 pb-29 flex flex-col gap-7'>
                        <h1 className='text-[46px] md:text-[56px] lg:text-[64px] font-bold max-w-137.5 w-full leading-20'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className='text-[#00000099] max-w-136.25 w-full'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='hover:scale-[1.1] duration-300 cursor-pointer max-w-52.5 w-full h-13 bg-black rounded-[62px] text-white'>Shop Now</button>
                        <div className='flex max-w-150 w-full justify-center gap-10 md:gap-5 text-center flex-wrap items-center sm:justify-between'>
                            <span>
                                <h3 className='text-[40px] font-bold'>200+</h3>
                                <p className='text-[#00000099]'>International Brands</p>
                            </span>
                            <span>
                                <h3 className='text-[40px] font-bold'>2,000+</h3>
                                <p className='text-[#00000099]'>High-Quality Products</p>
                            </span>
                            <span>
                                <h3 className='text-[40px] font-bold'>30,000+</h3>
                                <p className='text-[#00000099]'>Happy Customers</p>
                            </span>
                        </div>
                        <div className='absolute right-5 md:right-30 lg:right-60 xl:right-0 top-180 md:top-5'>
                            <img className='scale-anim' src="/Vector.svg" alt="" />
                        </div>
                        <div className='absolute  sm:right-130 md:right-80 lg:right-90 xl:right-130 2xl:right-160 top-210 md:top-90 lg:top-65'>
                            <img className='scale-anim' src="/Vector.svg" alt="" />
                        </div>

                    </div>

                </div>
                <div className='md:hidden w-full max-w-200'>
                    <img className='w-full' src="/Rectangle 2 (1).png" alt="" />
                </div>
            </section>
            <div className="marquee">
                <div className="marquee-content">
                    <img className='w-29 md:w-41.5' src="/Group.svg" alt="" />
                    <img className='w-15.75 md:w-22.75' src="/zara-logo-1 1.svg" alt="" />
                    <img className='w-27.25 md:w-39 ' src="/gucci-logo-1 1.svg" alt="" />
                    <img className='w-31.75 md:w-48.5' src="/prada-logo-1 1.svg" alt="" />
                    <img className='w-33.5 md:w-51.5' src="/Group (1).svg" alt="" />
                    {/* Repeat the images for seamless looping */}
                    <img className='w-29 md:w-41.5' src="/Group.svg" alt="" />
                    <img className='w-15.75 md:w-22.75' src="/zara-logo-1 1.svg" alt="" />
                    <img className='w-27.25 md:w-39 ' src="/gucci-logo-1 1.svg" alt="" />
                    <img className='w-31.75 md:w-48.5' src="/prada-logo-1 1.svg" alt="" />
                    <img className='w-33.5 md:w-51.5' src="/Group (1).svg" alt="" />
                </div>
            </div>
            <section className='pt-10 px-5'>
                <div className='container mx-auto'>
                    {
                        allCategories?.map((category) => {
                            return (
                                <div key={category}>
                                    <h1 className='text-center uppercase text-[36px] md:text-[48px] pb-10 pt-10 font-bold'>{category}</h1>
                                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                        {
                                            expanded[category]
                                                ? products?.filter((item) => item.category === category)?.map((el) => (
                                                    <ProductCards key={el.id} {...el} />
                                                ))
                                                : products?.filter((item) => item.category === category)?.slice(0, 4)?.map((el) => (
                                                    <ProductCards key={el.id} {...el} />
                                                ))
                                        }
                                    </div>
                                    <span className='flex justify-center pt-7 pb-20'>
                                        <button onClick={() => viewMore(category)} className='px-5 py-2 rounded-[20px] cursor-pointer border'>
                                            {expanded[category] ? "View Less" : "View All"}
                                        </button>
                                    </span>
                                    <hr className='text-[#0000001A]' />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section>
                <div className='container mx-auto bg-[#F0F0F0] p-7 lg:p-16 rounded-[40px]'>
                    <h1 className='text-[36px] sm:text-[48px] font-bold text-center pb-5 sm:pb-16'>BROWSE BY DRESS STYLE</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                            <div className='relative rounded-[20px] h-47.5 lg:h-72.25 md:max-w-65.5 lg:max-w-85.5 xl:max-w-122.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Casual</h4>
                                <img className='w-full h-full object-cover' src="/image 11 (1).png" alt="" />
                            </div>
                            <div className='relative rounded-[20px] h-47.5 lg:h-72.25 max-w-224.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Formal</h4>
                                <img className='w-full h-full object-cover' src="/image 13.png" alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 items-center'>
                            <div className='relative rounded-[20px] h-47.5 lg:h-72.25 max-w-224.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Party</h4>
                                <img className='w-full h-full object-cover' src="/image 12.png" alt="" />
                            </div>
                            <div className='relative rounded-[20px] h-47.5 lg:h-72.25  md:max-w-65.5 lg:max-w-85.5 xl:max-w-122.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Gym</h4>
                                <img className='w-full h-full object-cover' src="/image 14 (1).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-20'>
                <div>
                    <h1 className='container px-5 mx-auto text-[36px] sm:text-[48px] font-bold'>OUR HAPPY CUSTOMERS</h1>
                    <div className='py-10'>
                        <SwiperComments />
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage 