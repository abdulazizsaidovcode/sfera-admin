import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {MdOutlineAddCircle} from "react-icons/md";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import Tables from "@/components/custom/tables/table.tsx";
import {deleteText, notFound, regNotFound, successAdd, teacherThead} from "@/helpers/constanta.tsx";
import toast from "react-hot-toast";
import Modal from "@/components/custom/modal/modal.tsx";
import courseStore from "@/helpers/state-management/coursesStore.tsx";
import {useEffect, useState} from "react";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import {config} from "@/helpers/token.tsx";
import {imgGet, teacherPost, userTeacherGet} from "@/helpers/api.tsx";
import images from '@/assets/images/avatar.png'
import NumberInput from "@/components/custom/inputs/number-input.tsx";
import TextInput from "@/components/custom/inputs/text-input.tsx";
import {styles} from "@/styles/style.tsx";

const defVal = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: ''
}

const Teacher = () => {
    const {editOrDeleteStatus, setEditOrDeleteStatus} = courseStore()
    const [crudTeacher, setCrudTeacher] = useState<any>(defVal)
    const [isModal, setIsModal] = useState(false);
    const {response, loading, globalDataFunc} = useGlobalRequest(userTeacherGet, 'GET', '', config)
    const teacherAdd = useGlobalRequest(teacherPost, 'POST', crudTeacher, config)

    useEffect(() => {
        globalDataFunc()
    }, []);

    useEffect(() => {
        if (teacherAdd.response) {
            globalDataFunc()
            closeModal()
            toast.success(successAdd('O\'qituvchi'))
        }
    }, [teacherAdd.response]);

    const handleChange = (name: string, value: string) => setCrudTeacher({...crudTeacher, [name]: value});

    const openModal = () => setIsModal(true);
    const closeModal = () => {
        setIsModal(false);
        setTimeout(() => {
            setCrudTeacher(defVal);
            setEditOrDeleteStatus('');
        }, 500)
    };

    return (
        <>
            <Breadcrumb pageName={`O'qituvchilar`}/>

            {/*=================SEARCH================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10`}>
                <ShinyButton
                    text={`O'qituchi qo'shish`}
                    icon={<MdOutlineAddCircle size={30}/>}
                    className={`bg-darkGreen`}
                    onClick={() => {
                        openModal()
                        setEditOrDeleteStatus('POST')
                    }}
                />
            </div>

            {/*======================BODY TABLE======================*/}
            <div className={`mt-6`}>
                {loading ? <div className={`w-full grid grid-cols-1 gap-3`}>
                    <Skeleton/>
                    <Skeleton/>
                </div> : (
                    <Tables thead={teacherThead}>
                        {(response && response.length > 0) ? response.map((teacher: any, idx: number) => (
                            <tr key={idx} className={`hover:bg-whiteGreen duration-100`}>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {idx + 1}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <img
                                        src={teacher.fileId ? imgGet + teacher.fileId : images}
                                        alt={teacher.firstName}
                                        className={`w-10 h-10 scale-150 rounded-full object-cover`}
                                    />
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {teacher.firstName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {teacher.lastName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        +{teacher.phoneNumber}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {teacher.countGroup}
                                    </p>
                                </td>
                            </tr>
                        )) : <tr className={`hover:bg-whiteGreen duration-100`}>
                            <td
                                className="border-b border-[#eee] p-5 text-black text-center"
                                colSpan={teacherThead.length}
                            >{notFound}</td>
                        </tr>}
                    </Tables>
                )}
            </div>

            <Modal onClose={closeModal} isOpen={isModal}>
                <div className={styles.modalMain}>
                    {editOrDeleteStatus === 'DELETE' ? (
                        <p className={`text-center text-black text-base lg:text-xl mb-10 mt-7`}>
                            {deleteText('darsni')}
                        </p>
                    ) : (<div className={`mt-5`}>
                        <div className={'mb-4'}>
                            <TextInput
                                handleChange={(e) => handleChange('firstName', e.target.value)}
                                placeholder={'Ismini kiriting'}
                                label={'O\'qituvchini ismini kiriting'}
                                value={crudTeacher.firstName}
                            />
                        </div>
                        <div className={'mb-4'}>
                            <TextInput
                                handleChange={(e) => handleChange('lastName', e.target.value)}
                                placeholder={'Familiyani kiriting'}
                                label={'O\'qituvchini familiyasini kiriting'}
                                value={crudTeacher.lastName}
                            />
                        </div>
                        <div className={'mb-4'}>
                            <NumberInput
                                handleChange={e => {
                                    const v = e.target.value
                                    if (v.length <= 12 && !isNaN(+v) && !v.startsWith('0')) handleChange('phoneNumber', v)
                                }}
                                placeholder={'Telefon raqamini kiriting'}
                                value={crudTeacher.phoneNumber}
                                label={'O\'qituvchini telefon raqamini kiriting (Namuna: 998912120257)'}
                            />
                        </div>
                        <div className={'mb-4'}>
                            <TextInput
                                handleChange={(e) => handleChange('password', e.target.value)}
                                placeholder={'Parolini kiriting'}
                                label={'O\'qituvchini parolini kiriting'}
                                value={crudTeacher.password}
                            />
                        </div>
                    </div>)}
                    <div className={styles.modalFooter}>
                        <ShinyButton
                            text={`Orqaga`}
                            className={`bg-darkGreen ${styles.modalBtn}`}
                            onClick={closeModal}
                        />
                        {editOrDeleteStatus === 'POST' && (
                            <ShinyButton
                                text={teacherAdd.loading ? 'Saqlanmoqda...' : 'Saqlash'}
                                className={`bg-darkGreen ${styles.modalBtn} ${teacherAdd.loading && 'cursor-not-allowed opacity-60'}`}
                                onClick={() => {
                                    if (!teacherAdd.loading) {
                                        if (crudTeacher.firstName && crudTeacher.lastName && crudTeacher.phoneNumber && crudTeacher.password) teacherAdd.globalDataFunc()
                                        else toast.error(regNotFound)
                                    }
                                }}
                            />
                        )}
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Teacher;
