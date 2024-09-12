import React, {ReactNode} from 'react';
import {BorderBeam} from "@/components/magicui/border-beam.tsx";
import Meteors from "@/components/magicui/meteors.tsx";
import NumberGenerate from "@/components/magicui/number-ticker.tsx";

interface CardDataStatsProps {
    title: string;
    total: string;
    children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = (
    {
        title,
        total,
        children,
    }) => {
    return (
        <div className="relative overflow-hidden rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <BorderBeam size={600} duration={10} delay={2}/>
            <Meteors number={60} />
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                {children}
            </div>
            <div className="mt-4 flex items-end justify-between">
                <div>
                    <span className="text-sm font-medium">{title}</span>
                    <h4 className="text-title-md font-bold text-black dark:text-white">
                    <NumberGenerate value={+total} />
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default CardDataStats;
