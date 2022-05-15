import React from "react";
import "./filter.css";

const Filter = () => {
  return (
    <div className="filter-wrapper">
      <h3 className="filter-title">FILTERS</h3>

      <div className="filter-cost">
        <p className="filter-title">Cost</p>
        <input type="checkbox" />
        <label className="filter-label"> Rs. 1500-4000</label>
        <br />

        <input type="checkbox" />
        <label className="filter-label"> Rs. 4001-7000</label>
        <br />

        <input type="checkbox" />
        <label className="filter-label"> Rs. 7000+</label>
      </div>

      <br />
      <div className="filter-color">
        <p className="filter-title">Color</p>

        <div className="filter-color-box-wrapper">
          <div className="filter-color-box red"></div>
          <div className="filter-color-box cyan"></div>
          <div className="filter-color-box yellow"></div>
          <div className="filter-color-box green"></div>
        </div>
      </div>

      <div className="filter-design-wrapper">
        <p className="filter-title">Design Templates</p>

        <input type="checkbox" />
        <label className="filter-label"> 1</label>
        <br />

        <input type="checkbox" />
        <label className="filter-label"> 2</label>
        <br />

        <input type="checkbox" />
        <label className="filter-label"> 3+</label>
        <br />
      </div>

      <div className="filter-type-wrapper">
        <p className="filter-title">Type</p>

        <input type="checkbox" />
        <label className="filter-label"> Loafers</label>
        <br />

        <input type="checkbox" />
        <label className="filter-label"> Sneakers </label>
        <br />
      </div>
    </div>
  );
};

export default Filter;
