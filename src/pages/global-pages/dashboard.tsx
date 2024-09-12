import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {dashboardTbody, dashboardThead, lineChartData, statisticData} from "@/helpers/constanta.tsx";
import ChartLine from "@/components/custom/chart/line-chart.tsx";
import Tables from "@/components/custom/tables/table.tsx";

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {statisticData.map((sts, idx) => (
                    <CardDataStats title={sts.name} total={`${sts.count}`} key={idx}>
                        <div
                            className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            {sts.icon}
                        </div>
                    </CardDataStats>
                ))}
            </div>
            <div className={`mt-10`}>
                <ChartLine
                    title={lineChartData.title}
                    seriesTitle={lineChartData.seriesTitle}
                    category={lineChartData.category}
                    seriesData={lineChartData.seriesData}
                />
            </div>
            <div className={`mt-10`}>
                <Tables thead={dashboardThead}>
                    {dashboardTbody.map((sts, idx) => (
                        <tr key={sts.id} className={`hover:bg-whiteGreen duration-100`}>
                            <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    {idx+1}
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

export default Dashboard;
