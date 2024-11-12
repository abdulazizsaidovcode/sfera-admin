import React, {useState} from 'react';
import {todayDate} from "@/helpers/functions/common-functions.tsx";
import {IAttendance} from "@/types/attendance.ts";

interface StudentRowProps {
    data: IAttendance;
    updateAttendance: (data: { studentId: number; attendance: boolean; date: string }[]) => void;
}

const StudentRow: React.FC<StudentRowProps> = ({data, updateAttendance}) => {
    const [attendance, setAttendance] = useState<{ [key: string]: string | null }>(() => {
        const initialAttendance: { [key: string]: string | null } = {};
        data.attendDtoList.forEach((item) => {
            initialAttendance[item.date] =
                item.attendance === true ? 'Bor edi' :
                    item.attendance === false ? 'Yo\'q' : null;
        });
        return initialAttendance;
    });

    const handleClick = (date: string) => {
        if (date !== todayDate()) return;

        const newStatus = attendance[date] === 'Bor edi' ? 'Yo\'q' : 'Bor edi';
        setAttendance((prev) => ({...prev, [date]: newStatus}));

        updateAttendance([
            {
                studentId: data.studentId,
                attendance: newStatus === 'Bor edi',
                date: todayDate(),
            },
        ]);
    };

    return (
        <tr className="border-b border-black/40">
            <td className="p-3 pl-1 pr-5">
                {data.studentName} {data.studentLastName}
            </td>
            {data?.attendDtoList.length > 0 &&
                data.attendDtoList.map((item, index) => (
                    <td key={index} className="text-center p-2 min-w-24">
                        <div
                            className={`${todayDate() === item.date ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'} ${
                                attendance[item.date] ? 'px-3 py-1.5 rounded-xl' : 'p-4 hover:px-3 hover:py-1.5 rounded-full'
                            } text-sm font-medium border border-black/30 transition-colors duration-300 ${
                                attendance[item.date] === 'Bor edi'
                                    ? 'bg-teal-500 text-white'
                                    : attendance[item.date] === 'Yo\'q'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-800'
                            }`}
                            onClick={() => handleClick(item.date)}
                            onMouseEnter={(e) => (e.currentTarget.innerText = attendance[item.date] === 'Bor edi' ? 'Yo\'q' : 'Bor edi')}
                            onMouseLeave={(e) => (e.currentTarget.innerText = attendance[item.date] || '')}
                        >
                            {attendance[item.date] || ''}
                        </div>
                    </td>
                ))}
        </tr>
    );
};

export default StudentRow;
