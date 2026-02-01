import React from 'react'

function Footer() {
    return (

        <>


            <footer className='bg-[#F0F0F0] pt-50 md:pt-35 mt-35 relative'>
                <section className='absolute px-5 -top-25 w-full'>
                    <div className='container gap-5 mx-auto flex flex-col sm:flex-row items-center justify-between bg-black rounded-[20px] px-7 sm:px-16 py-10.75'>
                        <h1 className='text-white text-[23px] sm:text-[30px] lg:text-[45px] font-bold w-full max-w-123.5'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                        <div className='sm:max-w-87.5 w-full flex flex-col gap-3.5'>
                            <div className='flex'>
                                <span className='bg-white border-none rounded-r-none pl-5 rounded-[60px] h-12 flex items-center'><img src="/Frame (4).svg" alt="" /></span>
                                <input className='bg-white h-12 w-full outline-none border-none rounded-l-none px-5 rounded-[60px]' placeholder='Enter your email address' type="text" />
                            </div>
                            <button className='bg-white h-12 cursor-pointer border-2 border-black hover:border-white hover:bg-black hover:text-white duration-300 text-black w-full rounded-[62px]'>Subscribe to Newsletter</button>
                        </div>
                    </div>
                </section>
                <div className='px-5 container mx-auto flex flex-col lg:flex-row gap-10 lg:gap-45'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-[33px] font-bold'>SHOP.CO</h1>
                        <p className='text-[14px] max-w-62 w-full'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <ul className='flex items-center gap-7'>
                            <li><img src="/1.svg" alt="" /></li>
                            <li><img src="/2.svg" alt="" /></li>
                            <li><img src="/3.svg" alt="" /></li>
                            <li><img src="/4.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-20 sm:gap-10 md:grid-cols-4'>
                        <ul className='flex flex-col gap-6'>
                            <li className='font-bold tracking-[3px]'>Company</li>
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                        <ul className='flex flex-col gap-6'>
                            <li className='font-bold tracking-[3px]'>Help</li>
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                        <ul className='flex flex-col gap-6'>
                            <li className='font-bold tracking-[3px]'>FAQ</li>
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                        <ul className='flex flex-col gap-6'>
                            <li className='font-bold tracking-[3px]'>RESOURCES</li>
                            <li>Free eBooks</li>
                            <li>Development Tutorial</li>
                            <li>How to - Blog</li>
                            <li>YouTube Playlist</li>
                        </ul>
                    </div>


                </div>
                <div className='px-5'>
                    <hr className='container mx-auto my-5 text-[#c5c3c3]' />
                </div>
                <div className='container mx-auto flex flex-col sm:flex-row items-center justify-between'>
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className='flex items-center'>
                        <img src="/Badge.svg" alt="" />
                        <img src="/Badge (1).svg" alt="" />
                        <img src="/Badge (2).svg" alt="" />
                        <img src="/Badge (3).svg" alt="" />
                        <img src="/Badge (4).svg" alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer