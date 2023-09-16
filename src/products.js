let products = [];
const shopItemIDs = [1, 2, 3];
function getProducts(id) {
  // if(products.length === 0) {
  //   shopProducts();
  // }
  let selectedProduct;
  products.forEach((productObj) => {
    if (productObj.id === id) {
      selectedProduct = productObj;
    }
  });
  return selectedProduct;
}

function shopProducts() {
  console.log("FIRED SHOPPRODUCTS");
  const fetchShopItem = async (itemID) => {
    const response = await fetch(`https://fakestoreapi.com/products/${itemID}`);
    const data = await response.json();
    // console.log(data);
    console.log("its fethcing...");
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

export { shopProducts, getProducts };
