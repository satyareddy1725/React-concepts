import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwoString, deliveryTime,cloudinaryImageId} =
    resData?.data;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL}alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
