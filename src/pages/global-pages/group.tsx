import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {MdOutlineAddCircle} from "react-icons/md";
import Tables from "@/components/custom/tables/table.tsx";
import {dashboardTbody, dashboardThead} from "@/helpers/constanta.tsx";

const Groups = () => {
    return (
        <>
            <Breadcrumb pageName={`Guruhlar`} />

            {/*===================ADD OR SEARCH===================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10`}>
                <ShinyButton text={`Qo'shish`} icon={<MdOutlineAddCircle size={30}/>} className={`bg-darkGreen`}/>
                <div
                    className={`w-full lg:max-w-[60%] flex justify-start xl:justify-between items-center flex-wrap md:flex-nowrap gap-5`}>
                    <input
                        type={`search`}
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="Guruh nomi buyicha qidirish"
                    />
                    <input
                        type={`search`}
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="................."
                    />
                    <input
                        type={`search`}
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="................"
                    />
                </div>
            </div>

            {/*========================BODY===================*/}
            <div className={`mt-6`}>
                <Tables thead={dashboardThead}>
                    {dashboardTbody.map((sts, idx) => (
                        <tr key={sts.id} className={`hover:bg-whiteGreen duration-100`}>
                            <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    {idx + 1}
                                </p>
                            </td>
                            <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    {sts.thead1}
                                </p>
                            </td>
                            <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    {sts.thead2}
                                </p>
                            </td>
                            <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    {sts.thead3}
                                </p>
                            </td>
                            <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    {sts.thead4}
                                </p>
                            </td>
                        </tr>
                    ))}
                </Tables>
            </div>
        </>
    );
};

export default Groups;
