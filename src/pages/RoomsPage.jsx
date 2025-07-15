import { useState } from 'react';
import Crumbs from '../components/Crumbs';
import Room from '../components/Room';
import list from '../db.json';

const RoomsPage = () => {

    const [sortTab, setSortTab] = useState('all');

    const sortTabList = [
        { title: 'Всі', room: 'all' },
        { title: 'Одномісний', room: 1 },
        { title: 'Двомісний', room: 2 },
        { title: 'Люкс', room: 3 },
        { title: 'Апартаменти', room: 4 },
    ]

    const sortRooms = list.rooms.filter(item => sortTab == 'all' ? item : item.rooms == sortTab)

    return (
        <>
            <section className='bg-[url("./public/rooms.jpg")] min-h-[250px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <section className="container mx-auto px-2 py-10">
                <ul className='flex flex-wrap gap-2'>
                    {sortTabList.map(item => (
                        <li onClick={() => setSortTab(item.room)} className={`py-3 px-4 border border-2 rounded-xl cursor-pointer ${sortTab == item.room ? 'bg-2 text-white' : ''}`}>{item.title}</li>
                    ))}
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
                    <>
                        {sortRooms.map(item => (
                            <Room key={item.id} {...item} />
                        ))}
                    </>
                </div>
            </section>
        </>
    );
}

export default RoomsPage;
