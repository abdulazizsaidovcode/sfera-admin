import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import Tables from "@/components/custom/tables/table.tsx";
import {dashboardTbody, testThead} from "@/helpers/constanta.tsx";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {MdOutlineAddCircle} from "react-icons/md";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import {config} from "@/helpers/token.tsx";
import {questionAllGetPage} from "@/helpers/api.tsx";
import {useEffect} from "react";
import {TestList} from "@/types/test.ts";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";

const Tests = () => {
    const getTestUrl = () => {
        return `${questionAllGetPage}?page=0&size=10`;
    }
    const {loading, globalDataFunc, response} = useGlobalRequest(getTestUrl(), 'GET', '', config)

    useEffect(() => {
        globalDataFunc()
    }, []);

    return (
        <>
            <Breadcrumb pageName={`Testlar`}/>

            {/*=================SEARCH================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10`}>
                <ShinyButton text={`Qo'shish`} icon={<MdOutlineAddCircle size={30}/>} className={`bg-darkGreen`}/>
                <div
                    className={`w-full lg:max-w-[60%] flex justify-start xl:justify-between items-center flex-wrap md:flex-nowrap gap-5`}>
                    <input
                        type={`search`}
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="Test nomi bo'yicha qidirish"
                    />
                    <input
                        type={`search`}
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="Yo'nalish bo'yicha qidirish..."
                    />
                </div>
            </div>

            {/*======================BODY TABLE======================*/}
            <div className={`mt-6`}>
                {loading ? <div className={`w-full grid grid-cols-1 gap-7`}>
                    <Skeleton/>
                    <Skeleton/>
                </div> : (
                    <Tables thead={testThead}>
                        {response ? response.body.map((sts: TestList, idx: number) => (
                            <tr key={idx} className={`hover:bg-whiteGreen duration-100`}>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {idx + 1}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {sts.name}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {sts.categoryId}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        edit delete
                                    </p>
                                </td>
                            </tr>
                        )) : (
                            <tr className={`hover:bg-whiteGreen duration-100`}>
                                <td
                                    className="border-b border-[#eee] p-5 text-black text-center"
                                    colSpan={testThead.length}
                                >
                                    Ma'lumot topilmadi
                                </td>
                            </tr>
                        )}
                    </Tables>
                )}
            </div>
        </>
    );
};

export default Tests;
