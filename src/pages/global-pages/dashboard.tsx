import {topGroupEdu, topStudentEdu, topTeacherEdu} from "@/helpers/constanta.tsx";
import ChartLine from "@/components/custom/chart/line-chart.tsx";
import Tables from "@/components/custom/tables/table.tsx";
import {
    eduAdminCategoryStsPercentage,
    eduAdminCategoryStsYear,
    eduAdminSts,
    eduAdminTopGroup,
    eduAdminTopStudent,
    eduAdminTopTeacher,
    quizAdminPercentageSts,
    quizAdminSts,
    quizAdminWeeklySts,
    onlineAdminSts,
} from "@/helpers/api.tsx";
import {config} from "@/helpers/token.tsx";
import {useEffect} from "react";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import dashboardStore from "@/helpers/state-management/dashboardStore.tsx";
import EduSts from "@/pages/edu-admin/dashbboard/dashboardCardSts.tsx";
import QuizSts from "@/pages/quiz-admin/dashbboard/dashboardCardSts.tsx";
import OnlineSts from "@/pages/online-admin/dashbboard/dashboardCardSts.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import PieChart from "@/components/custom/chart/pie-chart";

const Dashboard = () => {
    const admin_role = sessionStorage.getItem('admin_roles');
    const {setDashboardCardSts, dashboardCardSts} = dashboardStore()

    const eduAdminStsGet = useGlobalRequest(eduAdminSts, 'GET', '', config)
    const eduAdminTopGroupGet = useGlobalRequest(eduAdminTopGroup, 'GET', '', config)
    const eduAdminTopTeacherGet = useGlobalRequest(eduAdminTopTeacher, 'GET', '', config)
    const eduAdminTopStudentGet = useGlobalRequest(eduAdminTopStudent, 'GET', '', config)
    const eduAdminCategoryStsYearGet = useGlobalRequest(eduAdminCategoryStsYear, 'GET', '', config)
    const eduAdminCategoryStsPercentageGet = useGlobalRequest(eduAdminCategoryStsPercentage, 'GET', '', config)
    const getEduFunc = () => {
        eduAdminStsGet.globalDataFunc()
        eduAdminTopGroupGet.globalDataFunc()
        eduAdminTopTeacherGet.globalDataFunc()
        eduAdminTopStudentGet.globalDataFunc()
        eduAdminCategoryStsYearGet.globalDataFunc()
        eduAdminCategoryStsPercentageGet.globalDataFunc()
    }

    const quizAdminStsGet = useGlobalRequest(quizAdminSts, 'GET', '', config)
    const quizAdminWeeklyStsGet = useGlobalRequest(quizAdminWeeklySts, 'GET', '', config)
    const quizAdminPercentageStsGet = useGlobalRequest(quizAdminPercentageSts, 'GET', '', config)
    const getQUizFunc = () => {
        quizAdminStsGet.globalDataFunc()
        quizAdminWeeklyStsGet.globalDataFunc()
        quizAdminPercentageStsGet.globalDataFunc()
    }

    const onlineAdminStsGet = useGlobalRequest(onlineAdminSts, 'GET', '', config)
    const getOnlineFunc = () => {
        onlineAdminStsGet.globalDataFunc()
    }

    useEffect(() => {
        if (admin_role === 'ADMIN_EDU') getEduFunc()
        else if (admin_role === 'ADMIN_QUIZ') getQUizFunc()
        else if (admin_role === 'ADMIN_ONLINE') getOnlineFunc()
    }, []);

    useEffect(() => {
        if (admin_role === 'ADMIN_EDU') getEduFunc()
        else if (admin_role === 'ADMIN_QUIZ') getQUizFunc()
        else if (admin_role === 'ADMIN_ONLINE') getOnlineFunc()
    }, [admin_role]);

    useEffect(() => {
        if (admin_role === 'ADMIN_EDU') setDashboardCardSts(eduAdminStsGet.response)
        if (admin_role === 'ADMIN_QUIZ') setDashboardCardSts(quizAdminStsGet.response)
        if (admin_role === 'ADMIN_ONLINE') setDashboardCardSts(onlineAdminStsGet.response)
    }, [eduAdminStsGet.response, quizAdminStsGet.response, onlineAdminStsGet.response]);

    const roleDashboardSts = (role: string) => {
        if (role === 'ADMIN_EDU') return <>
            {eduAdminStsGet.loading ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    {[...Array(4)].map((_, index) => <Skeleton key={index}/>)}
                </div>
            ) : <EduSts dashboardCardSts={dashboardCardSts}/>}
        </>
        else if (role === 'ADMIN_QUIZ') return <>
            {quizAdminStsGet.loading ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    {[...Array(4)].map((_, index) => <Skeleton key={index}/>)}
                </div>
            ) : <QuizSts dashboardCardSts={dashboardCardSts}/>}
        </>
        else if (role === 'ADMIN_ONLINE') return <>
            {onlineAdminStsGet.loading ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    {[...Array(4)].map((_, index) => <Skeleton key={index}/>)}
                </div>
            ) : <OnlineSts dashboardCardSts={dashboardCardSts}/>}
        </>
    }

    return (
        <>
            {/*==================STS CARD================*/}
            {admin_role && roleDashboardSts(admin_role)}

            {/*==================LINE CHART QUIZ===================*/}
            {admin_role === 'ADMIN_QUIZ' && (<>
                <div className={`mt-10`}>
                    {quizAdminPercentageStsGet.loading ?
                        <Skeleton/> : quizAdminPercentageStsGet.response && (
                        <PieChart
                            title="Test topshirganlarning xolati"
                            names={quizAdminPercentageStsGet.response.map((item: any) => item.status)}
                            values={quizAdminPercentageStsGet.response.map((item: any) => item.percentage)}
                        />
                    )}
                </div>
                <div className={`mt-10`}>
                    {quizAdminWeeklyStsGet.loading ? <Skeleton/> : quizAdminWeeklyStsGet.response && (
                        <ChartLine
                            title={`Haftalik statistika`}
                            seriesTitle={quizAdminWeeklyStsGet.response.map((item: any) => item.weekDay)}
                            category={quizAdminWeeklyStsGet.response.map((item: any) => item.weekDay)}
                            seriesData={quizAdminWeeklyStsGet.response.map((item: any) => item.count)}
                        />
                    )}
                </div>
            </>)}

            {/*==================TOP TABLES STS EDU===================*/}
            {admin_role === 'ADMIN_EDU' && (<>
                <div className="mt-10 flex flex-col gap-10">
                    {eduAdminCategoryStsPercentageGet.loading ?
                        <Skeleton/> : eduAdminCategoryStsPercentageGet.response && (
                        <PieChart
                            title="Oylik kategoriyalar foizi"
                            names={eduAdminCategoryStsPercentageGet.response.map((item: any) => item.categoryName)}
                            values={eduAdminCategoryStsPercentageGet.response.map((item: any) => item.percentage)}
                        />
                    )}
                    {eduAdminCategoryStsYearGet.loading ? <Skeleton/> : eduAdminCategoryStsYearGet.response && (
                        <ChartLine
                            title={`Yillik statistika`}
                            seriesTitle={eduAdminCategoryStsYearGet.response.map((item: any) => item.month)}
                            category={eduAdminCategoryStsYearGet.response.map((item: any) => item.categoryName)}
                            seriesData={eduAdminCategoryStsYearGet.response.map((item: any) => item.totalScore)}
                        />
                    )}
                </div>
                <div className={`mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5`}>
                    <div className={`rounded-sm bg-white`}>
                        <h3 className={`mb-2 font-semibold`}>Top guruhlar</h3>
                        {eduAdminTopGroupGet.loading ? <Skeleton/> : (
                            <Tables thead={topGroupEdu}>
                                {eduAdminTopGroupGet.response ? eduAdminTopGroupGet.response.map((sts: any, idx: number) => (
                                    <tr key={sts.id} className={`hover:bg-whiteGreen duration-100`}>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {idx + 1}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {sts.groupName}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {sts.studentCount}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {sts.scoreMonth}
                                            </p>
                                        </td>
                                    </tr>
                                )) : <tr className={`hover:bg-whiteGreen duration-100`}>
                                    <td className="border-b border-[#eee] p-5 text-center"
                                        colSpan={topGroupEdu.length}>
                                        <p className="text-black">
                                            Top guruhlar mavjud emas.
                                        </p>
                                    </td>
                                </tr>}
                            </Tables>
                        )}
                    </div>
                    <div className={`rounded-sm bg-white`}>
                        <h3 className={`mb-2 font-semibold`}>Top o'qituvchilar</h3>
                        {eduAdminTopTeacherGet.loading ? <Skeleton/> : (
                            <Tables thead={topTeacherEdu}>
                                {eduAdminTopTeacherGet.response ? eduAdminTopTeacherGet.response.map((sts: any, idx: number) => (
                                    <tr key={sts.id} className={`hover:bg-whiteGreen duration-100`}>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {idx + 1}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {sts.fullName}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {sts.phoneNumber}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] p-5">
                                            <p className="text-black">
                                                {sts.scoreMonth}
                                            </p>
                                        </td>
                                    </tr>
                                )) : <tr className={`hover:bg-whiteGreen duration-100`}>
                                    <td className="border-b border-[#eee] p-5 text-center"
                                        colSpan={topTeacherEdu.length}>
                                        <p className="text-black">
                                            Top o'qituvchilar mavjud emas.
                                        </p>
                                    </td>
                                </tr>}
                            </Tables>
                        )}
                    </div>
                </div>
                <div className={`mt-10 grid grid-cols-1`}>
                    <h3 className={`mb-2 font-semibold`}>Top studentlar</h3>
                    {eduAdminTopStudentGet.loading ? <Skeleton/> : (
                        <Tables thead={topStudentEdu}>
                            {eduAdminTopStudentGet.response ? eduAdminTopStudentGet.response.map((sts: any, idx: number) => (
                                <tr key={sts.id} className={`hover:bg-whiteGreen duration-100`}>
                                    <td className="border-b border-[#eee] p-5">
                                        <p className="text-black">
                                            {idx + 1}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] p-5">
                                        <p className="text-black">
                                            {sts.fullName}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] p-5">
                                        <p className="text-black">
                                            {sts.groupName}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] p-5">
                                        <p className="text-black">
                                            {sts.scoreMonth}
                                        </p>
                                    </td>
                                </tr>
                            )) : <tr className={`hover:bg-whiteGreen duration-100`}>
                                <td className="border-b border-[#eee] p-5 text-center"
                                    colSpan={topStudentEdu.length}>
                                    <p className="text-black">
                                        Top studentlar mavjud emas.
                                    </p>
                                </td>
                            </tr>}
                        </Tables>
                    )}
                </div>
            </>)}
        </>
    );
};

export default Dashboard;
