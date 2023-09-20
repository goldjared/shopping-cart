import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { shoppingCart } from "../cartStorage";

function CartUnitPrice(qty, price) {
  if (qty > 1) {
    return (
      <>
        Price: ${qty * price} @ ${price} per unit
      </>
    );
  }
  return <>Price: ${price}</>;
}

function FakeCheckOutBtn(cartTotal) {
  if (cartTotal > 0) {
    return <button className="display-btn">Fake Checkout</button>;
  }
}

function CartFinisher(cartTotal) {
  // console.log(cartTotal, 'CARTOTAL');
  if (cartTotal === 0) {
    return (
      <>
        <Link to={`/shop`}>Cart is empty, click to Shop</Link>.
      </>
    );
  }
  return (
    <>
      Total: ${cartTotal}
      <Link to={`/shop`}>Forget anything? Click to Shop</Link>
    </>
  );
}

function ShoppingCart() {
  const [cartTotal, setCartTotal] = useState(0);

  function removeFromCartHandler(id) {
    const index = shoppingCart.map((item) => item.id).indexOf(id);
    shoppingCart.splice(index, 1);
    setCartTotal(0);
  }

  useEffect(() => {
    let workingTotal = 0;
    shoppingCart.forEach((item) => {
      workingTotal += item.quantity * item.price;
    });
    workingTotal = Math.round(workingTotal * 100) / 100;
    setCartTotal(workingTotal);
  }, [cartTotal]);

  return (
    <>
      <div className="cart">
        {shoppingCart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} width={35} alt="" />
            <div className="cart-item-part">{item.title}</div>
            <div className="cart-item-part">Qty: {item.quantity}</div>
            <div className="cart-item-part">
              {CartUnitPrice(item.quantity, item.price)}
            </div>
            <button onClick={() => removeFromCartHandler(item.id)}>
              Remove
            </button>
          </div>
        ))}
        <div className="cart-total">{CartFinisher(cartTotal)}</div>
      </div>
      {FakeCheckOutBtn(cartTotal)}
    </>
  );
}

export { ShoppingCart };
