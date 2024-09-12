import CardDataStats from "@/components/custom/cards/statistic-card.tsx";
import {BiCategory} from "react-icons/bi";
import {FaCircleQuestion} from "react-icons/fa6";
import {PiArrowsOutCardinal} from "react-icons/pi";
import {FaUsers} from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <CardDataStats title="Умумий категория" total={`${45}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <BiCategory className={`text-2xl`}/>
                    </div>
                </CardDataStats>
                <CardDataStats title="Умумий савол" total={`${100}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <FaCircleQuestion className={`text-2xl`}/>
                    </div>
                </CardDataStats>
                <CardDataStats title="Умумий натижа" total={`${50}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <PiArrowsOutCardinal className={`text-2xl`}/>
                    </div>
                </CardDataStats>
                <CardDataStats title="Жами фойдаланувчилар" total={`${340}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <FaUsers className={`text-2xl`}/>
                    </div>
                </CardDataStats>
                <CardDataStats title="Жами фойдаланувчилар" total={`${340}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <FaUsers className={`text-2xl`}/>
                    </div>
                </CardDataStats>
                <CardDataStats title="Жами фойдаланувчилар" total={`${340}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <FaUsers className={`text-2xl`}/>
                    </div>
                </CardDataStats>
                <CardDataStats title="Жами фойдаланувчилар" total={`${340}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <FaUsers className={`text-2xl`}/>
                    </div>
                </CardDataStats>
                <CardDataStats title="Жами фойдаланувчилар" total={`${340}`}>
                    <div
                        className="fill-primary dark:fill-white w-14 h-14 rounded-full flex justify-center items-center">
                        <FaUsers className={`text-2xl`}/>
                    </div>
                </CardDataStats>
            </div>
        </>
    );
};

export default Dashboard;
