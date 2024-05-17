import { useState } from "react";
import ListOfItems from "./ListOfItems";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg my-4 mx-auto">
        <div className="flex justify-between cursor-pointer" onClick={() => {setShowIndex()}}>
          <span className="mx-2 font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="mx-2">▽</span>
        </div>
        <div>
          { showItems && <ListOfItems items={data.itemCards} /> }
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
