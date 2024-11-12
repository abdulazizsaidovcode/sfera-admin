import toast from "react-hot-toast";
import {notFound} from "@/helpers/constanta.tsx";

// =============NUMBER FORMAT==========
export const formatedNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/[\s+()-]/g, '');
    const phonePattern = /^(?:\+998|998)\d{9}$/;

    if (phonePattern.test(cleaned)) return cleaned;
};

// ===========INPUT VALIDATE TEXT============
export const validateText = (inputText: string) => {
    const htmlPattern = /<[^>]*>/g;

    if (htmlPattern.test(inputText)) return ''

    return inputText;
};

// ============NUMBER FORMATTER===========
export const formatNumber = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

// ===============TODAY DATE================
const day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
const month = new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1;
const year = new Date().getFullYear();
export const todayDate = () => `${year}-${month}-${day}`
// export const todayDate = () => `${year}-${month}-11`

// ==============SITE SECURE FUNCTION==============
export const siteSecurity = () => {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey && (
            e.key === 'shift' ||
            e.key === 'i' ||
            e.key === 'I' ||
            e.key === 'j' ||
            e.key === 'J' ||
            e.keyCode === 74 ||
            e.keyCode === 85 ||
            e.keyCode === 73
        )) || e.key === 'F12') e.preventDefault();
    });
};

// ==============UN_RELOAD==============
export const unReload = () => {
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey && (
            e.keyCode === 84 ||
            e.keyCode === 87
        ))) {
            alert('Saxifani tark etmoqchimisiz, o\'zgarishlar saqlanmasligi mumkin');
            e.preventDefault();
        }
    });

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        const confirmationMessage = 'Siz kiritgan o\'zgarishlar saqlanmasligi mumkin';
        e.preventDefault();
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
};

// ==============CONSOLE CLEAR FUNCTION==============
export const consoleClear = () => console.clear();
// export const consoleClear = () => {}

// ============TOASTS MESSAGES==========
export const toastMessage = (code: string | number, message: string) => {
    if (+code === 1) return toast.error('Kirish taqiqlanadi');
    else if (+code === 2) return toast.error(message);
    else if (+code === 3) return toast.error(message);
    else if (+code === 4) return toast.error('Bu ma\'lumot allaqachon mavjud');
    else if (+code === 5) return toast.error(message);
    else if (+code === 6) return toast.error(message);
    else if (+code === 7) return toast.error(message);
    else if (+code === 8) return toast.error('Serverda xatolik yuz berdi');
    else return toast.error(message);
};

export const notFoundTable = (thead: { id: number, name: string }[]) => {
    return (
        <tr className={`hover:bg-whiteGreen duration-100`}>
            <td
                className="border-b border-[#eee] p-5 text-black text-center"
                colSpan={thead.length}
            >
                {notFound}
            </td>
        </tr>
    )
}