
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function SwiperComments() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                autoplay={true}

                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },
                }}

                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='max-w-100 w-full px-8 pt-7 flex flex-col gap-1.75 rounded-[20px] h-60 border border-[#0000001A]'>
                        <span><img src="/Frame 10.svg" alt="" /></span>
                        <h4 className='text-[20px] font-bold flex items-center gap-2'>Sarah M.<img src="/Frame (3).svg" alt="" /></h4>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-100 w-full px-8 pt-7 flex flex-col gap-1.75 rounded-[20px] h-60 border border-[#0000001A]'>
                        <span><img src="/Frame 10.svg" alt="" /></span>
                        <h4 className='text-[20px] font-bold flex items-center gap-2'>Sarah M.<img src="/Frame (3).svg" alt="" /></h4>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-100 w-full px-8 pt-7 flex flex-col gap-1.75 rounded-[20px] h-60 border border-[#0000001A]'>
                        <span><img src="/Frame 10.svg" alt="" /></span>
                        <h4 className='text-[20px] font-bold flex items-center gap-2'>Sarah M.<img src="/Frame (3).svg" alt="" /></h4>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-100 w-full px-8 pt-7 flex flex-col gap-1.75 rounded-[20px] h-60 border border-[#0000001A]'>
                        <span><img src="/Frame 10.svg" alt="" /></span>
                        <h4 className='text-[20px] font-bold flex items-center gap-2'>Sarah M.<img src="/Frame (3).svg" alt="" /></h4>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-100 w-full px-8 pt-7 flex flex-col gap-1.75 rounded-[20px] h-60 border border-[#0000001A]'>
                        <span><img src="/Frame 10.svg" alt="" /></span>
                        <h4 className='text-[20px] font-bold flex items-center gap-2'>Sarah M.<img src="/Frame (3).svg" alt="" /></h4>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-100 w-full px-8 pt-7 flex flex-col gap-1.75 rounded-[20px] h-60 border border-[#0000001A]'>
                        <span><img src="/Frame 10.svg" alt="" /></span>
                        <h4 className='text-[20px] font-bold flex items-center gap-2'>Sarah M.<img src="/Frame (3).svg" alt="" /></h4>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='max-w-100 w-full px-8 pt-7 flex flex-col gap-1.75 rounded-[20px] h-60 border border-[#0000001A]'>
                        <span><img src="/Frame 10.svg" alt="" /></span>
                        <h4 className='text-[20px] font-bold flex items-center gap-2'>Sarah M.<img src="/Frame (3).svg" alt="" /></h4>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
