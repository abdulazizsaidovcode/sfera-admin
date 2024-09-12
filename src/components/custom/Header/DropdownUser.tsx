import AnimatedShinyText from "@/components/magicui/animated-shiny-text.tsx";

const DropdownUser = () => {
    const admin_role = sessionStorage.getItem('admin_roles');

    const roles = (role: string) => {
        if (role === 'ADMIN_EDU') return 'Education admin'
        else if (role === 'ADMIN_QUIZ') return 'Quiz test admin'
        else if (role === 'ADMIN_ONLINE') return 'Online platform admin'
    }
    return (
        <>
            <div className="flex items-center gap-4">
                <span className="hidden xsm:flex flex-col text-right">
                    <span className="text-xl font-semibold text-white">
                        <AnimatedShinyText className={`inline-flex items-center justify-center transition ease-out hover:text-whiten-600 hover:duration-300`}>
                            <span>Sodiqov Alisher</span>
                        </AnimatedShinyText>
                    </span>
                    <span className="text-sm font-normal text-white">
                        <AnimatedShinyText className={`inline-flex items-center justify-center transition ease-out hover:text-whiten-600 hover:duration-300`}>
                            <span>{admin_role ? roles(admin_role) : 'admin'}</span>
                        </AnimatedShinyText>
                    </span>
                </span>
                <span className="h-12 w-12 rounded-full bg-slate-200 object-cover overflow-hidden">
                    <img
                        src={`https://cdn-icons-png.flaticon.com/512/6676/6676023.png`}
                        alt="User"
                        className="w-full h-full"
                    />
                </span>
            </div>
        </>
    );
};

export default DropdownUser;
