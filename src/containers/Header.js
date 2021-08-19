import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const [cartCount, setcartCount] = useState(0);

  useEffect(() => {
    setcartCount(cart.length);
  });
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={`/`}>
          <h2 className="black-font">Fake Shop</h2>
        </Link>
        <div class="right menu">
          <div>
            <i className="fa" style={{ fontSize: "24px" }}>
              &#xf07a;
            </i>
            <span className="badge badge-warning" id="lblCartCount">
              {" "}
              {cartCount}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
