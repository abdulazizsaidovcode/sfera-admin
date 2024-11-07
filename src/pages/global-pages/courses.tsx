import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {CourseCard} from "@/components/custom/cards/course-card.tsx";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {MdOutlineAddCircle} from "react-icons/md";
import Modal from "@/components/custom/modal/modal.tsx";
import React, {useEffect, useState} from "react";
import ImgUpload from "@/components/custom/imagesData/img-upload.tsx";
import courseStore from "@/helpers/state-management/coursesStore.tsx";
import globalStore from "@/helpers/state-management/globalStore.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import {config} from "@/helpers/token.tsx";
import {categoryAdd, categoryDelete, categoryList, categoryUpdate, imgGet} from "@/helpers/api.tsx";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import images from '@/assets/images/category.jpg'
import {consoleClear} from "@/helpers/functions/toastMessage.tsx";
import toast from "react-hot-toast";
import {deleteText, notFound, regNotFound, successAdd, successDelete, successEdit} from "@/helpers/constanta.tsx";
import TextInput from "@/components/custom/inputs/text-input.tsx";
import {styles} from "@/styles/style.tsx";

const Courses = () => {
    const admin_role = sessionStorage.getItem("admin_roles");
    const {imgUpload, setImgUpload} = globalStore()
    const {
        crudValue,
        setCrudValue,
        courseData,
        setCourseData,
        crudValueDef,
        editOrDeleteStatus,
        setEditOrDeleteStatus
    } = courseStore()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const requestObj = {
        name: crudValue?.name,
        description: crudValue?.description,
        fileId: imgUpload ? imgUpload : crudValue?.fileId ? crudValue.fileId : 0,
    }

    // ================REQUEST METHODS================
    const urls = (url: string) => {
        if (admin_role === 'ADMIN_QUIZ') return `${url}QUIZ`
        else if (admin_role === 'ADMIN_ONLINE') return `${url}ONLINE`
        else if (admin_role === 'ADMIN_EDU') return `${url}EDUCATION`
        else return ''
    }
    const categoryListDataGet = useGlobalRequest(urls(categoryList), 'GET', '', config);
    const categoryDataAdd = useGlobalRequest(urls(categoryAdd), 'POST', requestObj, config);
    const categoryDataDelete = useGlobalRequest(`${categoryDelete}${crudValue?.id}`, 'DELETE', '', config);
    const categoryDataEdit = useGlobalRequest(`${categoryUpdate}${crudValue?.id}`, 'PUT', requestObj, config);
    const categoryGetFunc = () => categoryListDataGet.globalDataFunc()

    useEffect(() => {
        categoryGetFunc()
        consoleClear()
    }, []);

    useEffect(() => {
        setCourseData(categoryListDataGet.response)
    }, [categoryListDataGet.response, admin_role]);

    useEffect(() => {
        if (categoryDataAdd.response) {
            categoryGetFunc()
            closeModal()
            toast.success(successAdd(admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'))
        }
        consoleClear()
    }, [categoryDataAdd.response]);

    useEffect(() => {
        if (categoryDataEdit.response) {
            categoryGetFunc()
            closeModal()
            toast.success(successEdit(admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'))
        }
        consoleClear()
    }, [categoryDataEdit.response]);

    useEffect(() => {
        if (categoryDataDelete.response) {
            categoryGetFunc()
            closeModal()
            toast.success(successDelete(admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'))
        }
        consoleClear()
    }, [categoryDataDelete.response]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setEditOrDeleteStatus('');
            setCrudValue(crudValueDef);
            setImgUpload(null)
        }, 500)
    };

    const handleInputChange = (name: string, value: string) => setCrudValue({...crudValue, [name]: value})

    return (
        <>
            <Breadcrumb pageName={admin_role === 'ADMIN_QUIZ' ? `Yo'nalishlar` : 'Kurslar'}/>

            {/*==================SEARCH=================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10 mb-6`}>
                <ShinyButton
                    text={`Qo'shish`}
                    icon={<MdOutlineAddCircle size={30}/>}
                    className={`bg-darkGreen`}
                    onClick={() => {
                        openModal()
                        setEditOrDeleteStatus('ADD')
                    }}
                />
                <div
                    className={`w-full lg:max-w-[30%] flex justify-start xl:justify-between items-center flex-wrap md:flex-nowrap gap-5`}>
                    <input
                        type={`search`}
                        disabled
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder={`${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalishlar' : 'Kurslar'} nomi bo'yicha qidirish...`}
                    />
                </div>
            </div>

            {/*=======================BODY CARD======================*/}
            {categoryListDataGet.loading ? <div
                className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 overflow-hidden`}
            >{[...Array(6)].map((_, index) => <Skeleton key={index}/>)}</div> : courseData ?
                <div
                    className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 overflow-hidden`}
                >{courseData.map((data, index) =>
                    <CourseCard
                        imgUrl={data.fileId ? `${imgGet}${data.fileId}` : images}
                        title={data.name}
                        desc={data.description}
                        openModal={openModal}
                        fullData={data}
                        key={index}
                    />
                )}</div>
                : <div className={`text-xl md:text-3xl text-center text-black w-full mt-12`}>{notFound}</div>}

            {/*==========UNIVERSAL MODAL============*/}
            <Modal onClose={closeModal} isOpen={isModalOpen}>
                <div className={styles.modalMain}>
                    <form className={`mt-5`} onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
                        {editOrDeleteStatus !== 'DELETE' ? (<>
                            <div className="mb-4 mt-5 flex justify-center">
                                <ImgUpload imgID={crudValue?.fileId ? crudValue.fileId : ''}/>
                            </div>
                            <div className="mb-4">
                                <TextInput
                                    handleChange={e => handleInputChange('name', e.target.value)}
                                    placeholder={`${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} nomini kiriting...`}
                                    value={crudValue?.name}
                                    label={`${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} nomi`}
                                />
                            </div>
                            <div className="mb-4">
                                <TextInput
                                    handleChange={e => handleInputChange('description', e.target.value)}
                                    placeholder={`${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} tavsifini kiriting...`}
                                    value={crudValue?.description}
                                    label={`${admin_role === 'ADMIN_QUIZ' ? 'Yo\'nalish' : 'Kurs'} tavsifi`}
                                />
                            </div>
                        </>) : <>
                            <p className={`text-center text-black text-base lg:text-xl mb-10`}>
                                {deleteText(admin_role === 'ADMIN_QUIZ' ? 'yo\'nalishni' : 'kursni')}
                            </p>
                        </>}

                        <div className={styles.modalFooter}>
                            <ShinyButton
                                text={`Orqaga`}
                                className={`bg-darkGreen ${styles.modalBtn}`}
                                onClick={closeModal}
                            />
                            {editOrDeleteStatus === 'ADD' && (
                                <ShinyButton
                                    text={categoryDataAdd.loading ? 'Saqlanmoqda...' : 'Saqlash'}
                                    className={`bg-darkGreen ${styles.modalBtn} ${categoryDataAdd.loading && 'cursor-not-allowed opacity-60'}`}
                                    onClick={() => {
                                        if (!categoryDataAdd.loading) {
                                            if (crudValue?.name && crudValue?.description) categoryDataAdd.globalDataFunc()
                                            else toast.error(regNotFound)
                                        }
                                    }}
                                />
                            )}
                            {editOrDeleteStatus === 'EDIT' && (
                                <ShinyButton
                                    text={categoryDataEdit.loading ? 'Yuklanmoqda...' : 'Taxrirlash'}
                                    className={`bg-darkGreen ${styles.modalBtn} ${categoryDataEdit.loading && 'cursor-not-allowed opacity-60'}`}
                                    onClick={() => {
                                        if (!categoryDataEdit.loading) {
                                            if (crudValue?.name && crudValue?.description) categoryDataEdit.globalDataFunc()
                                            else toast.error(regNotFound)
                                        }
                                    }}
                                />
                            )}
                            {editOrDeleteStatus === 'DELETE' && (
                                <ShinyButton
                                    text={categoryDataDelete.loading ? 'O\'chirilmoqda...' : 'Xa'}
                                    className={`bg-darkGreen ${styles.modalBtn} ${categoryDataDelete.loading && 'cursor-not-allowed opacity-60'}`}
                                    onClick={() => {
                                        if (!categoryDataDelete.loading) categoryDataDelete.globalDataFunc()
                                    }}
                                />
                            )}
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default Courses;
