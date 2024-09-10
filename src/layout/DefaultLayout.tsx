import React, {useState, ReactNode, useEffect} from 'react';
import Header from '../components/custom/Header/index';
import Sidebar from '../components/custom/Sidebar/index';
import {useLocation} from 'react-router-dom';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isVisibleSidebar, setIsVisibleSidebar] = useState<boolean>(false);
    const {pathname} = useLocation();

    useEffect(() => {
        setIsVisibleSidebar(!(pathname.startsWith('/auth')))
    }, [pathname])

    return (
        <div className="bg-[#fff] text-black">
            <div className="flex min-h-screen overflow-hidden">
                {isVisibleSidebar && <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {isVisibleSidebar && <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
