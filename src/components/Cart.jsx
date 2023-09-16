import { getProducts } from "../products";
let shoppingCart = [];

function removeFromCartHandler(e, index) {
shoppingCart.splice(index, 1)
e.target.parentNode.remove();
}

function addToCartHandler(id, e) {
  e.preventDefault();
  const form = document.forms
  let quantity = Number(form[id-1].firstChild.lastChild.value);

  if(!quantity > 0) quantity = 1;

let search = shoppingCart.find((item) => item.ID === id);
if(search) {
  search.quantity += quantity;
  console.log(shoppingCart);
  return; 
}
let currentProductObj = getProducts(id);
currentProductObj.quantity = quantity;
shoppingCart.push(currentProductObj)
console.log(shoppingCart, 'YO');
}

function CartUnitPrice(qty, price) {
if(qty > 1) {
  return <>Price: ${qty * price} @ ${price} per unit</>
} 
return <>Price: ${price}</>
}

function ShoppingCart() {
  return (
    <>
      <div className="cart">
        {shoppingCart.map((item) => (
          <div key={item.Id} className="cart-item">
            <img src={item.img} width={35} alt="" />
            <div className="cart-item-part">{item.title}</div>
            <div className="cart-item-part">Qty: {item.quantity}</div>
            <div className="cart-item-part">{CartUnitPrice(item.quantity, item.price)}</div>
            <button onClick={(e) => removeFromCartHandler(e, item.Id-1)}>Remove</button>
          {}</div>

        ))}
      </div>
    </>
  )
}

export { addToCartHandler, ShoppingCart };

