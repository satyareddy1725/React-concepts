import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //  Local state variable - super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  // console.log(listOfRestaurants)

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.26235879999999&lng=75.7026202&collection=80383&tags=layout_CCS_CholeBhature&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    console.log(json?.data?.cards?.slice(3));
    setListOfRestaurants(json?.data?.cards?.slice(3)); /* */
    setFilteredRestaurants(json?.data?.cards?.slice(3)); /* */
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              // if we write anything put flowerbrackets
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(searchText);
              console.log(filteredRestaurant);
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => (
          <Link
          key={restaurant.card.card.info.id}
          to={"/restaurants/" + restaurant.card.card.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
