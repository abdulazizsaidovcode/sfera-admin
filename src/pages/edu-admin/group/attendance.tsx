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
import {unReload} from "@/helpers/functions/common-functions.tsx";

const GroupAttendance = () => {
    const {id, name} = useParams<{ id: string; name: string }>();
    const [addResp, setAddResp] = useState('')
    const [active, setActive] = useState<number>(new Date().getMonth() + 1)
    const defYear = new Date().getFullYear()
    const {
        loading,
        globalDataFunc,
        response
    } = useGlobalRequest(`${attendanceGet}?groupId=${id}&year=${defYear}&month=${active}`, 'GET', '', config)
    const {
        loading: groupLoading,
        globalDataFunc: oneGetGroup,
        response: oneGroupData
    } = useGlobalRequest(`${groupCrud}/${id}`, 'GET', '', config)
    const {
        loading: stsLoading,
        globalDataFunc: stsFunction,
        response: stsData
    } = useGlobalRequest(`${paymentSts}${id}?year=${defYear}&month=${active}`, 'GET', '', config)


    useEffect(() => {
        globalDataFunc()
        oneGetGroup()
        stsFunction()
        unReload()
    }, []);

    useEffect(() => {
        globalDataFunc()
        stsFunction()
    }, [active]);

    useEffect(() => {
        if (addResp) {
            globalDataFunc()
            stsFunction()
            setTimeout(() => {
                setAddResp('')
            }, 200)
        }
    }, [addResp]);

    return (
        <>
            <Breadcrumb pageName={`Guruhlar`} subPage={`Davomat: ${name}`}/>

            <div className="flex bg-gray-100 min-h-screen space-x-4">
                {groupLoading ? <div className={'grid grid-cols-1 gap-4 w-1/4'}>
                    <Skeleton/>
                    <Skeleton/>
                </div> : <SidebarStudent response={oneGroupData}/>}
                {groupLoading && loading ? <div className={'grid grid-cols-1 gap-4 w-3/4'}>
                        <Skeleton/>
                        <Skeleton/>
                    </div> :
                    <AttendanceTable
                        response={response}
                        active={active}
                        setActive={setActive}
                        setAddResp={setAddResp}
                    />
                }
            </div>
            {stsLoading ? <div className={'grid grid-cols-1 gap-4 mt-6'}>
                <Skeleton/>
                <Skeleton/>
            </div> : <StsTable res={stsData}/>}
        </>
    );
};

export default GroupAttendance;
