import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BaseLink } from '../LinkContext';

const Crumbs = () => {

   const location = useLocation()
   const crumbsMss = location.pathname.split('/').filter(item => item !== '')
   let currentLink = ''
   const link = useContext(BaseLink)

   const crumbsList = {
    "about" : "О нас",
    "room" : "Наші номери",
    "contacts" : "Контакти",
    "checkout" : "Замовлення",
    "blog" : "Блог",
   }

    return (
        <div className='text-center mt-24'>
            <div className="mt-5">
                <Link className='text-white' to={link}>Головна | </Link>
                {crumbsMss.map(item => {
                    currentLink = currentLink + `/${item}`
                    return <Link to={currentLink} className='text-white'>{crumbsList[item]}</Link>
                })}
            </div>
        </div>
    );
}

export default Crumbs;
