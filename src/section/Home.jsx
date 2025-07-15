import React from 'react';

const Home = () => {
    return (
        <section className='bg-[url("home-bg.jpg")] min-h-[700px] bg-center bg-cover grid place-items-center'>
            <div className="max-w-[650px] text-white text-center">
                <h1 className='text-3xl lg:text-[50px] font-bold'>Чудовий відпочинок за розумною ціною</h1>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error, ducimus beatae culpa illum unde voluptatibus minima neque exercitationem qui.</p>
            </div>
        </section>
    );
}

export default Home;
