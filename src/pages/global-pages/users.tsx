import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import { MdDelete } from "react-icons/md";
import Tables from "@/components/custom/tables/table.tsx";
import { userTableHead } from "@/helpers/constanta.tsx";
import { useGlobalRequest } from "@/helpers/functions/restApi-function";
import { config } from "@/helpers/token";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import Skeleton from "@/components/custom/skeleton/skeleton-cards";

const Users = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [group, setGroup] = useState('');
    const [teacher, setTeacher] = useState('');
    const [url, setUrl] = useState('http://142.93.106.195:8080/user/searchUser?page=0&size=10');

    const users = useGlobalRequest(url, 'GET', '', config);
    const groups = useGlobalRequest('http://142.93.106.195:8080/group', 'GET', '', config);

    useEffect(() => {
        groups.globalDataFunc();
    }, []);

    // inputlarni qiymatiga qarab url uchun text qaytaradi
    const constructQueryParams = () => {
        return [
            name ? `name=${name}` : '',
            phone ? `phone_number=${phone}` : '',
            role ? `role=${role}` : '',
            group ? `groupId=${group}` : '',
            teacher ? `teacherId=${teacher}` : ''
        ].filter(Boolean).join('&');
    };

    // inputlarni qiymatini olish
    useEffect(() => {
        const queryParams = constructQueryParams();
        const newUrl = `http://142.93.106.195:8080/user/searchUser?${queryParams ? queryParams + '&' : ''}page=0&size=10`;

        setUrl(newUrl);
    }, [name, phone, role, group, teacher]);

    // qachonki link ozgarganda ishlaydi

    useEffect(() => {
        if (url) {
            users.globalDataFunc(); // Trigger fetch on URL change
        }
    }, [url]);


    return (
        <>
            <Breadcrumb pageName={`Foydalanuvchilar`} />
            {/*===================ADD OR SEARCH===================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10`}>
                <div
                    className={`w-full lg:max-w-full flex justify-start xl:justify-between items-center flex-wrap md:flex-nowrap gap-5`}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type={`search`}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg  block w-full p-2.5"
                        placeholder="ismi bo'yicha"
                    />
                    <input
                        type="search"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg  block w-full p-2.5"
                        placeholder="telifon raqam bo'yicha"
                    />
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        id="countries"
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg  block w-full p-2.5">
                        <option disabled selected value=''>Role tanlash</option>
                        <option value="ROLE_TEACHER">O'qituvchilar</option>
                        <option value="ROLE_STUDENT">O'quvchilar</option>
                        <option value="ROLE_USER">userlar</option>
                    </select>
                    <select
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        id="countries"
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg  block w-full p-2.5">
                        <option selected disabled value=''>Guruh tanlash</option>
                        {groups.response ? groups.response.map((grp: any, idx: any) => (
                            <option key={idx} value={grp.groupId}>{grp.groupName}</option>
                        )) :
                            <option value="" disabled>guruhlar yo'q</option>
                        }
                    </select>
                    <select
                        value={teacher}
                        onChange={(e) => setTeacher(e.target.value)}

                        id="countries"
                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg  block w-full p-2.5">
                        <option selected disabled value=''>O'qituvchi tanlash</option>
                        <option value="US">United States</option>
                    </select>
                    <button
                        onClick={() => {
                            setName('');
                            setPhone('');
                            setRole('');
                            setGroup('');
                            setTeacher('');
                            setUrl('http://142.93.106.195:8080/user/searchUser?page=0&size=10');
                        }}
                        className={`login__button px-5 py-2.5 text-white bg-darkGreen hover:bg-darkerGreen rounded-lg transition-all duration-300 ease-in-out`}>
                        tozalash
                    </button>

                </div>
            </div>

            {/*========================BODY===================*/}
            <div className={`mt-6`}>
                {users.loading ?
                    <div className="grid grid-cols-1 gap-12 2xl:gap-7.5 mb-2">
                        {[...Array(1)].map((_, index) => <Skeleton key={index} />)}
                    </div>
                    :
                    <Tables thead={userTableHead}>
                        {(users.response && users.response.body.length > 0) ? users.response.body.map((sts: any, idx: any) => (

                            <tr key={sts.id} className={`hover:bg-whiteGreen duration-100`}>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {idx + 1}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {sts.firstName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {sts.lastName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                    <p className="text-black dark:text-white">
                                        {sts.phoneNumber}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark flex gap-3 cursor-pointer">
                                    <MdDelete className="text-2xl text-red-500 " />
                                    <FaPen className="text-xl text-yellow-400" />
                                </td>

                            </tr>
                        )) :
                            <td className="border-b border-[#eee] min-w-[200px] p-5 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    user not found
                                </p>
                            </td>
                        }
                    </Tables>
                }

            </div>

            {/*  --------- modal --------- */}
        </>
    );
};

export default Users;
