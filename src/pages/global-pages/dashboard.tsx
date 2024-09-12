import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {lineChartData, statisticData} from "@/helpers/constanta.tsx";
import ChartLine from "@/components/custom/chart/line-chart.tsx";

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
        </>
    );
};

export default Dashboard;
