import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
  } = resData?.info;
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="res-card m-2 p-2 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg w-[100%] h-[150px]"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
