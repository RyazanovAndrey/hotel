import React from 'react';
import Home from '../section/Home';
import About from '../section/About';
import Services from '../section/Services';
import Rooms from '../section/Rooms';
import AboutHotel from '../section/AboutHotel';
import Reviews from '../section/Reviews';

const HomePage = () => {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Rooms />
            <AboutHotel />
            <Reviews />
        </>
    );
}

export default HomePage;
