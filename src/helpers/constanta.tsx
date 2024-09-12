import {LuLayoutDashboard} from "react-icons/lu";
import {PiArrowsOutCardinal, PiGlobeDuotone, PiStudentFill} from "react-icons/pi";
import {MdCastForEducation, MdOutlineCategory} from "react-icons/md";
import {SiCoursera, SiQuizlet, SiTestcafe} from "react-icons/si";
import {FaLayerGroup, FaUsers} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";
import {BiCategory} from "react-icons/bi";
import {FaCircleQuestion} from "react-icons/fa6";

// admin role tanlash uchun card data
export const features = [
    {
        Icon: <MdCastForEducation
            className={`h-10 w-10 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75`}/>,
        name: "Sfera Edu",
        description: "Do you want to build your Sfera Edu website data?",
        href: "/edu/dashboard",
        cta: "Next",
        background: <></>,
        className: "h-50",
        onSetRole: () => sessionStorage.setItem('admin_roles', 'ADMIN_EDU')
    },
    {
        Icon: <PiGlobeDuotone
            className={`h-10 w-10 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75`}/>,
        name: "Sfera Online",
        description: "Do you want to build your Sfera Online website data?",
        href: "/online/dashboard",
        cta: "Next",
        background: <></>,
        className: "h-50",
        onSetRole: () => sessionStorage.setItem('admin_roles', 'ADMIN_ONLINE')
    },
    {
        Icon: <SiQuizlet
            className={`h-10 w-10 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75`}/>,
        name: "Sfera Quiz",
        description: "Do you want to build your Sfera Quiz website data?",
        href: "/quiz/dashboard",
        cta: "Next",
        background: <></>,
        className: "h-50",
        onSetRole: () => sessionStorage.setItem('admin_roles', 'ADMIN_QUIZ')
    }
];

// sidebar data
export const sideData = {
    quizData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/quiz/dashboard'},
        {title: 'Yo\'nalishlar', icon: <MdOutlineCategory size={20}/>, path: '/quiz/category'},
        {title: 'Test', icon: <SiTestcafe size={20}/>, path: '/quiz/test'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/quiz/users'},
    ],
    onlineData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/online/dashboard'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/online/users'},
        {title: 'Guruhlar', icon: <FaLayerGroup size={20}/>, path: '/online/group'},
        {title: 'Bildirishnoma', icon: <IoNotifications size={20}/>, path: '/online/notification'},
        {title: 'Kurslar', icon: <SiCoursera size={20}/>, path: '/online/course'},
    ],
    eduData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/edu/dashboard'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/edu/users'},
        {title: 'Guruhlar', icon: <FaLayerGroup size={20}/>, path: '/edu/group'},
        {title: 'Bildirishnoma', icon: <IoNotifications size={20}/>, path: '/edu/notification'},
        {title: 'Kurslar', icon: <SiCoursera size={20}/>, path: '/edu/course'},
    ],
};

// dashboard sts local vaqtinchalik data
export const statisticData = [
    {name: 'Statistic 1', count: 100, icon: <BiCategory className={`text-2xl`}/>},
    {name: 'Statistic 2', count: 150, icon: <FaCircleQuestion className={`text-2xl`}/>},
    {name: 'Statistic 3', count: 153, icon: <PiArrowsOutCardinal className={`text-2xl`}/>},
    {name: 'Statistic 4', count: 1185, icon: <FaUsers className={`text-2xl`}/>},
    {name: 'Statistic 5', count: 56, icon: <BiCategory className={`text-2xl`}/>},
    {name: 'Statistic 6', count: 49, icon: <FaCircleQuestion className={`text-2xl`}/>},
    {name: 'Statistic 7', count: 26, icon: <PiArrowsOutCardinal className={`text-2xl`}/>},
    {name: 'Statistic 8', count: 168, icon: <FaUsers className={`text-2xl`}/>},
]

// dashboard line chart vaqtinchlaik data
export const lineChartData = {
    title: 'Hafatalik o\'sish',
    seriesTitle: 'Kunlik sts',
    category: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
    seriesData: [166, 189, 145, 567, 864, 657, 987]
}