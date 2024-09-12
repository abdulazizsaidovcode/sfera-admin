import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";
import {CourseCard} from "@/components/custom/cards/course-card.tsx";
import {courseData} from "@/helpers/constanta.tsx";

const Courses = () => {
    const admin_role = sessionStorage.getItem("admin_roles");

    return (
        <>
            <Breadcrumb pageName={admin_role === 'ADMIN_QUIZ' ? `Yo'nalishlar` : 'Kurslar'}/>
            <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5`}>
                {courseData.map((data) => (
                    <CourseCard title={data.title} imgUrl={data.imgUrl} btnName={data.btnName} desc={data.desc}/>
                ))}
            </div>
        </>
    );
};

export default Courses;
