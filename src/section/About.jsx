import React from 'react';

const About = () => {
    return (
        <section className='py-[150px]'>
            <div className="container mx-auto px-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <img className='rounded-xl' src="home-about.jpg" width={550} alt="" />
                    </div>
                    <div>
                        <span className='text-xl lg:text-3xl my-5 block'>О нас</span>
                        <h2 className='text-2xl md:text-4xl font-bold text-3 mt-2 mb-14'>Найбільший готельний комплекс із щирим вибором додаткових послуг</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse. Quod tenetur, eaque fugiat in reiciendis mollitia accusantium libero repellendus nobis illo temporibus, nesciunt voluptates, possimus voluptate magnam. Quas facere, iure non provident est perferendis ea veniam voluptatem soluta? Quas impedit, doloremque voluptatem expedita id aperiam architecto. Sequi, hic unde!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
