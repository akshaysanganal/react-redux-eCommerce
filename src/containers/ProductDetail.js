import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProductToCart, removeSelectedProduct, selectedProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const { image, title, price, category, description } = product;

  const [selectedProduct, setSelectedProduct] = useState(undefined);

  const getProductDetails = async (productId) => {
    const result = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    setSelectedProduct(result.data);
    dispatch(selectedProducts(result.data));
  };

  useEffect(() => {
    getProductDetails(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const addToCart = () => {
    selectedProduct && dispatch(addProductToCart(selectedProduct));
    console.log(cart);
  };

  return (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="ui vertical divider">AND</div>
        <div className="middle aligned row">
          <div className="column lp">
            <img className="ui medium image" src={image} alt={title} />
          </div>
          <div className="column rp">
            <h1>{title}</h1>
            <h2>
              <a className="ui teal tag label">${price}</a>
            </h2>
            <h3 className="ui brown block header">{category}</h3>
            <p>{description}</p>
            <div
              className="ui vertical animated button"
              tabIndex="0"
              onClick={() => {
                addToCart();
              }}
            >
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
