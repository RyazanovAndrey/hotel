import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BaseLink } from '../LinkContext';

const MobileMenu = ({ setMobileMMenu }) => {

    // const activeLink = ({ isActive }) => {
    //     return isActive ? 'text-xl text-black' : 'text-xl text-[#D5D5D5]'
    // }

    const link = useContext(BaseLink)

    const activePath = [
        { href: link, name: 'Головна' },
        { href: link + 'about', name: 'О нас' },
        { href: link + 'room', name: 'Наші номери' },
        { href: link + 'contacts', name: 'Контакти' },
    ]

    const closeMobileMenu = () => {
        setMobileMMenu(false)
    }

    return (
        <div className='absolute top-[110%] left-0 bg-white p-7 rounded-2xl flex flex-col w-full space-y-10 shadow-md'>
            <ul>
                {activePath.map(item => {
                    return <li><Link onClick={closeMobileMenu} to={item.href} className={item.href == location.pathname ? 'text-black p-5 block text-lg' : 'text-[#D5D5D5] p-5 block text-lg'}>{item.name}</Link></li>
                })}
            </ul>
        </div>
    );
}

export default MobileMenu;
