import moment from "moment";

const SidebarStudent = ({response}: { response: any }) => {
    return (
        <div className="bg-white p-6 w-1/4 shadow-md rounded-lg">
            <h2 className="text-lg font-bold">{response?.name}</h2>
            <p className="mt-2">
                <span className={'font-semibold'}>{response?.name}</span> • {response?.teacherName}
            </p>
            <p className="text-gray-500">
                <span className={'font-semibold'}>
                    {response?.daysName[0] === 'MONDAY' ? 'Toq kunlar ' : 'Juft kunlar '}
                </span>
                • {response?.daysName[0] === 'MONDAY' ? 'Dushanba, Chorshanba, Juma' : 'Seshanba, Payshanba, Shanba'}
            </p>
            <p className="text-gray-500">
                <span className={'font-semibold'}>Guruh ochilgan kun: </span>
                {moment(response?.startDate).format('DD.MM.YYYY')}
            </p>
            <p className="text-gray-500">
                <span className={'font-semibold'}>Mashg'ulotlar vaqti: </span>
                {response?.startTime} – {response?.endTime}
            </p>

            <ul className="mt-5">
                <p className={'font-semibold'}>{response?.name}: <span>O'quvchilari</span></p>
                {response?.students?.length > 0 ? response.students.map((name: {
                    studentId: number,
                    fullName: string,
                    active: boolean
                }, index: number) => (
                    <li key={index} className={`${name.active ? 'text-gray-800' : 'text-red-500 line-through'}`}>
                        {index + 1}. {name.fullName}
                    </li>
                )) : <p>Studentlar mavjud emas</p>}
            </ul>
        </div>
    );
};

export default SidebarStudent;