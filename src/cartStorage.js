import { getProducts } from "./products";
let shoppingCart = [];

function addToCartHandler(id, e) {
  e.preventDefault();
  const form = document.forms;
  let quantity = Number(form[id - 1].firstChild.lastChild.value);

  if (!quantity > 0) quantity = 1;

  let search = shoppingCart.find((item) => item.id === id);
  if (search) {
    search.quantity += quantity;
    console.log(shoppingCart);
    return;
  }
  let currentProductObj = getProducts(id);
  currentProductObj.quantity = quantity;
  shoppingCart.push(currentProductObj);
  console.log(shoppingCart, "YO");
}

export { shoppingCart, addToCartHandler };
