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

export { addToCartHandler };

