import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import ResCategories from "./ResCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;

  

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  // console.log(itemCards);
  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  // console.log(category.card.card)

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <ResCategories
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showItems = {index === showIndex && true}
          setShowIndex = {()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
