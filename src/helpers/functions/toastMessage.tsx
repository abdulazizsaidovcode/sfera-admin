import toast from "react-hot-toast";

export const toastMessage = (code: any, message:string) => {
    if (+code === 3) return toast.error(message);
    else if (+code === 2) return toast.error(message);
    else if (+code === 5) return toast.error(message);
    else if (+code === 6) return toast.error(message);
    else if (+code === 7) return toast.error(message);
};

// export const consoleClear = () => console.clear();
export const consoleClear = () => {}