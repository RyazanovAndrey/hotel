import React from 'react';
import About from '../section/About';
import Crumbs from '../components/Crumbs';
import AboutHotel from '../section/AboutHotel';
import Blog from '../section/Blog';

const AboutPage = () => {
    return (
        <>
            <section className='bg-[url("./public/about.jpg")] min-h-[250px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <About />
            <AboutHotel />
            <Blog />
        </>
    );
}

export default AboutPage;
