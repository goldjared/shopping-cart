import { useEffect, useState } from "react"

function ShopItem({ itemID, fn }) {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(null);
  const [itemTitle, setItemTitle] = useState(null);


  useEffect(() => {
    const fetchShopItem = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${itemID}`)
      const data = await response.json();
      setItemTitle(data.title);
      setPrice(data.price);
      setImg(data.image)
      console.log('its fethcing...');
      setLoading(false);

    }
    fetchShopItem();

  }, [itemID])

  if(loading) return <p>loading...</p>;

  return (
    <>
    <div className="shop-item">

      <img src={img} alt=""/>
      <div className="item-title">{itemTitle}</div>
      <div className="item-price">${price}</div>
      <form>
        <label>quantity:<input type="number" name="quantity" id="quantity" max={99} min={1} /></label>
        <input type="submit" onClick={fn} className="add-cart-btn" value="Add" />
      </form>

    </div>
    </>
  )
}

export { ShopItem }