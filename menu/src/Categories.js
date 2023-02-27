import React, { useContext } from "react";
import { CategoryContext } from "./App";

const Categories = () => {
  const { categories, filterItems } = useContext(CategoryContext);
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
