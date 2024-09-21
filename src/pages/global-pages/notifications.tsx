import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {Card, CardTitle, HoverEffect} from "@/components/ui/card-hover-effect.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import {notificationGet} from "@/helpers/api.tsx";
import {config} from "@/helpers/token.tsx";
import {useEffect} from "react";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import {MdNote} from "react-icons/md";

const Notifications = () => {
    const {response, loading, globalDataFunc} = useGlobalRequest(notificationGet, 'GET', '', config)
    useEffect(() => {
        globalDataFunc();
    }, []);

    return (
        <>
            <Breadcrumb pageName={`Bildirishnomalar`}/>
            <Card className={`mb-10`}>
                <CardTitle className={`text-center`}>
                    Adminni o'zi yuborgan (boshqalarga yuborgan) xabarlari shu yerda chiqadi
                </CardTitle>
            </Card>
            {loading ? <div className={`w-full grid grid-cols-1 gap-3`}>
                {[...Array(4)].map((_, index) => <Skeleton key={index}/>)}
            </div> : response ? response.map((n: any, idx: number) => (
                <HoverEffect
                    idx={idx}
                    title={n.title}
                    description={`Tavsif: ${n.content}`}
                    date={n.create}
                />
            )) : <Card className={`mt-10`}>
                <CardTitle className={`flex items-center justify-center gap-3`}>
                    Ma'lumot topilmadi <MdNote className={`text-darkGreen text-3xl`}/>
                </CardTitle>
            </Card>}
        </>
    );
};

export default Notifications;
