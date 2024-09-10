import { useEffect, useRef } from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';
import { NavLink, useLocation } from 'react-router-dom';
import { PiStudentFill } from 'react-icons/pi';
import { IoIosLogOut } from 'react-icons/io';
import ShinyButton from '@/components/magicui/shiny-button';
import logo from '@/assets/images/Sfer 1.png';

interface SidebarProps {
    sidebarOpen: boolean;
    isOpenModal?: boolean;
    setSidebarOpen: (arg: boolean) => void;
    setIsOpenModal?: (arg: boolean) => void;
}

const MenuItem = ({ title, to, pathname, icon }: { pathname: string, icon: any, title: string, to: string }) => {
    return (
        <NavLink className={'text-black bg-[#6A9C89]'} to={to}>
            <div
                className={`py-3 px-4 my-3 ${pathname === to ? 'bg-[#20CC6D] group relative shadow flex items-center gap-2.5 font-medium text-black duration-300 ease-in-out cursor-pointer border-none rounded-lg' : 'bg-white hover:opacity-70 group relative shadow flex items-center gap-2.5 font-medium text-black duration-300 ease-in-out hover:bg-[#DAFBED] cursor-pointer border-stroke p-3 rounded-lg'}`}
            >
                {icon}
                {title}
            </div>
        </NavLink>
    );
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, isOpenModal, setIsOpenModal }: SidebarProps) => {
    const location = useLocation();
    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            ) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    const toggleModal = () => {
        if (setIsOpenModal && isOpenModal) setIsOpenModal(!isOpenModal);
    };

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-10 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#C4DAD2] shadow-4 duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="flex justify-start items-center gap-2 px-6 pb-5.5 lg:pb-6.5">
                <NavLink to="/" className={'hidden lg:inline'}>
                    <img src={logo} alt="Sfera" className='w-46 pt-4 flex justify-center items-center' />
                </NavLink>
            </div>
            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mt-20 py-4 px-4 lg:mt-8 lg:px-6">
                    <div className='flex flex-col'>
                        <ul className="mb-6 flex flex-col">
                            <li>
                                <MenuItem
                                    title='Dashboard'
                                    icon={<LuLayoutDashboard size={20} />}
                                    pathname={location.pathname}
                                    to='/admin/dashboard'
                                />
                                <MenuItem
                                    title='Lesson'
                                    icon={<PiStudentFill size={20} />}
                                    pathname={location.pathname}
                                    to='/course'
                                />
                            </li>
                        </ul>
                        <ShinyButton
                            onClick={toggleModal}
                            icon={<IoIosLogOut size={25} />}
                            text='Logout'
                            className='bg-blue-400'
                        />
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
