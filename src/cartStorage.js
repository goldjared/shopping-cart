import { getProducts } from "./products";
let shoppingCart = [];

function addToCartHandler(id, e) {
  e.preventDefault();
  const form = document.forms;

  let quantity = Number(form[id - 1].firstChild.lastChild.value);

  if (!quantity > 0) quantity = 1;

  // reset form input field to 1 after clicking add to cart btn
  form[id - 1].firstChild.lastChild.value = 1;

  let search = shoppingCart.find((item) => item.id === id);
  if (search) {
    search.quantity += quantity;
    console.log(shoppingCart);
    return;
  }
  let currentProductObj = getProducts(id);
  // console.log(currentProductObj, 'currentPordObj');
  currentProductObj.quantity = quantity;
  shoppingCart.push(currentProductObj);
}

export { shoppingCart, addToCartHandler };
