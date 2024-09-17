import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {MdCategory, MdOutlinePlayLesson} from "react-icons/md";
import {VscFileSubmodule} from "react-icons/vsc";
import {PiStudentFill} from "react-icons/pi";

const OnlineSts = ({dashboardCardSts}: { dashboardCardSts: any }) => {
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
                title={`Umumiy modullar soni`}
                total={dashboardCardSts ? dashboardCardSts.moduleCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <VscFileSubmodule className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Umumiy lessonlar soni`}
                total={dashboardCardSts ? dashboardCardSts.lessonCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <MdOutlinePlayLesson className={`text-2xl`}/>
                </div>
            </CardDataStats>
            <CardDataStats
                title={`Umumiy studentlar soni`}
                total={dashboardCardSts ? dashboardCardSts.studentCount : 0}
            >
                <div
                    className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                    <PiStudentFill className={`text-2xl`}/>
                </div>
            </CardDataStats>
        </div>
    );
};

export default OnlineSts;
