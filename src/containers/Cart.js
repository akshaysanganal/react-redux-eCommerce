import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { removeProductFromCart } from "../redux/actions/productActions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeImage = (productId) => {
    console.log(productId);
    dispatch(removeProductFromCart(productId));
  };
  const renderItems = cart.map((el, index) => {
    return (
      <div key={index} role="listitem" className="item">
        <div className="right floated content">
          <i className="fa" onClick={() => removeImage(el.id)} style={{ fontSize: "24px", color: "red", cursor: "pointer" }}>
            &#xf014;
          </i>
        </div>
        <img src={el.image} className="ui mini image" alt={el.title} />
        <div className="content">{el.title}</div>
      </div>
    );
  });
  return (
    <div className="marginTopTen">
      <h1>Items in your cart</h1>

      <div className="ui grid container">
        <div role="list" className="ui divided list">
          {renderItems}
        </div>
      </div>
    </div>
  );
};

export default Cart;
