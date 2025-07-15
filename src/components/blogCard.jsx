import React from 'react';
import { Link } from 'react-router-dom';
import { RiCalendarEventLine } from "react-icons/ri";

const BlogCard = ({ image, date, title, desc }) => {

    return (
        <div className='rounded-xl overflow-hidden shadow-md'>
            <div className="relative">
                <img className='w-full' src={image} alt="" />
                <div className="absolute -bottom-5 left-4 bg-1 text-white p-3 rounded-xl flex items-center gap-x-3"><RiCalendarEventLine />{date}</div>
            </div>
            <div className="p-5">
                <div className="text-lg font-medium mt-5">{title}</div>
                <p className='text-[#7D7C7C] my-2'>{desc}</p>
                <Link className='underline' to={''}>Читати повністю</Link>
            </div>
        </div>
    );
}

export default BlogCard;
