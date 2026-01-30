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
            <section id='hero' className='mt-23 px-5'>
                <div className='container mx-auto'>
                    <div className='pt-26.25 pb-29 flex flex-col gap-7'>
                        <h1 className='text-[64px] font-bold max-w-137.5 w-full leading-20'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className='text-[#00000099] max-w-136.25 w-full'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='hover:scale-[1.1] duration-300 cursor-pointer max-w-52.5 w-full h-13 bg-black rounded-[62px] text-white'>Shop Now</button>
                        <div className='flex max-w-150 w-full items-center justify-between'>
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


                    </div>
                </div>
            </section>
            <div className="marquee">
                <div className="marquee-content">
                    <img src="/Group.svg" alt="" />
                    <img src="/zara-logo-1 1.svg" alt="" />
                    <img src="/gucci-logo-1 1.svg" alt="" />
                    <img src="/prada-logo-1 1.svg" alt="" />
                    <img src="/Group (1).svg" alt="" />
                    {/* Repeat the images for seamless looping */}
                    <img src="/Group.svg" alt="" />
                    <img src="/zara-logo-1 1.svg" alt="" />
                    <img src="/gucci-logo-1 1.svg" alt="" />
                    <img src="/prada-logo-1 1.svg" alt="" />
                    <img src="/Group (1).svg" alt="" />
                </div>
            </div>
            <section className='pt-10 px-5'>
                <div className='container mx-auto'>
                    {
                        allCategories?.map((category) => {
                            return (
                                <div key={category}>
                                    <h1 className='text-center uppercase text-[48px] pb-10 pt-10 font-bold'>{category}</h1>
                                    <div className='grid grid-cols-4 gap-5'>
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
                <div className='container mx-auto bg-[#F0F0F0] p-16 rounded-[40px]'>
                    <h1 className='text-[48px] font-bold text-center pb-16'>BROWSE BY DRESS STYLE</h1>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-5 w-full'>
                            <div className='relative rounded-[20px] h-72.25 max-w-122.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Casual</h4>
                                <img className='w-full object-contain' src="/image 11 (1).png" alt="" />
                            </div>
                            <div className='relative rounded-[20px] h-72.25 max-w-224.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Formal</h4>
                                <img className='w-full object-contain' src="/image 13.png" alt="" />
                            </div>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <div className='relative rounded-[20px] h-72.25 max-w-224.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Party</h4>
                                <img className='w-full object-contain' src="/image 12.png" alt="" />
                            </div>
                            <div className='relative rounded-[20px] h-72.25 max-w-122.5 w-full overflow-hidden'>
                                <h4 className='absolute text-[36px] font-bold top-6.25 left-9'>Gym</h4>
                                <img className='w-full object-contain' src="/image 14 (1).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-20'>
                <div>
                    <h1 className='container mx-auto text-[48px] font-bold'>OUR HAPPY CUSTOMERS</h1>
                    <div className='py-10'>
                        <SwiperComments />
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default HomePage