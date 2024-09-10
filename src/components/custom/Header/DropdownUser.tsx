import userImage from '@/assets/images/user.jpg';

const DropdownUser = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <span className="hidden text-right xsm:block">
                    <span className="text-xl font-medium text-black">
                        Sodiqov Alisher
                    </span>
                </span>
                <span className="h-12 w-12 rounded-full bg-slate-200 object-cover overflow-hidden">
                    <img
                        src={userImage}
                        alt="User"
                        className="w-full h-full"
                    />
                </span>
            </div>
        </>
    );
};

export default DropdownUser;
