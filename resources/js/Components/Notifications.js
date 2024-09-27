import { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
function Notifications({ flash, hasErrors }) {
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        if (flash.success !== null && !hasErrors) {
            setIsSuccess(true);
        } else setIsSuccess(false);
    }, [flash, hasErrors]);

    return (
        <div
            className={`flex items-center justify-between px-6 py-3 w-full rounded-md ${
                isSuccess ? "bg-green-400" : "bg-red-400"
            }`}
        >
            <div className={`flex items-center`}>
                {isSuccess
                    ? flash.success
                    : "Whoops, kamu salah menginputkan data"}
            </div>
            <IoMdNotifications />
        </div>
    );
}

export default Notifications;
