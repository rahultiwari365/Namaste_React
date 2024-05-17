import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ListOfItems = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left m-2 p-2 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
               className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
               onClick={() =>handleAddItem(item)}
               >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="Image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfItems;
