import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {MdCategory} from "react-icons/md";
import {FaPeopleGroup} from "react-icons/fa6";
import {FaLayerGroup} from "react-icons/fa";
import {PiStudentBold} from "react-icons/pi";

const EduSts = ({dashboardCardSts}: { dashboardCardSts: any }) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
                title={`Umumiy categoriyalar soni`}
                total={dashboardCardSts ? dashboardCardSts.categoryCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <MdCategory className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Umumiy guruhlar soni`}
                total={dashboardCardSts ? dashboardCardSts.groupCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <FaLayerGroup className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Umumiy studentlar soni`}
                total={dashboardCardSts ? dashboardCardSts.studentCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <PiStudentBold className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Umumiy o'qituvchilar soni`}
                total={dashboardCardSts ? dashboardCardSts.teacherCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <FaPeopleGroup className={`text-2xl`}/>
                </div>
            </CardDataStats>
        </div>
    );
};

export default EduSts;
