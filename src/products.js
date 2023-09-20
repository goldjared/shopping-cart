let products = [];
const shopItemIDs = [1, 2, 3, 4, 5];

// const timer = ms => new Promise(res => setTimeout(res, ms))
// shopProducts();

function getProducts(id) {
  // if(products.length === 0) {
  // console.log(products, 'length 0 prods from getter');
  // await timer(1000);

  // }
  // console.log(products, 'prods');
  let selectedProduct;
  products.forEach((productObj) => {
    if (productObj.id === id) {
      selectedProduct = productObj;
    }
  });
  // console.log(selectedProduct, 'here selected product');
  return selectedProduct;
}
// save the products into localstorage, then upon a refresh from any page. if localstorage, pull from ls.
// then do not run shopProducts from app.jsx. (or, shopProd() can check if localStor, ? return : run )
function shopProducts() {
  console.log("FIRED SHOPPRODUCTS");
  const fetchShopItem = async (itemID) => {
    const response = await fetch(`https://fakestoreapi.com/products/${itemID}`);
    const data = await response.json();
    console.log(data, "DATA");
    console.log("its fetching...");
    products.push({
      title: data.title,
      price: data.price,
      id: data.id,
      img: data.image,
    });
  };
  for (let i = 0; i < shopItemIDs.length; i++) {
    fetchShopItem(shopItemIDs[i]);
  }
}

export { shopProducts, getProducts, shopItemIDs };
