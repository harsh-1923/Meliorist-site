import React from "react";
import "./ProductCard.css";

const ProductCard = ({ img, name, price, rating }) => {
  return (
    <div className="product-card-wrapper">
      <img className="product-img" src={img} />
      <div className="product-card-details">
        <p className="product-card-name">{name}</p>
        <div className="product-card-x">
          <p className="product-card-price">{price}</p>
          <p className="product-card-rating">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
