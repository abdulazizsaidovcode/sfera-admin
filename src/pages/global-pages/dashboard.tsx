import {dashboardTbody, dashboardThead, lineChartData} from "@/helpers/constanta.tsx";
import ChartLine from "@/components/custom/chart/line-chart.tsx";
import Tables from "@/components/custom/tables/table.tsx";
import {eduAdminSts, eduAdminTopGroup, quizAdminSts} from "@/helpers/api.tsx";
import {config} from "@/helpers/token.tsx";
import {useEffect} from "react";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import dashboardStore from "@/helpers/state-management/dashboardStore.tsx";
import EduSts from "@/pages/edu-admin/dashbboard/dashboardCardSts.tsx";
import QuizSts from "@/pages/quiz-admin/dashbboard/dashboardCardSts.tsx";
import OnlineSts from "@/pages/online-admin/dashbboard/dashboardCardSts.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";

const Dashboard = () => {
    const admin_role = sessionStorage.getItem('admin_roles');
    const {setDashboardCardSts, dashboardCardSts} = dashboardStore()
    const eduAdminStsGet = useGlobalRequest(eduAdminSts, 'GET', '', config)
    const eduAdminTopGroupGet = useGlobalRequest(eduAdminTopGroup, 'GET', '', config)
    const quizAdminStsGet = useGlobalRequest(quizAdminSts, 'GET', '', config)

    useEffect(() => {
        if (admin_role === 'ADMIN_EDU') {
            eduAdminStsGet.globalDataFunc()
            eduAdminTopGroupGet.globalDataFunc()
        } else if (admin_role === 'ADMIN_QUIZ') {
            quizAdminStsGet.globalDataFunc()
        }
    }, []);

    useEffect(() => {
        if (admin_role === 'ADMIN_EDU') {
            eduAdminStsGet.globalDataFunc()
            eduAdminTopGroupGet.globalDataFunc()
        } else if (admin_role === 'ADMIN_QUIZ') {
            quizAdminStsGet.globalDataFunc()
        }
    }, [admin_role]);

    useEffect(() => {
        if (admin_role === 'ADMIN_EDU') setDashboardCardSts(eduAdminStsGet.response)
        if (admin_role === 'ADMIN_QUIZ') setDashboardCardSts(quizAdminStsGet.response)
    }, [eduAdminStsGet.response, quizAdminStsGet.response]);

    const roleDashboardSts = (role: string) => {
        if (role === 'ADMIN_EDU') return <EduSts dashboardCardSts={dashboardCardSts}/>
        else if (role === 'ADMIN_QUIZ') return <QuizSts dashboardCardSts={dashboardCardSts}/>
        else if (role === 'ADMIN_ONLINE') return <OnlineSts dashboardCardSts={dashboardCardSts}/>
    }

    return (
        <>
            {/*==================STS CARD================*/}
            {eduAdminStsGet.loading ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    {[...Array(4)].map((_, index) => <Skeleton key={index}/>)}
                </div>
            ) : admin_role && roleDashboardSts(admin_role)}

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
