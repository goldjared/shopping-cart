import { Outlet, Link } from "react-router-dom";
export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          <li>
            <Link to={`/cart`}>Cart</Link>
          </li>
        </ul>
      </nav>

      <div id="detail">
        <Outlet />
      </div>
    </>
    
  );
}
