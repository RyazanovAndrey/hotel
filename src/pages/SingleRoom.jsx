import { useNavigate, useParams } from 'react-router-dom';
import Crumbs from '../components/Crumbs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import list from '../db.json';
import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import { LuCalendarDays, LuCalendarFold } from 'react-icons/lu';
import { BaseLink } from '../LinkContext';
registerLocale('ru', ru)

const SingleRoom = () => {

    const { id } = useParams()
    const link = useContext(BaseLink)
    const singleRioom = list.rooms.find(item => item.id == id)
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const navigate = useNavigate()

    const newSingle = {}

    const roomCheckout = {
        id: singleRioom.id,
        title: singleRioom.title,
        desc: singleRioom.desc,
        image: singleRioom.image,
        price: singleRioom.price
    }

    const addToLocal = () => {
        localStorage.setItem('checkout', JSON.stringify(roomCheckout))
        navigate(link + 'checkout')
    }

    return (
        <>
            <section className='bg-[url("../room-detail.jpg")] min-h-[250px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <section className="container mx-auto px-2 py-10">
                <h3 className='text-3xl font-semibold my-8'>{singleRioom.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div className="flex gap-x-4">
                        <img src={'../single-1-1.jpg'} className='w-[700px] h-[400px] rounded-xl' alt="" />
                    </div>
                    <div className="">
                        <div className="space-y-2">
                            <p className='py-4 px-6 bg-4 text-2xl rounded-lg inline-flex items-center gap-x-3 font-medium w-[300px]'><RiMoneyDollarCircleLine />{singleRioom.price} / ніч</p>
                            <p>Дата заїду</p>
                            <div className="border border-2 rounded-lg w-[300px] flex justify-between items-center px-3">
                                <DatePicker locale='ru' selected={startDate1} onChange={(date) => setStartDate1(date)} dateFormat='dd/MM/yyyy' minDate={new Date()} className='h-[40px] focus:outline-0' />
                                <LuCalendarFold />
                            </div>

                            <p>Дата виїзду</p>
                            <div className="border border-2 rounded-lg w-[300px] flex justify-between items-center px-3">
                                <DatePicker locale='ru' selected={startDate2} onChange={(date) => setStartDate2(date)} dateFormat='dd/MM/yyyy' minDate={new Date()} className='h-[40px] focus:outline-0' />
                                <LuCalendarFold />
                            </div>
                            <button onClick={addToLocal} className='p-3 bg-1 text-lg text-white rounded-lg inline-flex items-center gap-x-3 cursor-pointer'><LuCalendarDays />Замовити</button>
                        </div>
                    </div>
                </div>
                <ul className='flex gap-4 flex-wrap mt-10'>
                    {singleRioom.services.map(item => (
                        <li className='py-2 px-4 border border-2 rounded-xl'>{item}</li>
                    ))}
                </ul>
                <p className='text-[#7D7C7C] my-10'>{singleRioom.desc}</p>
            </section >
        </>
    );
}

export default SingleRoom;