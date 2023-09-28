import { Link } from "react-router-dom";
import fakeStoreImg from "../images/pexels-natalie-dmay-18423422.jpg"

const Home = () => {
  return (
    <>
      <div className="page-text">
        <h1>fake HOME PAGE</h1>
        <img className="fake-store-img" src={fakeStoreImg} alt=""/>
        <p>
          Welcome to my fake shopping cart. The purpose of this project
          was my practice of React, <strong>click the <Link to={`/shop`}>shop</Link> link to leave this page.</strong> Fugiat tempora fuga consequuntur ullam obcaecati dolorem nam
            
          fugit. Dolorum sit inventore iste aperiam, pariatur voluptatibus eum
          consequuntur adipisci! Accusamus exercitationem soluta iure, error qui
          officia reiciendis recusandae animi molestiae. At dignissimos alias
          corporis magnam officiis qui placeat eligendi, eaque, in quas mollitia
          sint debitis reprehenderit amet, ipsum beatae. Eum fugit architecto
          sit perferendis ipsam id qui dolor mollitia alias? Reprehenderit enim
          cupiditate voluptatibus quod quidem architecto, ut eum maxime eos
          velit? Minima, sed cum id quasi odio sunt.
        </p>
      </div>
    </>
  );
};

export default Home;
