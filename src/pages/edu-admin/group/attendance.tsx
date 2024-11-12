import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {useParams} from "react-router-dom";
import SidebarStudent from "./components/students.tsx";
import AttendanceTable from "./components/attendanceTable.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import {config} from "@/helpers/token.tsx";
import {attendanceGet, groupCrud, paymentSts} from "@/helpers/api.tsx";
import {useEffect, useState} from "react";
import Skeleton from "@/components/custom/skeleton/skeleton-cards.tsx";
import StsTable from "@/pages/edu-admin/group/components/stsTable.tsx";
import toast from "react-hot-toast";
import attendanceStore from "@/helpers/state-management/attendanceStore.tsx";

const GroupAttendance = () => {
    const {id} = useParams<{ id: string }>();
    const {activeYear} = attendanceStore()
    const [addResp, setAddResp] = useState('')
    const [active, setActive] = useState<number>(new Date().getMonth() + 1)

    const {
        loading,
        globalDataFunc,
        response
    } = useGlobalRequest(`${attendanceGet}?groupId=${id}&year=${activeYear}&month=${active}`, 'GET', '', config)
    const {
        loading: groupLoading,
        globalDataFunc: oneGetGroup,
        response: oneGroupData
    } = useGlobalRequest(`${groupCrud}/${id}`, 'GET', '', config)
    const {
        loading: stsLoading,
        globalDataFunc: stsFunction,
        response: stsData
    } = useGlobalRequest(`${paymentSts}${id}?year=${activeYear}&month=${active}`, 'GET', '', config)

    useEffect(() => {
        globalDataFunc()
        oneGetGroup()
        stsFunction()
    }, [id, globalDataFunc, oneGetGroup, stsFunction]);

    useEffect(() => {
        globalDataFunc()
        stsFunction()
    }, [active, activeYear, globalDataFunc, stsFunction]);

    useEffect(() => {
        oneGetGroup()
    }, [activeYear, oneGetGroup]);

    useEffect(() => {
        if (addResp) {
            globalDataFunc()
            stsFunction()
            toast.success('O\'zgarishlar muvaffaqiyatli saqlandi ✅')
            setTimeout(() => {
                setAddResp('')
            }, 200)
        }
    }, [addResp, globalDataFunc, stsFunction]);

    return (
        <>
            <Breadcrumb pageName={`Guruhlar`} subPage={`Davomat`}/>

            <div
                className="flex flex-col lg:flex-row bg-gray-100 w-full min-h-[50vh] lg:space-x-4 space-y-4 lg:space-y-0"
            >
                {groupLoading ? (
                    <div className="grid grid-cols-1 gap-4 w-full lg:w-1/4">
                        <Skeleton/>
                        <Skeleton/>
                    </div>
                ) : <SidebarStudent response={oneGroupData}/>}
                {groupLoading && loading ? (
                    <div className="grid grid-cols-1 gap-4 w-full lg:w-3/4">
                        <Skeleton/>
                        <Skeleton/>
                    </div>
                ) : (
                    <AttendanceTable
                        response={response}
                        active={active}
                        setActive={setActive}
                        setAddResp={setAddResp}
                    />
                )}
            </div>
            {stsLoading ? <div className={'grid grid-cols-1 gap-4 mt-6'}>
                <Skeleton/>
                <Skeleton/>
            </div> : <StsTable res={stsData}/>}
        </>
    );
};

export default GroupAttendance;
