import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {Input, Pagination, Select} from "antd";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import Tables from "@/components/custom/tables/table.tsx";
import {lessonThead} from "@/helpers/constanta.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import {config} from "@/helpers/token.tsx";
import {useEffect, useState} from "react";
import {categoryList, lessonPageList, moduleCategoryId} from "@/helpers/api.tsx";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {MdOutlineAddCircle} from "react-icons/md";
import {Link} from "react-router-dom";
import Checkbox from "@/components/custom/checkbox/checkbox.tsx";

const Lesson = () => {
    const [page, setPage] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [moduleId, setModuleId] = useState<string | null>(null);
    const [categoryId, setCategoryId] = useState<string>('');
    const admin_role = sessionStorage.getItem('admin_roles');

    const getTestUrl = () => {
        const queryParams: string = [
            name ? `name=${name}` : '',
            moduleId ? `moduleId=${moduleId}` : '',
            categoryId ? `categoryId=${categoryId}` : ''
        ].filter(Boolean).join('&');

        return `${lessonPageList}?${queryParams ? `${queryParams}&` : ''}page=${page}&size=10`;
    }
    const {loading, response, globalDataFunc} = useGlobalRequest(getTestUrl(), 'GET', '', config)
    const categoryLists = useGlobalRequest(`${categoryList}${admin_role === 'ADMIN_EDU' ? 'EDUCATION' : 'ONLINE'}`, 'GET', '', config)
    const moduleLessonGet = useGlobalRequest(`${moduleCategoryId}${categoryId}`, 'GET', '', config)

    useEffect(() => {
        globalDataFunc()
        categoryLists.globalDataFunc()
    }, []);

    useEffect(() => {
        globalDataFunc()
    }, [page, name, moduleId, categoryId]);

    useEffect(() => {
        if (categoryId) moduleLessonGet.globalDataFunc()
        // setModuleId('')
    }, [categoryId]);

    return (
        <>
            <Breadcrumb pageName={`Darslar`}/>

            {/*=================SEARCH================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10`}>
                <ShinyButton
                    text={`Dars qo'shish`}
                    icon={<MdOutlineAddCircle size={30}/>}
                    className={`bg-darkGreen`}
                    onClick={() => {
                        // openModal()
                        // setEditOrDeleteStatus('POST')
                    }}
                />
                <div
                    className={`w-full lg:max-w-[60%] flex justify-start xl:justify-between items-center flex-wrap md:flex-nowrap gap-5`}
                >
                    <Input
                        className={`w-full bg-transparent h-11 custom-input`}
                        placeholder="Darsni qidirish..."
                        onChange={(val) => setName(val.target.value)}
                        allowClear
                    />
                    <Select
                        placeholder={`Kurs buyicha qidirish`}
                        className={`w-full bg-transparent h-11 custom-select`}
                        onChange={(value) => setCategoryId(value)}
                        allowClear
                    >
                        {categoryLists.response && categoryLists.response.map((item: any) => (
                            <Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>
                        ))}
                    </Select>
                    <Select
                        // value={moduleId}
                        placeholder={`Modul buyicha qidirish`}
                        className={`w-full bg-transparent h-11 custom-select`}
                        onChange={(value) => setModuleId(value)}
                        allowClear
                    >
                        {moduleLessonGet.response && moduleLessonGet.response.map((item: any) => (
                            <Select.Option value={item.moduleId} key={item.moduleId}>{item.name}</Select.Option>
                        ))}
                    </Select>
                </div>
            </div>

            {/*======================BODY TABLE======================*/}
            <div className={`mt-6`}>
                {loading ? <div className={`w-full grid grid-cols-1 gap-3`}>
                    <Skeleton/>
                    <Skeleton/>
                </div> : (
                    <Tables thead={lessonThead}>
                        {(response && response.body.length > 0) ? response.body.map((lesson: any, idx: number) => (
                            <tr key={idx} className={`hover:bg-whiteGreen duration-100`}>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {(page * 10) + idx + 1}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {lesson.name}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {lesson.description}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        <Link to={lesson.videoLink}>vedioni ko'rish</Link>
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {lesson.videoTime ? lesson.videoTime : '-'}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <Checkbox
                                        setIsChecked={() => !lesson.userActive}
                                        isChecked={lesson.userActive}
                                        id={idx}
                                    />
                                </td>
                            </tr>
                        )) : <tr className={`hover:bg-whiteGreen duration-100`}>
                            <td
                                className="border-b border-[#eee] p-5 text-black text-center"
                                colSpan={lessonThead.length}
                            >
                                Ma'lumot topilmadi
                            </td>
                        </tr>}
                    </Tables>
                )}
                <Pagination
                    showSizeChanger={false}
                    responsive={true}
                    defaultCurrent={1}
                    total={response ? response.totalElements : 0}
                    onChange={(page: number) => setPage(page - 1)}
                    rootClassName={`mt-8 mb-5`}
                />
            </div>
        </>
    );
};

export default Lesson;
