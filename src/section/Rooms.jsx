import React, { useEffect, useState } from 'react';
import Room from '../components/Room';
import { Link } from 'react-router-dom';

const Rooms = () => {

    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        fetch('https://6819b4cc1ac115563505df66.mockapi.io/projects?page=1&limit=4')
            .then(res => res.json()).then(data => setRooms(data))
    }, [])

    return (
        <section className='py-[150px]'>
            <div className="container mx-auto px-2">
                <span className='text-xl lg:text-3xl text-center w-full inline-block'>Що ми пропонуємо</span>
                <h2 className='text-2xl md:text-4xl font-bold text-3 mt-2 mb-14 text-center w-full inline-block'>Наші найкращі номери</h2>
                <div className="flex justify-center text-center">
                    <p className='max-w-[830px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet, maxime rerum saepe distinctio fugit ratione ullam quam! Minus, dolore?</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                    {rooms && (
                        <>
                            {rooms.map((item, i) => (
                                <Room key={i} {...item} />
                            ))}
                        </>
                    )}
                </div>
                <Link to={'/room'} className='mt-10 text-center block text-2xl hover:underline'>Усі номери готелю</Link>
            </div>
        </section>
    );
}

export default Rooms;
