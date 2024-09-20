import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {HoverEffect} from "@/components/ui/card-hover-effect.tsx";

const Notifications = () => {
    return (
        <>
            <Breadcrumb pageName={`Bildirishnomalar`} />
            <HoverEffect
                idx={1}
                link={`#`}
                title={`salomat`}
                description={`dfafjhbja`}
            />
            <HoverEffect
                idx={2}
                link={`#`}
                title={`we`}
                description={`dfafjhbja`}
            />
            <HoverEffect
                idx={3}
                link={`#`}
                title={`we`}
                description={`dfafjhbja`}
            />
        </>
    );
};

export default Notifications;
