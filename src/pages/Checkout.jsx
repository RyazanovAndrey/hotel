import React, { useContext, useEffect, useState } from 'react';
import Crumbs from '../components/Crumbs';
import Confirm from '../components/Confirm';
import Room from '../components/Room';
import { Link, useNavigate } from 'react-router-dom';
import { BaseLink } from '../LinkContext';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BiCalendarX } from 'react-icons/bi';

const Checkout = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [room, setRoom] = useState(JSON.parse(localStorage.getItem('checkout') || null));
    const link = useContext(BaseLink)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const { name, email, tel } = Object.fromEntries(formData)

        if (!name || !email || !tel) {
            return setErrorMessage('Не всі дані введені!')
        }

        setErrorMessage('')
        setConfirmModal(true)
    }

    const deleteRoom = () => {
        localStorage.clear()
        navigate(link + 'room')
    }

    return (
        <>
            <section className='bg-[url("../about.jpg")] min-h-[250px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <section className='py-[100px]'>
                <div className="container mx-auto px-3">
                    <div className="grid md:grid-cols-2 gap-x-20">
                        <div className="">
                            <h3 className='text-2xl font-medium mb-5'>Підтвердження і оплата</h3>
                            <form action="" className='space-y-5' onSubmit={handleSubmit}>
                                <div className="">
                                    <span className='text-xl'>Ім'я</span>
                                    <input type="text" name='name' className='border w-full border-2 rounded-lg h-[50px] pl-3 focus:outline-0' placeholder="Ім'я" />
                                </div>
                                <div className="">
                                    <span className='text-xl'>Email</span>
                                    <input type="email" name='email' className='border w-full border-2 rounded-lg h-[50px] pl-3 focus:outline-0' placeholder='Email' />
                                </div>
                                <div className="">
                                    <span className='text-xl'>Телефон</span>
                                    <input type="tel" name='tel' className='border w-full border-2 rounded-lg h-[50px] pl-3 focus:outline-0' placeholder='Телефон' />
                                </div>
                                <button className='bg-1 py-4 px-10 rounded-lg text-white cursor-pointer mb-5'>Підтвердити</button>
                            </form>
                            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                        </div>
                        <div className="w-[400px]">

                            <div className='rounded-2xl overflow-hidden shadow-sm'>
                                <div className="relative">
                                    <Link to={link + `room/${room.id}`}>
                                        <img src={room.image} className='cursor-pointer w-full' alt="" />
                                    </Link>
                                    <div className="absolute -bottom-10 left-0 w-full flex justify-center">
                                        <div className="flex md:flex-col lg:flex-row gap-3">
                                            <p className='p-3 bg-4 text-lg rounded-lg flex items-center gap-x-3 font-medium'><RiMoneyDollarCircleLine />{room.price}</p>
                                            <button onClick={deleteRoom} className='p-3 bg-1 text-lg text-white rounded-lg inline-flex items-center gap-x-3 cursor-pointer'><BiCalendarX />Видалити</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 mt-10">
                                    <div className="text-xl font-semibold hover:underline"><Link to={link + `room/${room.id}`}>{room.title}</Link></div>
                                    <p className='text-[#7D7C7C] my-3'>{room.desc.slice(0, 50)}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {confirmModal && <Confirm setConfirmModal={setConfirmModal} />}
            </section>
        </>
    );
}

export default Checkout;

