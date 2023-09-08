// import { Link } from "react-router-dom";
import Root from "./routes/Root";

let shoppingCart = {};

function addToCartHandler(data) {
shoppingCart = {...shoppingCart, data};
console.log(shoppingCart, 'YO');
}

const App = () => {
  return (
    <>
      <Root></Root>
    </>
  );
};

export { App, addToCartHandler};
