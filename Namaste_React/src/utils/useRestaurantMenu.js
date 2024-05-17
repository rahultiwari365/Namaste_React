import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const obj = await data.json();
        setResMenu(obj.data);
    }
    return resMenu;
}

export default useRestaurantMenu;