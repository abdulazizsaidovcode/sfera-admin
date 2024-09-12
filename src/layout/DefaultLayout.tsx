import React, { useState, ReactNode, useEffect } from 'react';
import Header from '../components/custom/Header/index';
import Sidebar from '../components/custom/Sidebar/index';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '@/components/custom/modal/modal';
import { IoIosLogOut } from 'react-icons/io';
import ShinyButton from '@/components/magicui/shiny-button';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isVisibleSidebar, setIsVisibleSidebar] = useState<boolean>(false);
    const { pathname } = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        setIsVisibleSidebar(!(pathname.startsWith('/auth')))
    }, [pathname])

    const toggleModal = () => setIsOpenModal(!isOpenModal)

    return (
        <div className="bg-[#fff] text-black">
            <div className="flex h-screen overflow-hidden">
                {isVisibleSidebar && <Sidebar toggleModal={toggleModal} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {isVisibleSidebar && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                </div>
            </div>

            <Modal isOpen={isOpenModal} onClose={toggleModal}>
                <div className="w-54 sm:w-64 md:w-96 lg:w-[40rem] flex flex-col gap-3 items-center justify-center">
                    <IoIosLogOut color='#16423C' size={100} />
                    <p className='text-2xl text-center text-black-2'>Siz aniq tizimdan chiqmoqchimisz?</p>
                    <div className='flex gap-3'>
                        <ShinyButton
                            text='Orqaga'
                            className='bg-darkGreen'
                            onClick={toggleModal}
                        />
                        <ShinyButton
                            text='Chiqish'
                            className='bg-darkGreen'
                            onClick={() => {
                                sessionStorage.removeItem('admin_roles')
                                navigate('/auth/login');
                                toggleModal()
                            }}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DefaultLayout;
