import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirm = ({ setConfirmModal }) => {

    const navigate = useNavigate()
    const widthPopup = window.innerWidth - document.documentElement.clientWidth + 'px'

    const cofirmWindow = () => {
        setConfirmModal(false)
        localStorage.clear()
        navigate('/hotel/room')
    }

    useEffect(() => {
        
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = widthPopup

        return () => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = '0px'
        };
    }, []);

    return (
        <div className='fixed inset-0 bg-black/50 grid place-items-center'>
            <div className="bg-white p-4 rounded-xl max-w-[350px] space-y-5">
                <p className='text-center text-2xl text-1 font-semibold'>Бронювання підтверджено</p>
                <p className='text-center'>Наш менеджер зв'яжеться з вами в найближчий час</p>
                <button onClick={cofirmWindow} className='w-full bg-1 rounded-lg text-white py-4 mt-4 cursor-pointer'>Закрити</button>
            </div>
        </div>
    );
}

export default Confirm;
