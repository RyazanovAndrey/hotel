import React from 'react';
import Crumbs from '../components/Crumbs';

const ContactsPage = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <section className='bg-[url("../about.jpg")] min-h-[250px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <section className='py-[100px]'>
                <div className="container mx-auto px-5">
                    <h2 className='text-2xl font-semibold'>Як нас знайти та зв’язатися</h2>
                    <p className='text-[#7D7C7C] mt-10 mb-35'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae dolorum excepturi itaque quidem accusamus. Labore molestias, repudiandae eius quam fugiat autem quisquam dolor in beatae et asperiores, odit reprehenderit dolore! Dolor, quae! Nihil, aliquam esse architecto accusantium tenetur atque ipsum sapiente quidem, consectetur ex nobis eaque iure quae, neque laboriosam?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                        <img className='rounded-xl' src="contacts-1.jpg" alt="" />
                        <form action="" className='space-y-3'>
                            <h3 className='text-2xl mb-5'>Відправити повідомлення</h3>
                            <input className='border border-4 h-[50px] w-full pl-3 rounded-xl focus:outline-0' type="text" placeholder='Ім’я' />
                            <input className='border border-4 h-[50px] w-full pl-3 rounded-xl focus:outline-0' type="text" placeholder='Телефон' />
                            <textarea className='border border-4 h-[50px] w-full pl-3 rounded-xl focus:outline-0' name="" id=""></textarea>
                            <button onClick={handleSubmit} className='bg-5 text-white py-4 px-10 rounded-lg cursor-pointer text-lg flex items-center gap-x-2'>Замовити номер</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactsPage;
