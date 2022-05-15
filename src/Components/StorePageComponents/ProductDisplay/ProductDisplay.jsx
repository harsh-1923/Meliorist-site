import React from "react";
import "./ProductDisplay.css";

import DATA from "../../../DATA";

import ProductCard from "../../StorePageComponents/ProductCard/ProductCard.jsx";

const ProductDisplay = () => {
  return (
    <div className="product-display-wrapper">
      <div className="product-display-header">
        <p className="title">SHOES</p>
        <div>
          <span style={{ border: "1px solid grey", padding: "8px" }}>
            Sort By
          </span>
        </div>
      </div>

      <div className="product-disp-wrapper">
        {DATA.products.map((product, key) => {
          return <ProductCard rating={product.ratings} name={product.name} img={product.img} price={product.price}/>;
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
