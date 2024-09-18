import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {MdDelete} from "react-icons/md";
import Tables from "@/components/custom/tables/table.tsx";
import {userTableHead} from "@/helpers/constanta.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function";
import {config} from "@/helpers/token";
import {useEffect, useState} from "react";
import {FaPen} from "react-icons/fa";
import Skeleton from "@/components/custom/skeleton/skeleton-cards";
// import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {allUsers, groupList} from "@/helpers/api.tsx";
import {Input, Pagination, Select} from "antd";

const Users = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [role, setRole] = useState<string | null>(null);
    const [group, setGroup] = useState<string | null>(null);
    const [teacher, setTeacher] = useState<string | null>(null);
    const [page, setPage] = useState<number>(0);

    const getTestUrl = () => {
        const queryParams: string = [
            name ? `name=${name}` : '',
            teacher ? `teacherId=${teacher}` : '',
            group ? `groupId=${group}` : '',
            role ? `role=${role}` : '',
            phone ? `phone_number=${phone}` : ''
        ].filter(Boolean).join('&');

        return `${allUsers}?${queryParams ? `${queryParams}&` : ''}page=${page}&size=10`;
    }

    const users = useGlobalRequest(getTestUrl(), 'GET', '', config);
    const groups = useGlobalRequest(groupList, 'GET', '', config);

    useEffect(() => {
        users.globalDataFunc()
        groups.globalDataFunc();
    }, []);

    useEffect(() => {
        users.globalDataFunc()
    }, [name, phone, role, group, teacher, page]);

    // const filterClear = () => {
    //     setName('');
    //     setPhone('');
    //     setRole('');
    //     setGroup('');
    //     setTeacher('');
    // }

    const userRole = (role: string) => {
        if (role === 'ROLE_STUDENT') return 'O\'quvchi';
        else if (role === 'ROLE_USER') return 'Boshqa foydalanuvchi';
        else if (role === 'ROLE_TEACHER') return 'O\'qituvchi';
    }

    return (
        <>
            <Breadcrumb pageName={`Foydalanuvchilar`}/>

            {/*===================SEARCH===================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10`}>
                <Input
                    className={`w-full bg-transparent h-11`}
                    placeholder="F.I.O qidirish..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    allowClear
                />
                <Input
                    className={`w-full bg-transparent h-11`}
                    placeholder="Telifon raqam bo'yicha..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    allowClear
                />
                <Select
                    placeholder={`Roli bo'yicha`}
                    className={`w-full bg-transparent h-11`}
                    value={role}
                    onChange={(e) => setRole(e)}
                    allowClear
                >
                    <Select.Option value="ROLE_TEACHER">O'qituvchilar</Select.Option>
                    <Select.Option value="ROLE_STUDENT">O'quvchilar</Select.Option>
                    <Select.Option value="ROLE_USER">Boshqa foydalanuvchilar</Select.Option>
                </Select>
                <Select
                    placeholder={`Guruh bo'yicha`}
                    className={`w-full bg-transparent h-11`}
                    value={group}
                    onChange={(e) => setGroup(e)}
                    allowClear
                >
                    {groups.response && groups.response.map((grp: any, idx: any) => (
                        <Select.Option key={idx} value={grp.groupId}>{grp.groupName}</Select.Option>
                    ))}
                </Select>
                <Select
                    placeholder={`O'qituvchi tanlash`}
                    className={`w-full bg-transparent h-11`}
                    value={teacher}
                    onChange={(e) => setTeacher(e)}
                    allowClear
                >
                    {/*<Select.Option>Teacher yuq</Select.Option>*/}
                </Select>
                {/*<ShinyButton*/}
                {/*    text={`Tozalash`}*/}
                {/*    onClick={() => filterClear()}*/}
                {/*    className={`bg-darkGreen py-3`}*/}
                {/*/>*/}
            </div>

            {/*========================BODY===================*/}
            <div className={`mt-6`}>
                {users.loading ? <div className={`grid grid-cols-1 gap-5`}>
                        <Skeleton/>
                        <Skeleton/>
                    </div> :
                    <Tables thead={userTableHead}>
                        {(users.response && users.response.body.length > 0) ? users.response.body.map((sts: any, idx: any) => (
                            <tr key={sts.id} className={`hover:bg-whiteGreen duration-100`}>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {(page * 10) + idx + 1}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {sts.firstName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {sts.lastName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {sts.phoneNumber}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {userRole(sts.role)}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5 flex gap-3">
                                    <MdDelete className="text-2xl text-red-500 cursor-pointer"/>
                                    <FaPen className="text-xl text-yellow-400 cursor-pointer"/>
                                </td>
                            </tr>
                        )) : <tr>
                            <td className="border-b border-[#eee] p-5" colSpan={userTableHead.length}>
                                <p className="text-black text-center">
                                    Foydalanuvchilar topilmadi
                                </p>
                            </td>
                        </tr>}
                    </Tables>
                }
                <Pagination
                    showSizeChanger={false}
                    responsive={true}
                    defaultCurrent={1}
                    total={users.response ? users.response.totalElements : 0}
                    onChange={(page: number) => setPage(page - 1)}
                    rootClassName={`mt-8 mb-5`}
                />
            </div>
        </>
    );
};

export default Users;
