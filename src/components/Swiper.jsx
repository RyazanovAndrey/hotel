// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            grabCursor={true}
            breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },  
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        >
            <SwiperSlide>
                <div className="bg-4 rounded-xl p-5">
                    <div className="flex gap-x-5">
                        <img src="face-1.png" alt="" />
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-sm sm:text-xl font-semibold">Дитро Голуб</div>
                            <span>юрист</span>
                        </div>
                    </div>
                    <p className='text-sm text-6 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde sint facere inventore, doloribus nam quibusdam ipsam quis! Atque, accusantium!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-4 rounded-xl p-5">
                    <div className="flex gap-x-5">
                        <img src="face-2.png" alt="" />
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-sm sm:text-xl font-semibold">Юлія Ігнатенко</div>
                            <span>юрист</span>
                        </div>
                    </div>
                    <p className='text-sm text-6 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde sint facere inventore, doloribus nam quibusdam ipsam quis! Atque, accusantium!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-4 rounded-xl p-5">
                    <div className="flex gap-x-5">
                        <img src="face-3.png" alt="" />
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-sm sm:text-xl font-semibold">Сергій Коновал</div>
                            <span>юрист</span>
                        </div>
                    </div>
                    <p className='text-sm text-6 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde sint facere inventore, doloribus nam quibusdam ipsam quis! Atque, accusantium!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-4 rounded-xl p-5">
                    <div className="flex gap-x-5">
                        <img src="face-1.png" alt="" />
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-sm sm:text-xl font-semibold">Дитро Голуб</div>
                            <span>юрист</span>
                        </div>
                    </div>
                    <p className='text-sm text-6 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde sint facere inventore, doloribus nam quibusdam ipsam quis! Atque, accusantium!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-4 rounded-xl p-5">
                    <div className="flex gap-x-5">
                        <img src="face-1.png" alt="" />
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-sm sm:text-xl font-semibold">Дитро Голуб</div>
                            <span>юрист</span>
                        </div>
                    </div>
                    <p className='text-sm text-6 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde sint facere inventore, doloribus nam quibusdam ipsam quis! Atque, accusantium!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-4 rounded-xl p-5">
                    <div className="flex gap-x-5">
                        <img src="face-1.png" alt="" />
                        <div className="w-full flex flex-col justify-center">
                            <div className="text-sm sm:text-xl font-semibold">Дитро Голуб</div>
                            <span>юрист</span>
                        </div>
                    </div>
                    <p className='text-sm text-6 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde sint facere inventore, doloribus nam quibusdam ipsam quis! Atque, accusantium!</p>
                </div>
            </SwiperSlide>
           
        </Swiper>
    );
};