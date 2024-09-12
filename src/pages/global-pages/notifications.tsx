import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {HoverEffect} from "@/components/ui/card-hover-effect.tsx";
import {notificationData} from "@/helpers/constanta.tsx";

const Notifications = () => {
    return (
        <>
            <Breadcrumb pageName={`Bildirishnomalar`} />
            <HoverEffect items={notificationData} />
        </>
    );
};

export default Notifications;
