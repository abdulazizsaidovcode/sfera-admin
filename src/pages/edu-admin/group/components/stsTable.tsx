import Tables from "@/components/custom/tables/table.tsx";
import {notFound, stsThead} from "@/helpers/constanta.tsx";

const StsTable = ({res}: {
    res: {
        lastName: string
        firstName: string
        payment: number
    }[]
}) => {
    return (
        <div className={`mt-6`}>
            <Tables thead={stsThead}>
                {(res && res.length > 0) ? res.map((r, idx: number) => (
                    <tr key={idx} className={`hover:bg-whiteGreen duration-100`}>
                        <td className="border-b border-[#eee] p-5">
                            <p className="text-black">
                                {idx + 1}
                            </p>
                        </td>
                        <td className="border-b border-[#eee] p-5">
                            <p className="text-black">
                                {r.firstName}
                            </p>
                        </td>
                        <td className="border-b border-[#eee] p-5">
                            <p className="text-black">
                                {r.lastName}
                            </p>
                        </td>
                        <td className="border-b border-[#eee] p-5">
                            <p className={`${r.payment ? 'text-black' : 'text-red-500'}`}>
                                {r.payment ? r.payment + ' (UZS)' : 'Xali to\'lov qilinmagan'}
                            </p>
                        </td>
                    </tr>
                )) : <tr className={`hover:bg-whiteGreen duration-100`}>
                    <td
                        className="border-b border-[#eee] p-5 text-black text-center"
                        colSpan={stsThead.length}
                    >
                        {notFound}
                    </td>
                </tr>}
            </Tables>
        </div>
    );
};

export default StsTable;
