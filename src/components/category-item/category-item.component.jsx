import React from "react";
import "./category-item.styles.scss";

const CategoryItem = (props) => {
  const { title, imageUrl } = props.category;

  return (
    <div className="category-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
