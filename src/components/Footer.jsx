import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-5 py-10 mt-auto'>
            <div className="container mx-auto px-2">
                <div className="text-2 text-xl font-semibold">Versel Resolve Hotel</div>
                <div className="flex flex-col gap-y-5 lg:flex-row mt-5 justify-between">
                    <div className="flex gap-x-5">
                        <img src="icon-footer/01.svg" alt="" />
                        <div className="">
                            <div className="text-xl text-white">+38 096 965-55-89</div>
                            <div className="text-xl text-white">+38 096 965-55-89</div>
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <img src="icon-footer/03.svg" alt="" />
                        <div className="">
                            <div className="text-xl text-white">versel_resolve@gmail.com</div>
                            <div className="text-xl text-white">versel_resolve@gmail.com</div>
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <img src="icon-footer/02.svg" alt="" />
                        <div className="">
                            <div className="text-xl text-white">м. Дніпро</div>
                            <div className="text-xl text-white">вул. Сагайдачного, 6</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
