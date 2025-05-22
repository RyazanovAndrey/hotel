import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Crumbs = () => {

   const location = useLocation()
   const crumbsMss = location.pathname.split('/').filter(item => item)

   const crumbsList = {
    "/about" : "О нас",
    "/room" : "Наші номери",
    "/contacts" : "Контакти",
   }

   const LinkList = {
    "about" : "О нас",
    "room" : "Наші номери",
    "contacts" : "Контакти",
   }

    return (
        <div className='text-center'>
            <div className="text-3xl font-bold text-white">{crumbsList[location.pathname] || 'Деталі номера'}</div>
            <Link className='text-white' to={'/'}>Головна </Link>
            {crumbsMss.map((item, i) => {
                const link = `/${crumbsMss.slice(0, i + 1).join('/')}`
                return <Link className='text-white' to={link}>/ {LinkList[item]}</Link>
            })}
        </div>
    );
}

export default Crumbs;
