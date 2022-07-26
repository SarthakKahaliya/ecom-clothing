import "./categories.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Categories = () => {
  const categories = require("./categories.json");
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Categories;
