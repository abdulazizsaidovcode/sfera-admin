import toast from "react-hot-toast";

export const toastMessage = (code: string | number, message: string) => {
    if (+code === 1) return toast.error('Kirish taqiqlanadi');
    else if (+code === 2) return toast.error(message);
    else if (+code === 3) return toast.error(message);
    else if (+code === 4) return toast.error('Bu ma\'lumot allaqachon mavjud');
    else if (+code === 5) return toast.error(message);
    else if (+code === 6) return toast.error(message);
    else if (+code === 7) return toast.error(message);
    else if (+code === 8) return toast.error('Serverda xatolik yuz berdi');
};

export const consoleClear = () => console.clear();
// export const consoleClear = () => {}