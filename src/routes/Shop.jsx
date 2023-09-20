import { ShopItem } from "../components/ShopItem";
import { addToCartHandler } from "../cartStorage";
import { shopItemIDs } from "../products";
import { Link } from "react-router-dom";

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

        <Link className="shopping-link" to={`/cart`}>
          Go to Cart? Click Here.
        </Link>
      </div>
    </>
  );
};

export { Shop };
