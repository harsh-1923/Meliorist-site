import React from "react";
import "./StorePage.css";

import Filter from "../../Components/StorePageComponents/Filter/Filter.jsx";
import ProductDisplay from "../../Components/StorePageComponents/ProductDisplay/ProductDisplay.jsx";
import Cart from "../../Components/StorePageComponents/Cart/Cart";

const StorePage = () => {
  return (
    <div className="store-page-wrapper">
      <Filter />
      <ProductDisplay />
      <Cart />
    </div>
  );
};

export default StorePage;
