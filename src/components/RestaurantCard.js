import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData)
  const { loggedInUser } = useContext(userContext);

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } =
    resData?.card?.card.info;
  return (
    <div className="m-4 p-4 w-[225px] hover:bg-pink-200 rounded-lg">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla.deliveryTime} minutes</h5>
      <h6 className="font-bold">{loggedInUser}</h6>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-8  rounded-sm">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
