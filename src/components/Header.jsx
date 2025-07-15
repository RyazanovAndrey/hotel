import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiHome9Line } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import Modal from './Modal';
import MobileMenu from './MobileMenu';
import { BaseLink } from '../LinkContext';

const Header = () => {

    const location = useLocation()

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [mobileMMenu, setMobileMMenu] = useState(false);

    const link = useContext(BaseLink)

    const activePath = [
        { href: link, name: 'Головна' },
        { href: link + 'about', name: 'О нас' },
        { href: link + 'room', name: 'Наші номери' },
        { href: link + 'blog', name: 'Блог' },
        { href: link + 'contacts', name: 'Контакти' },
    ]

    return (
        <header className='fixed w-full top-7 left-0 z-40 px-5'>
            <div className="relative container mx-auto px-5 py-3 flex items-center justify-between bg-white rounded-xl shadow-2xl">
                <Link to={link} className='md:text-2xl font-bold'>Versel Resolve</Link>
                <ul className='hidden lg:flex gap-x-15 text-lg'>
                    {activePath.map(item => {
                        return <li><Link to={item.href} className={item.href == location.pathname ? 'text-black' : 'text-[#D5D5D5]'}>{item.name}</Link></li>
                    })}
                </ul>
                <Link to={link + '/room'} className='bg-5 flex flex-none text-white p-3 rounded-lg cursor-pointer items-center gap-x-2'><RiHome9Line className='hidden md:block text-2xl' />Замовити номер</Link>
                {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
                <button onClick={() => setMobileMMenu(!mobileMMenu)} className='text-6xl lg:hidden'><IoIosMenu /></button>
                {mobileMMenu && <MobileMenu setMobileMMenu={setMobileMMenu} />}
            </div>
        </header>
    );
}

export default Header;
