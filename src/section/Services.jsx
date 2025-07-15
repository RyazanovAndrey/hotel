import React from 'react';
import servicesList from '../db.json'
import ServCard from '../components/servCard';

const Services = () => {

    return (
        <section className='py-[150px] bg-4'>
            <div className="container mx-auto px-2">
                <span className='text-xl lg:text-3xl text-center w-full inline-block'>Додатково</span>
                <h2 className='text-2xl md:text-4xl font-bold text-3 mt-2 mb-14 text-center w-full inline-block'>Послуги які входять у вартість</h2>
                <div className="flex justify-center text-center">
                    <p className='max-w-[830px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit labore incidunt doloremque deleniti a molestias illum voluptates, vel, libero, quae fugit officiis repudiandae? Recusandae enim placeat unde beatae eligendi neque!</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                    {servicesList.services.map(item => (
                        <ServCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;

