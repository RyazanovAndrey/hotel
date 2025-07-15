import React, { useEffect, useRef } from 'react';

const Modal = ({ setIsOpenModal }) => {

    const refModal = useRef(null)

    const closeModal = (event) => {
        if (event.target == refModal.current) {
            setIsOpenModal(false)
        }
    }

    const widthPopup = window.innerWidth - document.documentElement.clientWidth + 'px'

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = widthPopup

        return () => {
            document.body.style.overflow = ''
            document.body.style.paddingRight = '0px'
        };
    }, []);

    return (
        <div className='fixed inset-0 bg-black/50 grid place-items-center' ref={refModal} onClick={closeModal}>
            <form action="" className='bg-white p-4 rounded-xl max-w-[420px] space-y-5'>
                <div className="text-xl text-center mb-5">Замовити номер</div>
                <input type="text" className='w-full h-[50px] bg-[#FAFAFA] pl-5 rounded-lg' placeholder='Ім’я' />
                <input type="text" className='w-full h-[50px] bg-[#FAFAFA] pl-5 rounded-lg' placeholder='Телефон' />
                <button onClick={() => setIsOpenModal(false)} type='submit' className='bg-5 w-full py-5 rounded-lg text-white cursor-pointer'>Підтвердити </button>
            </form>
        </div>
    );
}

export default Modal;
