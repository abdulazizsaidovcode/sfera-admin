import StudentRow from './check';
import moment from "moment";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import toast from "react-hot-toast";
import {useEffect, useState} from "react";
// import {todayDate} from "@/helpers/functions/common-functions.tsx";
import {IStudentData} from "@/types/global.ts";
import {useGlobalRequest} from "@/helpers/functions/restApi-function.tsx";
import {attendanceCreate} from "@/helpers/api.tsx";
import {config} from "@/helpers/token.tsx";
import {notFound} from "@/helpers/constanta.tsx";

const months = [
    {month: 'Yan', id: 1},
    {month: 'Fev', id: 2},
    {month: 'Mar', id: 3},
    {month: 'Apr', id: 4},
    {month: 'May', id: 5},
    {month: 'Jun', id: 6},
    {month: 'Jul', id: 7},
    {month: 'Avg', id: 8},
    {month: 'Sen', id: 9},
    {month: 'Oct', id: 10},
    {month: 'Noy', id: 11},
    {month: 'Dek', id: 12}
];

export interface IAttendance {
    attendDtoList: {
        attendance: null | boolean
        date: string
        id: null | number
    }[]
    studentId: number
    studentLastName: string
    studentName: string
}

const AttendanceTable = ({active, setActive, response, setAddResp}: {
    active: number,
    setActive: (v: number) => void,
    response: IAttendance[],
    setAddResp: (v: string) => void,
}) => {
    const [attendanceData, setAttendanceData] = useState<IStudentData[]>([]);
    // const [isAttendance, setIsAttendance] = useState<boolean>(false)

    const {
        loading: addLoading,
        globalDataFunc: addAttendance,
        response: addResponse
    } = useGlobalRequest(attendanceCreate, 'POST', attendanceData, config)

    // ==========KERAK BULISHI MUMKIN==========
    // useEffect(() => {
    //     const foundAttendance = response?.length > 0 && response?.some(item =>
    //         item.attendDtoList?.some(i => {
    //             if (i.date === todayDate()) {
    //                 setIsAttendance(i.attendance !== null);
    //                 return true;
    //             }
    //             return false;
    //         })
    //     );
    //     if (!foundAttendance) setIsAttendance(false);
    // }, [response]);

    useEffect(() => {
        if (addResponse) {
            setAttendanceData([])
            // setIsAttendance(false)
            setAddResp(addResponse)
        }
    }, [addResponse]);

    useEffect(() => {
        setAttendanceData([])
    }, [active]);

    const handleUpdateAttendance = (data: { studentId: number; attendance: boolean; date: string }[]) => {
        setAttendanceData((prev) => {
            const filtered = prev.filter((item) => item.studentId !== data[0].studentId || item.date !== data[0].date);
            return [...filtered, ...data];
        });
    };

    return (
        <div className="w-full lg:w-3/4 bg-white p-4 lg:p-6 shadow-md rounded-lg">
            <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-600 mb-2 md:mb-3 gap-2">
                {months.map((month, index) => (
                    <span
                        key={index}
                        onClick={() => setActive(month.id)}
                        className={`${month.id === active ? "text-orange-600 font-bold border-orange-600" : "border-black/40"} border rounded-xl px-3 py-1 md:px-4 md:py-1.5 hover:cursor-pointer shadow-md`}
                    >
                        {month.month}
                    </span>
                ))}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr>
                        {response?.length > 0 && (
                            <th className="font-medium border-b border-black/50 p-2 text-xs md:text-sm">
                                Ism
                            </th>
                        )}
                        {response?.length > 0 &&
                            response[0].attendDtoList.map((date, index) => (
                                <th
                                    key={index}
                                    className="text-center font-medium border-b border-black/50 min-w-[70px] text-xs md:text-sm"
                                >
                                    {moment(date.date).format("DD MMM")}
                                </th>
                            ))}
                    </tr>
                    </thead>
                    <tbody>
                    {response?.length > 0 ? (
                        response.map((item, index) => (
                            <StudentRow
                                key={index}
                                data={item}
                                updateAttendance={handleUpdateAttendance}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={response?.length} className="py-3 text-center text-xs md:text-sm">
                                {notFound}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            {response?.length > 0 && (
                <div className="flex justify-end mt-4 md:mt-5">
                    <ShinyButton
                        text={addLoading ? "Yuborilmoqda..." : "Saqlash"}
                        className={`bg-darkGreen ${addLoading && "cursor-not-allowed opacity-60"}`}
                        onClick={() => {
                            if (attendanceData.length > 0 && !addLoading) addAttendance();
                            else toast.error("Hech bo'lmaganda 1 ta o'quvchini tanlang!");
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default AttendanceTable;
