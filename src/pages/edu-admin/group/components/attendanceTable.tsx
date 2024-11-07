import StudentRow from './check';
import moment from "moment";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import toast from "react-hot-toast";

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

const AttendanceTable = ({active, setActive, response, groupRes}: {
    active: number,
    setActive: (v: number) => void,
    response: any,
    groupRes: any
}) => {
    return (
        <div className="w-3/4 bg-white p-6 shadow-md rounded-lg relative">
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3 gap-2">
                {months.map((month, index) => (
                    <span
                        key={index}
                        onClick={() => setActive(month.id)}
                        className={`${month.id === active ? 'text-orange-600 font-bold border-orange-600' : 'border-black/40'} border rounded-xl px-4 py-1.5 hover:cursor-pointer shadow-md`}
                    >
                        {month.month}
                    </span>
                ))}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                    <tr>
                        <th className="font-medium border-b border-black/50 p-2">Ism</th>
                        {response?.days?.length > 0 && response.days.map((date: string, index: number) => (
                            <th key={index} className="text-center font-medium border-b border-black/50 min-w-24">
                                {moment(date).format('DD MMM')}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {groupRes?.students?.length > 0 ? groupRes.students.map((name: {
                        fullName: string
                        studentId: number
                    }, index: number) => (
                        <StudentRow
                            key={index}
                            name={name}
                            dates={response?.days}
                            checkData={response?.attendanceDtos}
                        />
                    )) : <>
                        <tr>
                            <td colSpan={response?.days?.length} className={'py-3 text-center'}>
                                Studentlar mavjud emas
                            </td>
                        </tr>
                    </>}
                    </tbody>
                </table>
            </div>
            {groupRes?.students?.length > 0 && (
                <div
                    className={`${groupRes.students.length >= 6 ? 'flex justify-end mt-7' : 'absolute bottom-5 right-5'}`}
                >
                    <ShinyButton
                        text={'Saqlash'}
                        className={'bg-darkGreen'}
                        onClick={() => {
                            toast.error('Xali qilingani yuq')
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default AttendanceTable;
