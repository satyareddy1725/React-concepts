import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData)

  const { name, cuisines, avgRating, costForTwo,cloudinaryImageId,sla} =
    resData?.card?.card.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId }alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurantCard;
