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
            <Link to={`/Shop`}>Shop</Link>
          </li>
          <li>
            <Link to={`/Checkout`}>Checkout</Link>
          </li>
        </ul>
      </nav>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
