import {useEffect, useState} from 'react';
import {BiSolidImageAdd} from 'react-icons/bi';
import {config} from "@/helpers/token.tsx";
import {consoleClear} from "@/helpers/functions/toastMessage.tsx";
import {imgGet, imgUpdate, imgUploadPost} from "@/helpers/api.tsx";
import globalStore from "@/helpers/state-management/globalStore.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";

const ImageUpload = ({imgID}: { imgID?: string | number }) => {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [formData, setFormData] = useState<any>(null);
    const {setImgUpload} = globalStore();
    const {loading, response, globalDataFunc} = useGlobalRequest(imgUploadPost, 'POST', formData, config)
    const editImg = useGlobalRequest(`${imgUpdate}${imgID}`, 'PUT', formData, config)

    useEffect(() => {
        if (response) {
            setImgUpload(response)
            consoleClear()
        } else if (editImg.response) {
            setImgUpload(response)
            consoleClear()
        }
    }, [response, editImg.response]);

    useEffect(() => {
        if (formData) {
            if (imgID) editImg.globalDataFunc()
            else globalDataFunc()
        }
    }, [formData]);

    const handleImageChange = async (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        setFormData(formData)

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setSelectedImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-40 h-28 bg-lighterGreen rounded-lg p-4">
            <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
            >
                {loading ?
                    <span
                        className="text-black font-semibold text-base">Yuklanmoqda...</span> : (selectedImage || imgID) ? (
                        <img
                            src={selectedImage ? selectedImage : imgID ? imgGet + imgID : ''}
                            alt="Selected"
                            className="w-40 h-28 object-contain"
                        />
                    ) : (
                        <div className="text-whiteGreen text-center">
                            <div className={`flex justify-center items-center`}>
                                <BiSolidImageAdd className={`text-7xl`}/>
                            </div>
                            <span className="font-semibold text-base">Rasm yuklash</span>
                        </div>
                    )}
            </label>
            <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />
        </div>
    );
};

export default ImageUpload;
