import {LuLayoutDashboard} from "react-icons/lu";
import {PiChalkboardTeacherBold, PiGlobeDuotone, PiStudentFill} from "react-icons/pi";
import {MdCastForEducation, MdOutlineCategory, MdPlayLesson} from "react-icons/md";
import {SiBitcoincash, SiCoursera, SiQuizlet, SiTestcafe} from "react-icons/si";
import {FaLayerGroup} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";
import {IThead} from "@/components/custom/tables/table.tsx";
import {TbHeartRateMonitor} from "react-icons/tb";
import {VscFileSubmodule} from "react-icons/vsc";
import {FaCompress} from "react-icons/fa6";

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
        {title: 'Darslar', icon: <MdPlayLesson size={20}/>, path: '/online/lesson'},
        {title: 'Test', icon: <SiTestcafe size={20}/>, path: '/online/test'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/online/users'},
        {title: 'Bildirishnoma', icon: <IoNotifications size={20}/>, path: '/online/notification'},
    ],
    eduData: [
        {title: 'Boshqaruv paneli', icon: <LuLayoutDashboard size={20}/>, path: '/edu/dashboard'},
        {title: 'Kurslar', icon: <SiCoursera size={20}/>, path: '/edu/course'},
        {title: 'Module', icon: <VscFileSubmodule size={20}/>, path: '/edu/module'},
        {title: 'Darslar', icon: <MdPlayLesson size={20}/>, path: '/edu/lesson'},
        {title: 'O\'qituvchilar', icon: <PiChalkboardTeacherBold size={20}/>, path: '/edu/teacher'},
        {title: 'Guruhlar', icon: <FaLayerGroup size={20}/>, path: '/edu/group'},
        {title: 'Foydalanuvchilar', icon: <PiStudentFill size={20}/>, path: '/edu/users'},
        {title: 'Tasdiqlanishi kerak bulganlar', icon: <PiStudentFill size={24}/>, path: '/edu/users-confirm'},
        {title: 'Moliya', icon: <SiBitcoincash size={20}/>, path: '/edu/payment'},
        {title: 'Baholar', icon: <TbHeartRateMonitor size={20}/>, path: '/edu/rate'},
        {title: 'Bildirishnoma', icon: <IoNotifications size={20}/>, path: '/edu/notification'},
    ],
};

// ============CONST TEXT============
export const regNotFound: string = 'Ma\'lumotlar tuliqligini tekshirib kuring'
export const notFound: string = 'Ma\'lumot topilmadi'

export const deleteText = (text: string) => `Haqiqatdan xam bu ${text} o'chirib tashlamoqchimisiz?`
export const successAdd = (text: string) => `${text} muvaffaqiyatli qo'shildi`
export const successEdit = (text: string) => `${text} muvaffaqiyatli taxrirlandi`
export const successDelete = (text: string) => `${text} muvaffaqiyatli o'chirildi`

export const monthList = [
    {id: 1, name: 'Yanvar'},
    {id: 2, name: 'Fevral'},
    {id: 3, name: 'Mart'},
    {id: 4, name: 'Aprel'},
    {id: 5, name: 'May'},
    {id: 6, name: 'Iyun'},
    {id: 7, name: 'Iyul'},
    {id: 8, name: 'Avgust'},
    {id: 9, name: 'Sentyabr'},
    {id: 10, name: 'Oktyabr'},
    {id: 11, name: 'Noyabr'},
    {id: 12, name: 'Dekabr'},
]

// ===================THEAD DATA==================
export const topGroupEdu: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Guruh nomi'},
    {id: 2, name: 'O\'quvchilar soni'},
    {id: 3, name: 'Guruh umumiy bali'},
];

export const topTeacherEdu: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Guruh nomi'},
    {id: 2, name: 'O\'quvchilar soni'},
    {id: 3, name: 'Guruh umumiy bali'},
];

export const topStudentEdu: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'F.I.O'},
    {id: 2, name: 'Guruh nomi'},
    {id: 3, name: 'Umumiy bali'},
];

export const userTableHead: IThead[] = [
    {id: 1, name: 'ID'},
    {id: 7, name: 'Rasm'},
    {id: 2, name: 'Ismi'},
    {id: 3, name: 'Familiyasi'},
    {id: 5, name: 'Telefon raqami'},
    {id: 7, name: 'Roli'},
    {id: 6, name: 'Xarakat'},
]

export const paymentTHead: IThead[] = [
    {id: 1, name: 'ID'},
    {id: 7, name: 'F.I.O'},
    {id: 2, name: 'To\'lov summasi (UZS)'},
    {id: 3, name: 'To\'lov turi'},
    {id: 5, name: 'To\'langan sanasi'},
    {id: 6, name: 'Xarakat'},
]

export const confirmUserTHead: IThead[] = [
    {id: 1, name: 'ID'},
    {id: 2, name: 'Ismi'},
    {id: 3, name: 'Familiyasi'},
    {id: 5, name: 'Telefon raqami'},
    {id: 6, name: 'Xarakat'},
]

export const testThead: IThead[] = [
    {id: 4, name: 'ID'},
    {id: 1, name: 'Savol nomi'},
    {id: 2, name: `Yo'nalish nomi`},
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

export const stsThead: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Ismi'},
    {id: 6, name: 'Familiya'},
    {id: 3, name: 'To\'langan pul (UZS)'},
];

export const lessonThead: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Dars nomi'},
    {id: 7, name: 'Yunalish nomi'},
    {id: 8, name: 'Modul nomi'},
    {id: 6, name: 'Tavsifi'},
    {id: 2, name: 'Vedio linki'},
    {id: 3, name: 'Vedio davomiyligi'},
    {id: 4, name: 'Foydalanuvchi aktivligi'},
];

export const lessonPageThead: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Dars nomi'},
    {id: 8, name: 'Yunalish nomi'},
    {id: 9, name: 'Modul nomi'},
    {id: 6, name: 'Tavsifi'},
    {id: 2, name: 'Vedio linki'},
    {id: 3, name: 'Vedio davomiyligi'},
    {id: 4, name: 'Foydalanuvchi aktivligi'},
    {id: 7, name: 'Harakat'},
];

export const teacherThead: IThead[] = [
    {id: 5, name: 'ID'},
    {id: 1, name: 'Rasmi'},
    {id: 6, name: 'Ismi'},
    {id: 2, name: 'Familiyasi'},
    {id: 3, name: 'Telefon raqami'},
    {id: 4, name: 'Guruhlari soni'},
];

export const resultThead: IThead[] = [
    {id: 1, name: 'ID'},
    {id: 2, name: 'F.I.O'},
    {id: 3, name: 'Yunalishi'},
    {id: 4, name: 'Savollar soni'},
    {id: 5, name: 'To\'g\'ri javoblar soni'},
    {id: 6, name: 'Ketgan vaqti'},
    {id: 7, name: 'Holati'},
    {id: 8, name: 'Test ishlangan sanasi'},
];