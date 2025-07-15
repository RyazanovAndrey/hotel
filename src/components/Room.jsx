import { useContext } from 'react';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { BaseLink } from '../LinkContext';
import { LuCalendarDays } from 'react-icons/lu';


const Room = ({ id, title, desc, image, price }) => {

    const link = useContext(BaseLink)
    const navigate = useNavigate()

    const addToLocal = () => {
        const roomCheckout = { id, title, desc, image, price }
        localStorage.setItem('checkout', JSON.stringify(roomCheckout))
        navigate(link + 'checkout')
    }

    return (
        <div className='rounded-2xl overflow-hidden shadow-sm'>
            <div className="relative">
                <Link to={link + `room/${id}`}>
                    <img src={image} className='cursor-pointer w-full' alt="" />
                </Link>
                <div className="absolute -bottom-10 left-0 w-full flex justify-center">
                    <div className="flex md:flex-col lg:flex-row gap-3">
                        <p className='p-3 bg-4 text-lg rounded-lg flex items-center gap-x-3 font-medium'><RiMoneyDollarCircleLine />{price}</p>
                        <button onClick={addToLocal} className='p-3 bg-1 text-lg text-white rounded-lg inline-flex items-center gap-x-3 cursor-pointer'><LuCalendarDays />Замовити</button>
                    </div>
                </div>
            </div>
            <div className="p-4 mt-10">
                <div className="text-xl font-semibold hover:underline"><Link to={link + `room/${id}`}>{title}</Link></div>
                <p className='text-[#7D7C7C] my-3'>{desc.slice(0, 50)}</p>
            </div>
        </div>
    );
}

export default Room;
