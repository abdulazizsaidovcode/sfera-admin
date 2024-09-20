import Skeleton from '@/components/custom/skeleton/skeleton-cards'
import { categoryGetOne, imgGet, quizCategorySettings } from '@/helpers/api'
import { useGlobalRequest } from '@/helpers/functions/restApi-function'
import { config } from '@/helpers/token'
import React, { useEffect, useState } from 'react'
import defaultImg from '@/assets/images/img.avif'
import { useNavigate, useParams } from 'react-router-dom'
import Meteors from '@/components/magicui/meteors'
import { BorderBeam } from '@/components/magicui/border-beam'
import ShinyButton from '@/components/magicui/shiny-button'
import toast from 'react-hot-toast'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Popover } from 'antd'
import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";

const CategoryDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [durationTime, setDurationTime] = useState("");
    const [countQuiz, setCountQuiz] = useState("");
    const category = useGlobalRequest(`${categoryGetOne}${id}`, 'GET', {}, config);
    const categorySettingsSave = useGlobalRequest(`${quizCategorySettings}/${id}`, 'PUT', { countQuiz, durationTime }, config);

    useEffect(() => {
        category.globalDataFunc();
    }, []);

    useEffect(() => {
        if (category.response) {
            setCountQuiz(category.response.countQuiz);
            setDurationTime(category.response.durationTime);
        }
    }, [category.response]);

    useEffect(() => {
        if (categorySettingsSave.response) {
            toast.success('Kategoriya sozlamalari muvafiyaqatli o\'zgartrildi')
        }
    }, [categorySettingsSave.response]);

    return (
        <div>
            <Breadcrumb pageName={`Yo'nalishlar`} subPage={`Yo'nalish detail`} />
            <Popover title="Orqaga qaytish" overlayStyle={{ textAlign: 'center' }}>
                <MdKeyboardBackspace
                    className={`text-3xl hover:cursor-pointer hover:text-primary duration-300 mb-5`}
                    onClick={() => navigate(-1)}
                />
            </Popover>

            {category.loading ? (
                <div className='flex justify-center items-center'>
                    <div className='w-[50%]'><Skeleton /></div>
                </div>
            ) : (category.response &&
                <div className='flex justify-center items-center'>
                    <img className='w-[50%] h-[250px] rounded-xl object-cover' src={category.response.fileId ? imgGet + category.response.fileId : defaultImg} alt={category.response.name || ''} />
                </div>
            )}
            <div className='mt-10'>
                <p className="text-3xl text-center uppercase font-bold">{category.response && category.response.name}</p>
                <div>
                    <p>{category.response && category.response.description}</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div
                    className="w-full backdrop-blur-sm rounded-2xl border border-[#087E43] dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                    <BorderBeam
                        size={500}
                        duration={10}
                        delay={2}
                        borderWidth={2}
                        colorFrom={`#ffaa40`}
                        colorTo={`#b36efd`}
                    />
                    <Meteors number={50} />
                    <div className="p-2 space-y-4 md:space-y-6 sm:p-8 relative z-999">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Kategoriya sozlamalari
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <p className="block mb-2 text-sm font-medium text-gray-900">Test vaqti</p>
                                <input
                                    type="number"
                                    value={durationTime}
                                    onChange={e => setDurationTime(e.target.value)}
                                    className="bg-white border border-[#087E43] text-gray-900 rounded-lg focus:ring-[#087E43] focus:border-[#087E43] block w-full p-2.5"
                                    placeholder="Test vaqtingizmi kiriting"
                                />
                            </div>
                            <div className='mb-5'>
                                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategoriya savolar sonini</p>
                                <input
                                    type="number"
                                    name="password"
                                    value={countQuiz}
                                    onChange={e => setCountQuiz(e.target.value)}
                                    placeholder="Kategoriya savolar sonini kiriting"
                                    className="bg-white border border-[#087E43] text-gray-900 rounded-lg focus:ring-[#087E43] focus:border-[#087E43] block w-full p-2.5"
                                />
                            </div>
                            <ShinyButton
                                text={categorySettingsSave.loading ? 'Yuklanmoqda...' : 'Saqlash'}
                                className={`bg-lighterGreen w-full ${categorySettingsSave.loading && 'cursor-not-allowed opacity-50'}`}
                                onClick={() => {
                                    if (countQuiz && durationTime) !categorySettingsSave.loading && categorySettingsSave.globalDataFunc()
                                    else toast.error('Ma\'lumotlar tuliqligini tekshiring')
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CategoryDetails;