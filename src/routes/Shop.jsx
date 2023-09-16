import { ShopItem } from "../components/ShopItem";
import { addToCartHandler } from "../cartStorage";
import { shopItemIDs } from "../products";

const Shop = () => {
  return (
    <>
      <p>this store page</p>
      <div className="my-shop">
        {shopItemIDs.map((item) => (
          <ShopItem
            itemID={item}
            fn={(e) => addToCartHandler(item, e)}
            key={item}
          ></ShopItem>
        ))}
      </div>
    </>
  );
};

export { Shop };
