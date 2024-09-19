import {LuLayoutDashboard} from "react-icons/lu";
import {PiGlobeDuotone, PiStudentFill} from "react-icons/pi";
import {MdCastForEducation, MdOutlineCategory} from "react-icons/md";
import {SiCoursera, SiQuizlet, SiTestcafe} from "react-icons/si";
import {FaLayerGroup} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";
import {IThead} from "@/components/custom/tables/table.tsx";

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
    ],
    onlineData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/online/dashboard'},
        {title: 'Test', icon: <SiTestcafe size={20}/>, path: '/online/test'},
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

// dashboard thead data vaqtinchalik
export const dashboardThead: IThead[] = [
    {id: 5, name: 'T/r'},
    {id: 1, name: 'thead 1'},
    {id: 2, name: 'thead 2'},
    {id: 3, name: 'thead 3'},
    {id: 4, name: 'thead 4'},
];

// dashboard tbody data vaqtinchalik
export const dashboardTbody = [
    {id: 1, tr: '1', thead1: 'Row 1 Data 1', thead2: 'Row 1 Data 2', thead3: 'Row 1 Data 3', thead4: 'Row 1 Data 4'},
    {id: 2, tr: '2', thead1: 'Row 2 Data 1', thead2: 'Row 2 Data 2', thead3: 'Row 2 Data 3', thead4: 'Row 2 Data 4'},
    {id: 3, tr: '3', thead1: 'Row 3 Data 1', thead2: 'Row 3 Data 2', thead3: 'Row 3 Data 3', thead4: 'Row 3 Data 4'},
    {id: 4, tr: '4', thead1: 'Row 4 Data 1', thead2: 'Row 4 Data 2', thead3: 'Row 4 Data 3', thead4: 'Row 4 Data 4'}
];

// dashboard line chart data vaqtinchalik
export const lineChartData = {
    title: 'Hafatalik o\'sish',
    seriesTitle: 'Kunlik sts',
    category: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
    seriesData: [166, 189, 145, 567, 864, 657, 987]
}

// notification card data vaqtinchalik
export const notificationData = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "#",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "#",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "#",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "#",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "#",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "#",
    },
];


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