import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((Item) => (
        <div
          key={Item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="flex flex-col">
              <span>{Item.card.info.name}</span>
              <span>
                ₹{" "}
                {Item.card.info.defaultPrice
                  ? Item.card.info.defaultPrice / 100
                  : Item.card.info.price / 100}
              </span>
            </div>
          </div>
          <div>
            <div>
              <button className="bg-white shadow-lg m-auto rounded-md border border-gray-500 text-center px-2 ml-8 mb-2">
                Add +
              </button>
              <img
                src={CDN_URL + Item.card.info.imageId}
                className="w-32 rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
