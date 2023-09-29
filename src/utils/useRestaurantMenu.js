import { useEffect, useState } from "react";
import { RESTAURENT_MENU_URL } from "./constants";
import { RESTAURENT_MENU_URL_2 } from "./constants";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURENT_MENU_URL + id + RESTAURENT_MENU_URL_2);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
