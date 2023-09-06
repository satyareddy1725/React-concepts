import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  //  Local state variable - super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          TopRatedRestaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
