import { shoppingCart } from "../cartStorage";

export default function CartCounter (){
  let count = 0;
  shoppingCart.forEach(item => {
  count += item.quantity;
  })

return (
  <>
  {count}
  </>
)

}