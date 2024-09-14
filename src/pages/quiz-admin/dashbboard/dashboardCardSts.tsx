import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {BiCategory} from "react-icons/bi";

const QuizSts = ({dashboardCardSts}: { dashboardCardSts: any }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
                title={`Categoriyalar soni`}
                total={dashboardCardSts ? dashboardCardSts.categoryCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Yaxshi natijalar soni`}
                total={dashboardCardSts ? dashboardCardSts.goodResultsCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Yomon natijalar soni`}
                total={dashboardCardSts ? dashboardCardSts.badResultsCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Savollar soni`}
                total={dashboardCardSts ? dashboardCardSts.questionCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Umumiy natijalar soni`}
                total={dashboardCardSts ? dashboardCardSts.resultCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Super natijalar soni`}
                total={dashboardCardSts ? dashboardCardSts.superResultsCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Bugungi natijalar soni`}
                total={dashboardCardSts ? dashboardCardSts.todayResultsCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Umumiy foydalanuvchilar soni`}
                total={dashboardCardSts ? dashboardCardSts.userCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <BiCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
        </div>
    );
};

export default QuizSts;
