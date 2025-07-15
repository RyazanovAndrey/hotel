import React from 'react';
import { RiDatabaseLine } from "react-icons/ri";

const AboutHotel = () => {
    return (
        <section className='flex flex-col lg:flex-row w-full bg-4'>
            <img src="home-about-1.jpg" alt="" />
            <div className="p-16 mt-10">
                <div className="text-2xl md:text-4xl font-bold text-3 mt-2">Versel Resolve Hotel</div>
                <p className='text-[#7D7C7C] my-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorem! Vel quidem maiores laborum reiciendis itaque impedit assumenda laboriosam id. Fugit, deserunt repellendus? Fuga dignissimos voluptatibus necessitatibus quasi nobis blanditiis nesciunt odit totam ipsam eaque aut quo reprehenderit tenetur, magnam itaque officiis sint cumque provident? Reiciendis dolorum eaque facere ea.</p>
                <button className='py-4 px-6 bg-1 text-xl text-white rounded-lg flex items-center gap-x-3 cursor-pointer'><RiDatabaseLine />Замовити</button>
            </div>
        </section>
    );
}

export default AboutHotel;
