import { useState, useEffect } from "react";
import { MENU_API } from "../../config";


const useResMenu = (id) => {
    const[menuPage,setMenuPage] = useState(null);
    useEffect(() => {
        fetchMenu();
    },[]);

    async function fetchMenu(){
        const data = await fetch(MENU_API+id);
        const json = await data?.json();
        setMenuPage(json?.data)
    }
    return menuPage;
}

export default useResMenu;