import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {MdDelete} from "react-icons/md";
import Tables from "@/components/custom/tables/table.tsx";
import {
    deleteText,
    notFound,
    regNotFound,
    successAdd,
    successDelete,
    successEdit,
    paymentTHead
} from "@/helpers/constanta.tsx";
import {useGlobalRequest} from "@/helpers/functions/restApi-function";
import {config} from "@/helpers/token";
import React, {useEffect, useState} from "react";
import {FaEdit} from "react-icons/fa";
import Skeleton from "@/components/custom/skeleton/skeleton-cards";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {groupCrud, groupList, paymentAdd, paymentList, paymentTotal, paymentYear} from "@/helpers/api.tsx";
import {Dropdown, Input, Menu, MenuProps, Pagination, Select, Space} from "antd";
import {CiMenuKebab} from "react-icons/ci";
import Modal from "@/components/custom/modal/modal.tsx";
import courseStore from "@/helpers/state-management/coursesStore.tsx";
import toast from "react-hot-toast";
import {styles} from "@/styles/style.tsx";
import TextInput from "@/components/custom/inputs/text-input.tsx";
import moment from "moment";
import NumberGenerate from "@/components/magicui/number-ticker.tsx";
import DateInput from "@/components/custom/inputs/date-input.tsx";
import StatisticCard from "@/components/custom/cards/statistic-card.tsx";
import LineChart from "@/components/custom/chart/line-chart.tsx";
import {SiCashapp} from "react-icons/si";

const crudValueDef = {
    paySum: 0,
    userId: 0,
    groupId: 0,
    payDate: '',
    paymentType: ''
}

const Payment = () => {
    const [studentName, setStudentName] = useState<string>('');
    const [payType, setPayType] = useState<string>('');
    const [payDate, setPayDate] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [maxSize, setMaxSize] = useState<number>(100000);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chartData, setChartData] = useState<number[]>([])
    const [chartDataMonth, setChartDataMonth] = useState<string[]>([])
    const [crudValue, setCrudValue] = useState<any>(crudValueDef);
    const {editOrDeleteStatus, setEditOrDeleteStatus} = courseStore()

    // ===========================REQUEST FUNCTION================================
    const requestData = {
        paySum: crudValue.paySum,
        payDate: crudValue.payDate,
        userId: crudValue.userId
    }
    const getTestUrl = () => {
        const queryParams: string = [
            studentName ? `keyword=${studentName}` : '',
            payType ? `payType=${payType}` : '',
            payDate ? `payDate=${payDate}` : ''
        ].filter(Boolean).join('&');

        return `${paymentList}?${queryParams ? `${queryParams}&` : ''}page=${page}&size=10`;
    }
    const users = useGlobalRequest(getTestUrl(), 'GET', '', config);
    const groups = useGlobalRequest(groupList, 'GET', '', config);
    const groupOne = useGlobalRequest(`${groupCrud}/${crudValue?.groupId}`, 'GET', '', config);
    const {
        response: stsCardData,
        globalDataFunc: stsCardFunc,
        loading: stsLoading
    } = useGlobalRequest(paymentTotal, 'GET', '', config);
    const {
        response: stsChartData,
        globalDataFunc: stsChartFunc,
        loading: stsChartLoading
    } = useGlobalRequest(paymentYear, 'GET', '', config);
    const userAdd = useGlobalRequest(`${paymentAdd}?payType=${crudValue?.paymentType}`, 'POST', requestData, config);
    const userEdit = useGlobalRequest(`${paymentAdd}/${crudValue?.paymentId}?payType=${crudValue?.paymentType}`, 'PUT', requestData, config);
    const userDelete = useGlobalRequest(`${paymentAdd}/${crudValue?.paymentId}`, 'DELETE', '', config);

    useEffect(() => {
        users.globalDataFunc()
        groups.globalDataFunc()
        stsCardFunc()
        stsChartFunc()
    }, []);

    useEffect(() => {
        users.globalDataFunc()
        if (users.response && users.response.totalElements < 10) setPage(0)
    }, [studentName, payType, payDate, page]);

    useEffect(() => {
        if (crudValue?.groupId) groupOne.globalDataFunc()
        if (crudValue) crudValue.userId = 0
    }, [crudValue?.groupId]);

    useEffect(() => {
        if (userAdd.response) {
            users.globalDataFunc()
            closeModal()
            toast.success(successAdd('To\'lov malumoti'))
        }
    }, [userAdd.response]);

    useEffect(() => {
        if (userEdit.response) {
            users.globalDataFunc()
            closeModal()
            toast.success(successEdit('To\'lov malumoti'))
        }
    }, [userEdit.response]);

    useEffect(() => {
        if (userDelete.response) {
            users.globalDataFunc()
            closeModal()
            toast.success(successDelete('To\'lov malumoti'))
        }
    }, [userDelete.response]);

    useEffect(() => {
        if (stsChartData && stsChartData.length > 0) {
            let data: number[] = [];
            let dataMonth: string[] = [];
            stsChartData.map((item: { totalPay: number }) => data.push(item.totalPay))
            stsChartData.map((item: { month: string }) => dataMonth.push(item.month))
            let min: number = stsChartData[0].totalPay
            for (let i = 0; i <= stsChartData.length; i++) {
                if (min < stsChartData[i]) min = stsChartData[i]
            }

            setMaxSize(min)
            setChartData(data)
            setChartDataMonth(dataMonth)
        }
    }, [stsChartData]);

    const getItems = (user: any): MenuProps['items'] => [
        {
            label: <div className={`flex items-center gap-3`}>
                <FaEdit className="text-base text-yellow-300 cursor-pointer duration-300"/>
                <p>Taxrirlash</p>
            </div>,
            key: '0',
            onClick: () => {
                openModal()
                setEditOrDeleteStatus('EDIT')
                setCrudValue(user)
            }
        },
        {
            label: <div className={`flex items-center gap-3`}>
                <MdDelete className="text-xl text-red-300 cursor-pointer duration-300"/>
                <p>O'chirish</p>
            </div>,
            key: '1',
            onClick: () => {
                toast.error('Malumotlarni o\'chirish mumkin emas!!!')
                // openModal()
                // setEditOrDeleteStatus('DELETE')
                // setCrudValue(user)
            }
        }
    ];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setEditOrDeleteStatus('');
            setCrudValue(crudValueDef);
        }, 500)
    };

    const handleInputChange = (name: string, value: string) => setCrudValue({...crudValue, [name]: value})

    return (
        <>
            <Breadcrumb pageName={`Moliya`}/>
            <div className={'flex justify-between flex-wrap md:flex-nowrap gap-5 items-start'}>
                <div className={'w-full md:w-[30%]'}>
                    {stsLoading ? <Skeleton/> :
                        <StatisticCard
                            key={'totalMonthPay'}
                            total={stsCardData ? stsCardData.totalSum : 0}
                            title={stsCardData ? `${moment(stsCardData.startDate).format('DD.MM.YYYY')} - ${moment(stsCardData.endDate).format('DD.MM.YYYY')}` : notFound}
                            children={<SiCashapp className={'text-xl'}/>}
                        />
                    }
                </div>
                <div className={'w-full md:w-[70%]'}>
                    {stsChartLoading ? <div className={'grid grid-cols-1 gap-5'}>
                            <Skeleton/>
                            <Skeleton/>
                        </div> :
                        <LineChart
                            title={`Yillik statistika`}
                            category={chartDataMonth}
                            seriesTitle={`Umumiy summa`}
                            seriesData={chartData}
                            type={`bar`}
                            maxSize={maxSize + 100000}
                        />
                    }
                </div>
            </div>

            {/*===================SEARCH===================*/}
            <div className={`w-full flex justify-between items-center flex-wrap md:flex-nowrap gap-3 mt-10`}>
                <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full'}>
                    <Input
                        className={`w-full bg-transparent h-11 custom-input`}
                        placeholder="F.I.O qidirish..."
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        allowClear
                    />
                    <Select
                        placeholder={`Turi bo'yicha...`}
                        className={`w-full bg-transparent h-11 custom-select`}
                        onChange={(e) => setPayType(e)}
                        allowClear
                    >
                        <Select.Option value={'CARD'}>Karta</Select.Option>
                        <Select.Option value={'CASH'}>Naqt pul</Select.Option>
                    </Select>
                    <DateInput
                        placeholder="Sana bo'yicha..."
                        value={payDate}
                        handleChange={(e) => setPayDate(e.target.value)}
                    />
                </div>
                <ShinyButton
                    text={`Qo'shish`}
                    onClick={() => {
                        openModal()
                        setEditOrDeleteStatus('ADD')
                    }}
                    className={`bg-darkGreen py-2.5`}
                />
            </div>

            {/*========================BODY===================*/}
            <div className={`mt-6`}>
                {users.loading ? <div className={`grid grid-cols-1 gap-5`}>
                        <Skeleton/>
                        <Skeleton/>
                    </div> :
                    <Tables thead={paymentTHead}>
                        {(users.response && users.response.body.length > 0) ? users.response.body.map((sts: {
                            paymentId: number
                            paySum: number
                            payDate: string
                            paymentType: string
                            userName: string
                        }, idx: number) => (
                            <tr key={sts.paymentId} className={`hover:bg-whiteGreen duration-100`}>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {(page * 10) + idx + 1}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {sts.userName}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {<NumberGenerate value={sts.paySum} delay={0.3}/>} (UZS)
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {sts.paymentType === 'CARD' ? 'Karta bilan' : 'Naqt pul bilan'}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5">
                                    <p className="text-black">
                                        {moment(sts.payDate).format('DD.MM.YYYY')}
                                    </p>
                                </td>
                                <td className="border-b border-[#eee] p-5 ps-10">
                                    <Dropdown overlay={
                                        <Menu items={getItems(sts)}/>
                                    } trigger={['click']} arrow>
                                        <a onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <CiMenuKebab
                                                    className={`text-2xl duration-300 hover:cursor-pointer text-darkGreen`}/>
                                            </Space>
                                        </a>
                                    </Dropdown>
                                </td>
                            </tr>
                        )) : <tr>
                            <td className="border-b border-[#eee] p-5" colSpan={paymentTHead.length}>
                                <p className="text-black text-center">
                                    {notFound}
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

            {/*==========UNIVERSAL MODAL============*/}
            <Modal onClose={closeModal} isOpen={isModalOpen}>
                <div className={styles.modalMain}>
                    <form className={`mt-5`} onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
                        {editOrDeleteStatus !== 'DELETE' ? (<>
                                {(editOrDeleteStatus === 'ADD' || editOrDeleteStatus === 'EDIT') && (<>
                                    <select
                                        value={crudValue.groupId}
                                        onChange={(e) => handleInputChange(`groupId`, e.target.value)}
                                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg block w-full p-2.5 mt-7 mb-4"
                                    >
                                        <option disabled selected value={0}>
                                            Guruhni tanlang
                                        </option>
                                        {groups.response && groups.response.map((item: any) => (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                    <select
                                        value={crudValue?.userId}
                                        onChange={(e) => handleInputChange(`userId`, e.target.value)}
                                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg block w-full p-2.5 mt-7 mb-4"
                                    >
                                        <option disabled selected value={0}>
                                            Studentni tanlang
                                        </option>
                                        {groupOne.response?.students?.map((item: any) => (
                                            <option value={item.studentId} key={item.studentId}>{item.fullName}</option>
                                        ))}
                                    </select>
                                    <select
                                        value={crudValue?.paymentType}
                                        onChange={(e) => handleInputChange(`paymentType`, e.target.value)}
                                        className="bg-white border border-lighterGreen text-gray-900 rounded-lg block w-full p-2.5 mt-7 mb-4"
                                    >
                                        <option disabled selected value={''}>
                                            To'lov turini tanlang
                                        </option>
                                        <option value={'CARD'}>Karta orqali</option>
                                        <option value={'CASH'}>Naqt pul orqali</option>
                                    </select>
                                    <div className="mb-4">
                                        <TextInput
                                            label={'Summasini kiriting (UZS)'}
                                            value={crudValue?.paySum}
                                            handleChange={e => {
                                                const v = e.target.value
                                                if (!isNaN(+v) && !v.startsWith('0')) handleInputChange('paySum', v)
                                            }}
                                            placeholder={'Summasini kiriting...'}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <DateInput
                                            label={'Sanani belgilang'}
                                            value={crudValue?.payDate || new Date()}
                                            handleChange={e => handleInputChange('payDate', e.target.value)}
                                            placeholder={'Sanani belgilang...'}
                                        />
                                    </div>
                                </>)}
                            </>) :
                            <p className={`text-center text-black text-base lg:text-xl mb-10`}>
                                {deleteText('to\'lov hisobotini')}
                            </p>
                        }

                        <div className={styles.modalFooter}>
                            <ShinyButton
                                text={`Orqaga`}
                                className={styles.modalBtn}
                                onClick={closeModal}
                            />
                            {editOrDeleteStatus === 'ADD' && (
                                <ShinyButton
                                    text={userAdd.loading ? 'Saqlanmoqda...' : 'Saqlash'}
                                    className={`${styles.modalBtn} ${userAdd.loading && 'cursor-not-allowed opacity-60'}`}
                                    onClick={() => {
                                        if (!userAdd.loading) {
                                            if (crudValue?.paymentType && crudValue?.paySum && crudValue?.payDate && crudValue?.userId) userAdd.globalDataFunc()
                                            else toast.error(regNotFound)
                                        }
                                    }}
                                />
                            )}
                            {editOrDeleteStatus === 'EDIT' && (
                                <ShinyButton
                                    text={userEdit.loading ? 'Yuklanmoqda...' : 'Taxrirlash'}
                                    className={`${styles.modalBtn} ${userEdit.loading && 'cursor-not-allowed opacity-60'}`}
                                    onClick={() => {
                                        if (!userEdit.loading) {
                                            if (crudValue?.paymentType && crudValue?.paySum && crudValue?.payDate && crudValue?.userId) userEdit.globalDataFunc()
                                            else toast.error(regNotFound)
                                        }
                                    }}
                                />
                            )}
                            {editOrDeleteStatus === 'DELETE' && (
                                <ShinyButton
                                    text={userDelete.loading ? 'O\'chirilmoqda...' : 'Xa'}
                                    className={`${styles.modalBtn} ${userDelete.loading && 'cursor-not-allowed opacity-60'}`}
                                    onClick={() => {
                                        if (!userDelete.loading) userDelete.globalDataFunc()
                                    }}
                                />
                            )}
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default Payment;
