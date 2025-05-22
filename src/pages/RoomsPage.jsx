import React, { useEffect, useState } from 'react';
import Crumbs from '../components/Crumbs';
import MyLoader from '../components/MyLoader';
import Room from '../components/Room';

const RoomsPage = () => {

    const [rooms, setRooms] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [sortTab, setSortTab] = useState('all');

    const sortTabList = [
        { title: 'Всі', room: 'all' },
        { title: 'Одномісний', room: 1 },
        { title: 'Двомісний', room: 2 },
        { title: 'Люкс', room: 3 },
        { title: 'Апартаменти', room: 4 },
    ]

    const sortItem = sortTab == 'all' ? '' : `?rooms=${sortTab}`

    const getRooms = async (sort) => {

        try {

            const delay = await new Promise(res => setTimeout(res, 1000))

            const res = await fetch(`https://6819b4cc1ac115563505df66.mockapi.io/projects${sort}`)

            if (!res.ok) {
                throw new Error('Помилка отримання даних...')
            }

            const data = await res.json()

            setRooms(data)
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getRooms(sortItem)
    }, [sortTab])

    return (
        <>
            <section className='bg-[url("../rooms.jpg")] min-h-[350px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <section className="container mx-auto px-2 py-10">
                <ul className='flex flex-wrap gap-2'>
                    {sortTabList.map(item => (
                        <li onClick={() => setSortTab(item.room)} className={`px-6 py-3 border border-2 rounded-xl cursor-pointer ${sortTab == item.room ? 'bg-2 text-white' : ''}`}>{item.title}</li>
                    ))}
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
                    {errorMessage && <p>{errorMessage}</p>}
                    {isLoading ? (
                        <>
                            {[... new Array(4)].map(item => (
                                <MyLoader />
                            ))}
                        </>
                    ) : (
                        <>
                            {rooms.map(item => (
                                <Room key={item.id} {...item} />
                            ))}
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default RoomsPage;
