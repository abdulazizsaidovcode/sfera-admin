import {LuLayoutDashboard} from "react-icons/lu";
import {PiGlobeDuotone, PiStudentFill} from "react-icons/pi";
import {MdCastForEducation, MdOutlineCategory} from "react-icons/md";
import {SiCoursera, SiQuizlet, SiTestcafe} from "react-icons/si";
import {FaCompress, FaLayerGroup} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";
import {IThead} from "@/components/custom/tables/table.tsx";
import {TbHeartRateMonitor} from "react-icons/tb";
import {VscFileSubmodule} from "react-icons/vsc";

const admin_role = sessionStorage.getItem("admin_roles");

// ==============ADMIN ROLE TANLASH UCHUN SITE CARD DATA==============
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

// ===============SIDEBAR DATA================
export const sideData = {
    quizData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/quiz/dashboard'},
        {title: 'Yo\'nalishlar', icon: <MdOutlineCategory size={20}/>, path: '/quiz/category'},
        {title: 'Test', icon: <SiTestcafe size={20}/>, path: '/quiz/test'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/quiz/users'},
        {title: 'Natijalar', icon: <FaCompress size={20}/>, path: '/quiz/result'},
        {title: 'Bildirishnoma', icon: <IoNotifications size={20}/>, path: '/quiz/notification'},
    ],
    onlineData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/online/dashboard'},
        {title: 'Kurslar', icon: <SiCoursera size={20}/>, path: '/online/course'},
        {title: 'Module', icon: <VscFileSubmodule size={20}/>, path: '/online/module'},
        {title: 'Darslar', icon: <VscFileSubmodule size={20}/>, path: '/online/lesson'},
        {title: 'Test', icon: <SiTestcafe size={20}/>, path: '/online/test'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/online/users'},
        {title: 'Bildirishnoma', icon: <IoNotifications size={20}/>, path: '/online/notification'},
    ],
    eduData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/edu/dashboard'},
        {title: 'Kurslar', icon: <SiCoursera size={20}/>, path: '/edu/course'},
        {title: 'Module', icon: <VscFileSubmodule size={20}/>, path: '/edu/module'},
        {title: 'Darslar', icon: <VscFileSubmodule size={20}/>, path: '/edu/lesson'},
        {title: 'Guruhlar', icon: <FaLayerGroup size={20}/>, path: '/edu/group'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/edu/users'},
        {title: 'Baholar', icon: <TbHeartRateMonitor size={20}/>, path: '/edu/rate'},
        {title: 'Bildirishnoma', icon: <IoNotifications size={20}/>, path: '/edu/notification'},
    ],
};

// ===================THEAD DATA==================
// dashboard top group
export const topGroupEdu: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Guruh nomi'},
    {id: 2, name: 'O\'quvchilar soni'},
    {id: 3, name: 'Guruh umumiy bali'},
];

// dashboard top teacher
export const topTeacherEdu: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Guruh nomi'},
    {id: 2, name: 'O\'quvchilar soni'},
    {id: 3, name: 'Guruh umumiy bali'},
];

// dashboard top student
export const topStudentEdu: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'F.I.O'},
    {id: 2, name: 'Guruh nomi'},
    {id: 3, name: 'Umumiy bali'},
];

// user tables head data
export const userTableHead: IThead[] = [
    {id: 1, name: 'ID'},
    {id: 7, name: 'Rasm'},
    {id: 2, name: 'Ismi'},
    {id: 3, name: 'Familiyasi'},
    {id: 5, name: 'Telefon raqami'},
    {id: 7, name: 'Roli'},
    {id: 6, name: 'Xarakat'},
]

export const testThead: IThead[] = [
    // {id: 4, name: 'ID'},
    {id: 1, name: 'Savol nomi'},
    {id: 2, name: `${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish nomi' : 'Lesson nomi'}`},
    {id: 3, name: 'Xarakat'},
];

export const groupThead: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Guruh nomi'},
    {id: 2, name: 'O\'qituvchi'},
    {id: 3, name: 'Ochilgan sanasi'},
    {id: 4, name: 'Activligi'},
    {id: 6, name: 'Harakatlar'},
];

export const rateThead: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Tuliq ismi'},
    {id: 6, name: 'Guruh nomi'},
    {id: 2, name: 'Kurs nomi'},
    {id: 3, name: 'To\'plagan bali'},
    {id: 4, name: 'Reytingi'},
];

export const lessonThead: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Dars nomi'},
    {id: 6, name: 'Tavsifi'},
    {id: 2, name: 'Vedio linki'},
    {id: 3, name: 'Vedio davomiyligi'},
    {id: 4, name: 'Foydalanuvchi aktivligi'},
];