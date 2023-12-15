import { useEffect, useState } from "react";


const useOnline = () => {
    const[isOnline,setIsOnline] = useState(true);
    useEffect(() => {
        const handleOn = () => {
            setIsOnline(true);
        }
        const handleOff = () => {
            setIsOnline(false);
        }
        window.addEventListener("online",handleOn);
        window.addEventListener("offline",handleOff);
        return () => {
            window.removeEventListener("online",handleOn);
            window.removeEventListener("offline",handleOff);
        }
    },[]);

    return isOnline;
}

export default useOnline;