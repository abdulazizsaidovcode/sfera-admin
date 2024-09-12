import Breadcrumb from "@/components/custom/breadcrumb/Breadcrumb.tsx";

const Courses = () => {
    const admin_role = sessionStorage.getItem("admin_roles");

    return (
        <>
            <Breadcrumb pageName={admin_role === 'ADMIN_QUIZ' ? `Yo'nalishlar` : 'Kurslar'}/>
        </>
    );
};

export default Courses;
