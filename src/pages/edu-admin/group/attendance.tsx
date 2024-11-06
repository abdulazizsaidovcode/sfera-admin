import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {useParams} from "react-router-dom";
import SidebarStudent from "./components/students.tsx";
import AttendanceTable from "./components/attendanceTable.tsx";

const GroupAttendance = () => {
    const {id, name} = useParams<{ id: string; name: string }>();
    console.log(`id: ${id}, name: ${name}`);

    return (
        <>
            <Breadcrumb pageName={`Guruhlar`} subPage={'Davomat'}/>

            <div className="flex bg-gray-100 min-h-screen space-x-4">
                <SidebarStudent/>
                <AttendanceTable/>
            </div>
        </>
    );
};

export default GroupAttendance;
