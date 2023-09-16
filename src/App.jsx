import { shopProducts } from "./products";
import Root from "./routes/Root";

shopProducts(); // generates array of product objects

const App = () => {
  return (
    <>
      <Root></Root>
    </>
  );
};

export { App };
