import {CalendarIcon, FileTextIcon, InputIcon} from "@radix-ui/react-icons";
import {LuLayoutDashboard} from "react-icons/lu";
import {PiStudentFill} from "react-icons/pi";
import {MdOutlineCategory} from "react-icons/md";
import {SiTestcafe} from "react-icons/si";

// admin role tanlash uchun card data
export const features = [
    {
        Icon: FileTextIcon,
        name: "Sfera Edu",
        description: "Do you want to build your Sfera Edu website data?",
        href: "/edu/dashboard",
        cta: "Next",
        background: <></>,
        className: "h-50",
        onSetRole: () => sessionStorage.setItem('admin_roles', 'ADMIN_EDU')
    },
    {
        Icon: InputIcon,
        name: "Sfera Online",
        description: "Do you want to build your Sfera Online website data?",
        href: "/online/dashboard",
        cta: "Next",
        background: <></>,
        className: "h-50",
        onSetRole: () => sessionStorage.setItem('admin_roles', 'ADMIN_ONLINE')
    },
    {
        Icon: CalendarIcon,
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
        {title: 'Dashboard', icon: <LuLayoutDashboard size={20}/>, path: '/quiz/dashboard'},
        {title: 'Category', icon: <MdOutlineCategory size={20}/>, path: '/quiz/category'},
        {title: 'Test', icon: <SiTestcafe size={20}/>, path: '/quiz/test'},
        {title: 'Users', icon: <PiStudentFill size={20}/>, path: '/quiz/users'},
    ],
    onlineData: [
        {title: 'Dashboard', icon: <LuLayoutDashboard size={20}/>, path: '/online/dashboard'},
    ],
    eduData: [
        {title: 'Dashboard', icon: <LuLayoutDashboard size={20}/>, path: '/edu/dashboard'},
        {title: 'Users', icon: <LuLayoutDashboard size={20}/>, path: '/edu/users'},
        {title: 'Group', icon: <LuLayoutDashboard size={20}/>, path: '/edu/group'},
        {title: 'Notification', icon: <LuLayoutDashboard size={20}/>, path: '/edu/notification'},
        {title: 'Courses', icon: <LuLayoutDashboard size={20}/>, path: '/edu/course'},
    ],
}