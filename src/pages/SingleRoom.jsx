import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Crumbs from '../components/Crumbs';
import { RiDatabaseLine } from 'react-icons/ri';
import Blog from '../section/Blog';

const SingleRoom = () => {

    const { id } = useParams()
    const [singleRioom, setSingleRioom] = useState(null);

    console.log(singleRioom)

    useEffect(() => {
        fetch(`https://6819b4cc1ac115563505df66.mockapi.io/projects/${id}`).then(res => res.json())
            .then(data => setSingleRioom(data))
    }, [])

    return (
        <>
            <section className='bg-[url("../room-detail.jpg")] min-h-[350px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <section className="container mx-auto px-2 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="flex gap-x-4">
                        <img src={'../single-1-1.jpg'} className='w-[380px] h-[500px] rounded-xl' alt="" />
                        <div className="flex flex-col justify-between">
                            <img src={'../single-1-2.jpg'} className='w-full rounded-xl' alt="" />
                            <img src={'../single-1-3.jpg'} className='w-full rounded-xl' alt="" />
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex gap-4 flex-wrap'>
                            {singleRioom && singleRioom.services.map(item => (
                                <li className='py-2 px-4 border border-2 rounded-xl'>{item}</li>
                            ))}
                        </ul>
                        <h3 className='text-3xl my-8'>{singleRioom && singleRioom.title}</h3>
                        <p className='text-[#7D7C7C] my-10'>{singleRioom && singleRioom.desc}</p>
                        <div className="bg-4 py-4 px-10 rounded-xl inline-block text-xl my-5">{singleRioom && singleRioom.price}</div>
                        <button className='py-4 px-6 bg-1 text-xl text-white rounded-lg flex items-center gap-x-3 cursor-pointer'><RiDatabaseLine />Замовити</button>
                    </div>
                </div>
            </section >
        </>
    );
}

export default SingleRoom;
