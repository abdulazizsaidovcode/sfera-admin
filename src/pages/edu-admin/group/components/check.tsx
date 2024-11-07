import React, {useState} from 'react';

interface StudentRowProps {
    name: {
        attendance: boolean
        date: string
        id: number
        studentLastName: string
        studentName: string
    };
    dates: string[];
    checkData: any[]
}

const StudentRow: React.FC<StudentRowProps> = ({name, dates, checkData}) => {
    const [attendance, setAttendance] = useState<{ [key: string]: string }>({});
    const day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    // const today = `${year}-${month}-${day}`
    const today = `2024-11-06`
    const handleClick = (date: string, status: string) => setAttendance({...attendance, [date]: status});

    console.log(checkData);
    return (
        <tr className="border-b border-black/40">
            <td className="p-3 pl-1 pr-5">{name.studentName} {name.studentLastName}</td>
            {dates?.length > 0 && dates.map((date, index) => (
                <td key={index} className="text-center p-2 min-w-24">
                    <div
                        className={`${today === date ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'} ${attendance[date] ? 'px-3 py-1.5 rounded-xl' : 'p-4 hover:px-3 hover:py-1.5 rounded-full'} text-sm font-medium border border-black/30 transition-colors duration-300 ${
                            attendance[date] === 'Bor edi'
                                ? 'bg-teal-500 text-white'
                                : attendance[date] === 'Yo\'q'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => {
                            if (today === date) handleClick(date, attendance[date] === 'Bor edi' ? 'Yo\'q' : 'Bor edi')
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.innerText = attendance[date] === 'Bor edi' ? 'Yo\'q' : 'Bor edi'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.innerText = attendance[date] || ''
                        }}
                    >
                        {attendance[date] || ''}
                    </div>
                </td>
            ))}
        </tr>
    );
};

export default StudentRow;
