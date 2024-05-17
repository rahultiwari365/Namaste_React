import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurnats, setListOfRestaurnat] = useState([]);
  const [listOfFilteredRestaurnats, setListOfFilteredRestaurnat] = useState([]);
  const [inputText, setInputText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.990965744136675&lng=77.66598260469063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurnat(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilteredRestaurnat(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };

  useState(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return (<h1>You are offline. Please check your internet connection.</h1>);
  }

  return listOfRestaurnats?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter flex flex-wrap">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              if(e.target.value === ''){
                setListOfFilteredRestaurnat(listOfRestaurnats);
              }
              const filterValue = listOfRestaurnats.filter((res) =>
                res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setListOfFilteredRestaurnat(filterValue);
            }}
          />
          <button className="px-3 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterValue = listOfRestaurnats.filter((res) =>
                res.info.name.toLowerCase().includes(inputText.toLowerCase())
              );
              setListOfFilteredRestaurnat(filterValue);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
        <button
          className="filter-btn px-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurnats.filter(
              (res) => res.info.avgRatingString > 4
            );
            setListOfFilteredRestaurnat(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {listOfFilteredRestaurnats.map((restaurant) => (
          <Link className="res-link" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
