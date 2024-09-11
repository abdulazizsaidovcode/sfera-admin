import {BentoCard, BentoGrid} from "@/components/magicui/bento-grid.tsx";
import {features} from "@/helpers/constanta.tsx";

const SiteRole = () => {
    return (
        <>
            <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </>
    );
};

export default SiteRole;
