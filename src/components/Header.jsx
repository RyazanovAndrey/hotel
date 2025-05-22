import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { RiHome9Line } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import Modal from './Modal';
import MobileMenu from './MobileMenu';

const Header = () => {

    const location = useLocation()

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [mobileMMenu, setMobileMMenu] = useState(false);

    // const activeLink = ({ isActive }) => {
    //   return isActive ? 'text-black' : 'text-[#D5D5D5]'
    // }

    const activePath = [
        {href: '/hotel/', name: 'Головна'},
        {href: '/hotel/about', name: 'О нас'},
        {href: '/hotel/room', name: 'Наші номери'},
        {href: '/hotel/contacts', name: 'Контакти'},
    ]

    return (
        <header className='fixed w-full top-7 left-0 z-90 px-5'>
            <div className="relative container mx-auto px-5 py-3 flex items-center justify-between bg-white rounded-xl shadow-2xl">
                <div className="md:text-2xl">Versel Resolve</div>
                <ul className='hidden lg:flex gap-x-15 text-lg'>
                    {activePath.map(item => {
                        return <li><Link to={item.href} className={item.href == location.pathname ? 'text-black' : 'text-[#D5D5D5]'}>{item.name}</Link></li>
                    })}
                    {/* <li><NavLink to={'/hotel'} className={activeLink}>Головна</NavLink></li>
                    <li><NavLink to={'/hotel/about'} className={activeLink}>О нас</NavLink></li>
                    <li><NavLink to={'/hotel/room'} className={activeLink}>Наші номери</NavLink></li>
                    <li><NavLink to={'/hotel/contacts'} className={activeLink}>Контакти</NavLink></li> */}
                </ul>
                <button onClick={() => setIsOpenModal(true)} className='bg-5 flex flex-none text-white py-4 px-10 rounded-lg cursor-pointer text-lg items-center gap-x-2'><RiHome9Line className='hidden md:block text-2xl' />
                Замовити номер</button>
                {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
                <button onClick={() => setMobileMMenu(!mobileMMenu)} className='text-6xl lg:hidden'><IoIosMenu /></button>
                {mobileMMenu && <MobileMenu setMobileMMenu={setMobileMMenu} />}
            </div>
        </header>
    );
}

export default Header;
