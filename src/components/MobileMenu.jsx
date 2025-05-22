import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ setMobileMMenu }) => {

    const activeLink = ({ isActive }) => {
        return isActive ? 'text-xl text-black' : 'text-xl text-[#D5D5D5]'
    }

    const closeMobileMenu = () => {
        setMobileMMenu(false)
    }

    return (
        <div className='absolute top-[110%] left-0 bg-white p-7 rounded-2xl flex flex-col w-full space-y-10 shadow-md'>
            <NavLink onClick={closeMobileMenu} to={'/'} className={activeLink}>Головна</NavLink>
            <NavLink onClick={closeMobileMenu} to={'/about'} className={activeLink}>О нас</NavLink>
            <NavLink onClick={closeMobileMenu} to={'/room'} className={activeLink}>Наші номери</NavLink>
            <NavLink onClick={closeMobileMenu} to={'/contacts'} className={activeLink}>Контакти</NavLink>
        </div>
    );
}

export default MobileMenu;
