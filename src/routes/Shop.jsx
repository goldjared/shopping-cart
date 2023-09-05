import ShopItem from "../components/ShopItem";

const shopItemIDs = [1, 2, 3, 4,5,6,7,8,9,10];
// const fetchedAlready = false;

const Shop = () => {

  return (
    <>
      <p>this store page</p>
      <div className="my-shop">
        {shopItemIDs.map((item) => (
          <ShopItem itemID={item} key={item}></ShopItem>
        ))}
      </div>
    </>
  );
};

export default Shop;
