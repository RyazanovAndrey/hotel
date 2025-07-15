import React from 'react';
import Swiper from '../components/Swiper';

const Reviews = () => {
    return (
        <section className='py-[150px]'>
            <div className="container mx-auto px-2">
                <span className='text-3xl text-center w-full inline-block'>Відгуки</span>
                <h2 className='text-4xl font-bold text-3 mt-2 mb-14 text-center w-full inline-block'>Що говорять про нас клієнти</h2>
                <div className="flex justify-center text-center">
                    <p className='max-w-[830px] text-[#7D7C7C]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit labore incidunt doloremque deleniti a molestias illum voluptates, vel, libero, quae fugit officiis repudiandae? Recusandae enim placeat unde beatae eligendi neque!</p>
                </div>
                <div className="mt-10"><Swiper/></div>
            </div>
        </section>
    );
}

export default Reviews;
