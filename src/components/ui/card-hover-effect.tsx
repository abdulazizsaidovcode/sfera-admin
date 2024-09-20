import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Meteors from "@/components/magicui/meteors.tsx";

export const HoverEffect = (
    {
        title,
        description,
        link,
        className,
        onClick,
        idx
    }: {
        title: string;
        description: string;
        link: string;
        className?: string;
        onClick?: () => void
        idx: number
    }) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-3",
                className
            )}
        >
            <Link
                to={link}
                key={link}
                className="relative p-1 group block h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={onClick}
            >
                <AnimatePresence>
                    {hoveredIndex === idx && (
                        <motion.span
                            className="absolute inset-0 h-full w-full bg-whiteGreen block rounded-3xl"
                            layoutId="hoverBackground"
                            initial={{opacity: 0}}
                            animate={{
                                opacity: 1,
                                transition: {duration: 0.15},
                            }}
                            exit={{
                                opacity: 0,
                                transition: {duration: 0.15, delay: 0.2},
                            }}
                        />
                    )}
                </AnimatePresence>
                <Card>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </Card>
            </Link>
        </div>
    );
};

export const Card = (
    {
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
    return (
        <div
            className={cn(
                "rounded-3xl h-full w-full px-2 overflow-hidden bg-white border border-veryPaleGreen duration-200 group-hover:border-lighterGreen relative z-20",
                className
            )}
        >
            <Meteors number={60}/>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = (
    {
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
    return (
        <h4 className={cn("text-black/70 font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = (
    {
        className,
        children,
    }: {
        className?: string;
        children: React.ReactNode;
    }) => {
    return (
        <p
            className={cn(
                "mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
