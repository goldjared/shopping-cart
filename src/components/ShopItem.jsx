import { useEffect, useState } from "react";
import { getProducts } from "../products";

function ShopItem({ itemID, fn }) {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(null);
  const [itemTitle, setItemTitle] = useState(null);

  useEffect(() => {
    const fetchShopItem = async () => {
      const data = await getProducts(itemID);
      setItemTitle(data.title);
      setPrice(data.price);
      setImg(data.img);
      setLoading(false);
    };
    fetchShopItem();
  }, [itemID]);

  if (loading) return <p>loading...</p>;

  return (
    <>
      <div className="shop-item">
        <img src={img} alt="" />
        <div className="right-shop-item">
          <div className="item-title">{itemTitle}</div>
          <div className="item-price">${price}</div>
          <form>
            <label>
              quantity:
              <input
                type="number"
                name="quantity"
                id="quantity"
                max={99}
                min={1}
                defaultValue={1}
              />
            </label>
            <input
              type="submit"
              onClick={fn}
              className="add-cart-btn"
              value="Add"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export { ShopItem };
