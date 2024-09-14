import {BentoCard, BentoGrid} from "@/components/magicui/bento-grid.tsx";
import {features} from "@/helpers/constanta.tsx";
import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {BiCategory} from "react-icons/bi";
import {FaCircleQuestion} from "react-icons/fa6";
import {PiArrowsOutCardinal} from "react-icons/pi";
import {FaUsers} from "react-icons/fa";
import DotPattern from "@/components/magicui/dot-pattern.tsx";
import {siteRoleCardSts} from "@/helpers/api.tsx";
import {config} from "@/helpers/token.tsx";
import {useEffect, useState} from "react";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import LineChart from "@/components/custom/chart/line-chart.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";

const SiteRole = () => {
    const {loading, response, globalDataFunc} = useGlobalRequest(siteRoleCardSts, `GET`, '', config)
    const [chartData, setChartData] = useState<null | any[]>(null)

    useEffect(() => {
        globalDataFunc();
    }, [globalDataFunc]);

    useEffect(() => {
        if (response) {
            if (response.rolePiece && response.rolePiece.length > 0) {
                let data: any[] = [];
                response.rolePiece.map((item: any) => data.push(item.piece.toFixed(2)))
                setChartData(data)
            }
        }
    }, [response]);

    return (
        <>
            <DotPattern height={'100%'}/>
            <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
            {loading ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-10">
                    {[...Array(4)].map((_, index) => (
                        <Skeleton key={index}/>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-10">
                    <CardDataStats title="Umumiy foydalanuvchilar soni" total={`${response ? response.countAll : 0}`}>
                        <div
                            className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <BiCategory className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                    <CardDataStats title="Umumiy studentlar soni" total={`${response ? response.countStudent : 0}`}>
                        <div
                            className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <FaCircleQuestion className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                    <CardDataStats title="Umumiy o'qituvchilar soni" total={`${response ? response.countTeacher : 0}`}>
                        <div
                            className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <PiArrowsOutCardinal className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                    <CardDataStats title="Boshqa foydalanuvchilar" total={`${response ? response.countUser : 0}`}>
                        <div
                            className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                            <FaUsers className={`text-2xl`}/>
                        </div>
                    </CardDataStats>
                </div>
            )}
            <div className={`mt-10`}>
                {loading ? (
                    <div className="grid grid-cols-1 h-[350px]">
                        <Skeleton/>
                    </div>
                ) : (
                    (response && chartData) ? (
                        <LineChart
                            title={`Foydalanuvchilar protsentlarda (%)`}
                            category={['Boshqa foydalanuvchilar', 'Markaz o\'quvchilari', 'O\'qituvchilar']}
                            seriesTitle={`foizlarda (%)`}
                            seriesData={chartData}
                            type={`bar`}
                        />
                    ) : <p className={`text-center text-xl font-semibold`}>Ma'lumot topilmadi.</p>
                )}
            </div>
        </>
    );
};

export default SiteRole;
