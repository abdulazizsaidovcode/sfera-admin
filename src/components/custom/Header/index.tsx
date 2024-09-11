import {useState} from "react";
import DropdownUser from './DropdownUser';
import {IoNotifications} from "react-icons/io5";
import {AiFillMessage} from "react-icons/ai";
import {RxDashboard} from "react-icons/rx";
import {useNavigate} from "react-router-dom";
import {MdCastForEducation} from "react-icons/md";
import {PiGlobeDuotone} from "react-icons/pi";
import {SiQuizlet} from "react-icons/si";

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(true)
    const closeMenu = () => setIsOpen(false)
    return (
        <header className="sticky top-0 z-999 flex w-full bg-lighterGreen drop-shadow-1">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className="z-999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
                    >
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                            <span className="du-block absolute right-0 h-full w-full">
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ${
                                        !props.sidebarOpen && '!w-full delay-300'
                                    }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ${
                                        !props.sidebarOpen && 'delay-400 !w-full'
                                    }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ${
                                        !props.sidebarOpen && '!w-full delay-500'
                                    }`}
                                ></span>
                            </span>
                            <span className="absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ${
                                        !props.sidebarOpen && '!h-0 !delay-[0]'
                                    }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ${
                                        !props.sidebarOpen && '!h-0 !delay-200'
                                    }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                </div>
                <div className="hidden sm:block"></div>
                <div className="flex items-center gap-4">
                    <RxDashboard
                        size={26}
                        className={`text-whiten hover:opacity-70 duration-300 hover:cursor-pointer ${isOpen && 'opacity-70'}`}
                        onClick={() => {
                            openMenu()
                            if (isOpen) closeMenu()
                        }}
                    />
                    <IoNotifications
                        size={26}
                        className={`text-whiten hover:opacity-70 duration-300 hover:cursor-pointer`}
                    />
                    <AiFillMessage
                        size={26}
                        className={`text-whiten hover:opacity-70 duration-300 hover:cursor-pointer mr-4`}
                    />
                    <DropdownUser/>
                </div>

                {isOpen && (
                    <div
                        className="absolute right-70 top-18 w-80 bg-black text-white rounded-2xl shadow-lg shadow-graydark p-4 grid grid-cols-3 gap-4 z-999">
                        <div
                            className="flex flex-col items-center hover:opacity-70 duration-300 cursor-pointer"
                            onClick={() => {
                                sessionStorage.setItem('admin_roles', 'ADMIN_EDU')
                                navigate('/edu/dashboard')
                                closeMenu()
                            }}
                        >
                            <MdCastForEducation className="h-10 w-10"/>
                            <span className="text-xs mt-2">Sfera Edu</span>
                        </div>
                        <div
                            className="flex flex-col items-center hover:opacity-70 duration-300 cursor-pointer"
                            onClick={() => {
                                sessionStorage.setItem('admin_roles', 'ADMIN_ONLINE')
                                navigate('/online/dashboard')
                                closeMenu()
                            }}
                        >
                            <PiGlobeDuotone className="h-10 w-10"/>
                            <span className="text-xs mt-2">Sfera Online</span>
                        </div>
                        <div
                            className="flex flex-col items-center hover:opacity-70 duration-300 cursor-pointer"
                            onClick={() => {
                                sessionStorage.setItem('admin_roles', 'ADMIN_QUIZ')
                                navigate('/quiz/dashboard')
                                closeMenu()
                            }}
                        >
                            <SiQuizlet className="h-10 w-10"/>
                            <span className="text-xs mt-2">Sfera Quiz</span>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
