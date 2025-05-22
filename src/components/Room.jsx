import React, { useContext } from 'react';
import { RiDatabaseLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { BaseLink } from '../LinkContext';


const Room = ({ id, title, desc, image, price, services }) => {

    const link = useContext(BaseLink)

    return (
        <div className='rounded-2xl overflow-hidden shadow-sm'>
            <div className="relative">
                <Link to={link + `room/${id}`}>
                    <img src={image} className='cursor-pointer w-full' alt="" />
                </Link>
                <div className="absolute -bottom-10 left-0 w-full flex justify-center">
                    <div className="flex md:flex-col lg:flex-row gap-3">
                        <p className='py-4 px-6 bg-4 text-2xl rounded-lg flex items-center gap-x-3 font-medium'><RiMoneyDollarCircleLine />{price}</p>
                        <button className='py-4 px-6 bg-1 text-xl text-white rounded-lg flex items-center gap-x-3 cursor-pointer'><RiDatabaseLine />Замовити</button>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-10">
                <div className="text-xl font-semibold hover:underline"><Link to={link + `room/${id}`}>{title}</Link></div>
                <p className='text-[#7D7C7C] my-3'>{desc}</p>
                <div className="flex gap-2 flex-wrap">
                    {services.map((item, i) => (
                        <div key={i} className="border border-2 py-3 px-4 rounded-2xl">{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Room;
