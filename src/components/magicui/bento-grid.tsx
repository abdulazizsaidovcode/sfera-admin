import {ReactNode} from "react";
import {ArrowRightIcon} from "@radix-ui/react-icons";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {BorderBeam} from "@/components/magicui/border-beam.tsx";
import Meteors from "@/components/magicui/meteors.tsx";

const BentoGrid = ({children, className,}: { children: ReactNode; className?: string; }) => {
    return <div className={cn(className)}>{children}</div>
};

const BentoCard = (
    {
        name,
        className,
        background,
        Icon,
        description,
        href,
        cta,
        onSetRole
    }: {
        name: string;
        className: string;
        background: ReactNode;
        Icon: any;
        description: string;
        href: string;
        cta: string;
        onSetRole: () => void
    }) => (
    <div
        key={name}
        className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl",
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            className,
        )}
    >
        <BorderBeam size={600} duration={10} delay={2}/>
        <Meteors number={50}/>
        <div>{background}</div>
        <div
            className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            {Icon}
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
                <Link to={href} onClick={onSetRole}>
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4"/>
                </Link>
            </Button>
        </div>
        <div
            className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10"/>
    </div>
);

export {BentoCard, BentoGrid};
