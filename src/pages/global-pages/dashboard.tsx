import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {dashboardTbody, dashboardThead, lineChartData} from "@/helpers/constanta.tsx";
import ChartLine from "@/components/custom/chart/line-chart.tsx";
import Tables from "@/components/custom/tables/table.tsx";
import {eduAdminSts, eduAdminTopGroup, useGlobalRequest} from "@/helpers/api.tsx";
import {config} from "@/helpers/token.tsx";
import {useEffect} from "react";
import {BiCategory} from "react-icons/bi";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";

const Dashboard = () => {
    const eduAdminStsGet = useGlobalRequest(eduAdminSts, 'GET', '', config)
    const eduAdminTopGroupGet = useGlobalRequest(eduAdminTopGroup, 'GET', '', config)

    useEffect(() => {
        eduAdminStsGet.globalDataFunc()
        eduAdminTopGroupGet.globalDataFunc()
    }, []);

    return (
        <>
            {/*==================STS CARD================*/}
            {eduAdminStsGet.loading ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    {[...Array(4)].map((_, index) => <Skeleton key={index}/>)}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    <CardDataStats
                        title={`Umumiy categoriyalar soni`}
                        total={eduAdminStsGet.response ? eduAdminStsGet.response.categoryCount : 0}
                    >
                        <div className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <BiCategory className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                    <CardDataStats
                        title={`Umumiy guruhlar soni`}
                        total={eduAdminStsGet.response ? eduAdminStsGet.response.groupCount : 0}
                    >
                        <div className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <BiCategory className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                    <CardDataStats
                        title={`Umumiy studentlar soni`}
                        total={eduAdminStsGet.response ? eduAdminStsGet.response.studentCount : 0}
                    >
                        <div className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <BiCategory className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                    <CardDataStats
                        title={`Umumiy o'qituvchilar soni`}
                        total={eduAdminStsGet.response ? eduAdminStsGet.response.teacherCount : 0}
                    >
                        <div className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <BiCategory className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                </div>
            )}

            <div className={`mt-10`}>
                <ChartLine
                    title={lineChartData.title}
                    seriesTitle={lineChartData.seriesTitle}
                    category={lineChartData.category}
                    seriesData={lineChartData.seriesData}
                    maxSize={1000}
                />
            </div>
            <div className={`mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5`}>
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
                        </tr>
                    ))}
                </Tables>
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
                        </tr>
                    ))}
                </Tables>
            </div>
        </>
    );
};

export default Dashboard;
