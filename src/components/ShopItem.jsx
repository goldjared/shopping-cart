import { useEffect, useState } from "react"

export default function ShopItem({ itemID, fn }) {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [quantity, setQuantity] = useState(0);
  const [img, setImg] = useState(null);
  const [itemTitle, setItemTitle] = useState(null);


  useEffect(() => {
    const fetchShopItem = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${itemID}`)
      const data = await response.json();
      console.log(data);
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
      <label>quantity:<input type="number" name="quantity" id="quantity" max={99} min={1} /></label>
      <button onClick={fn} className="add-cart-btn">add</button>

    </div>
    </>
  )
}