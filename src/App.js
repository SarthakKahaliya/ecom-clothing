import "./categories.styles.scss";

const App = () => {
  const categories = require("./categories.json");
  console.log(categories);
  // const categories = [
  //   {
  //     id: 1,
  //     title: "Hats",
  //   },
  //   {
  //     id: 2,
  //     title: "Jackets",
  //   },
  //   {
  //     id: 3,
  //     title: "Sneakers",
  //   },
  //   {
  //     id: 4,
  //     title: "Women",
  //   },
  //   {
  //     id: 5,
  //     title: "Men",
  //   },
  // ];

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div key={category.id} className="category-container">
            {/* <img /> */}
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${category.imageUrl})`,
              }}
            />
            <div className="category-body-container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
