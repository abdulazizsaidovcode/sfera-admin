import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {CourseCard} from "@/components/custom/cards/course-card.tsx";
import {courseData} from "@/helpers/constanta.tsx";
import ShinyButton from "@/components/magicui/shiny-button.tsx";
import {MdOutlineAddCircle} from "react-icons/md";

const Courses = () => {
    const admin_role = sessionStorage.getItem("admin_roles");

    return (
        <>
            <Breadcrumb pageName={admin_role === 'ADMIN_QUIZ' ? `Yo'nalishlar` : 'Kurslar'}/>

            {/*==================SEARCH=================*/}
            <div className={`w-full flex justify-between items-center flex-wrap xl:flex-nowrap gap-5 mt-10 mb-6`}>
                <ShinyButton text={`Qo'shish`} icon={<MdOutlineAddCircle size={30}/>} className={`bg-darkGreen`}/>
                <div
                    className={`w-full lg:max-w-[60%] flex justify-start xl:justify-between items-center flex-wrap md:flex-nowrap gap-5`}>
                    <input
                        type={`search`}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="Name buyicha qidirish"
                    />
                    <input
                        type={`search`}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="................."
                    />
                    <input
                        type={`search`}
                        className="login__input bg-white border border-lighterGreen text-gray-900 rounded-lg focus:border-darkGreen block w-full p-2.5"
                        placeholder="................"
                    />
                </div>
            </div>

            {/*=======================BODY CARD======================*/}
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 overflow-hidden`}>
                {courseData.map((data) => (
                    <CourseCard title={data.title} imgUrl={data.imgUrl} desc={data.desc}/>
                ))}
            </div>
        </>
    );
};

export default Courses;
