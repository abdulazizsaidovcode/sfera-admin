import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {CourseCard} from "@/components/custom/cards/course-card.tsx";
import {courseDatas} from "@/helpers/constanta.tsx";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {MdOutlineAddCircle} from "react-icons/md";
import Modal from "@/components/custom/modal/modal.tsx";
import {useState} from "react";
import ImgUpload from "@/components/custom/imagesData/img-upload.tsx";
import courseStore from "@/helpers/state-management/coursesStore.tsx";

const Courses = () => {
    const admin_role = sessionStorage.getItem("admin_roles");
    const {crudValue, setCrudValue, courseData, setCourseData, crudValueDef} = courseStore()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editStatus, setEditStatus] = useState<string | number>('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setEditStatus('');
        setCrudValue(crudValueDef);
    };

    const handleInputChange = (name: string, value: string | boolean) => {
        setCrudValue({
            ...crudValue,
            [name]: value
        });
    };

    return (
        <>
            <Breadcrumb pageName={admin_role === 'ADMIN_QUIZ' ? `Yo'nalishlar` : 'Kurslar'}/>

            {/*==================SEARCH=================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10 mb-6`}>
                <ShinyButton text={`Qo'shish`} icon={<MdOutlineAddCircle size={30}/>} className={`bg-darkGreen`}
                             onClick={openModal}/>
                <div
                    className={`w-full lg:max-w-[60%] flex justify-start xl:justify-between items-center flex-wrap md:flex-nowrap gap-5`}>
                    <input
                        type={`search`}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="Name buyicha qidirish"
                    />
                    <input
                        type={`search`}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="................."
                    />
                    <input
                        type={`search`}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="................"
                    />
                </div>
            </div>

            {/*=======================BODY CARD======================*/}
            <div
                className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 overflow-hidden`}>
                {courseDatas.map((data, index) => (
                    <CourseCard title={data.title} imgUrl={data.imgUrl} desc={data.desc} key={index}/>
                ))}
            </div>

            <Modal onClose={closeModal} isOpen={isModalOpen}>
                <div className={`w-54 sm:w-64 md:w-96 lg:w-[40rem]`}>
                    <form className={`mt-5`} onSubmit={(e) => {
                        // editStatus ? addCategory(e, addValue, setResData, setIsLoading, editStatus)
                        //     : addCategory(e, addValue, setResData, setIsLoading);
                    }}>
                        <div className="mb-4 mt-5 flex justify-center">
                            <ImgUpload/>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 mb-2">{admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} nomi</label>
                            <input
                                required
                                value={crudValue?.name}
                                onChange={e => handleInputChange('name', e.target.value)}
                                className={`login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5`}
                                placeholder={`${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} nomini kiriting...`}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 mb-2">{admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} tavsifi</label>
                            <input
                                required
                                value={crudValue?.description}
                                onChange={e => handleInputChange('description', e.target.value)}
                                className={`login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5`}
                                placeholder={`${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} tavsifini kiriting...`}
                            />
                        </div>

                        <div className={`flex justify-end items-center gap-5`}>

                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default Courses;
