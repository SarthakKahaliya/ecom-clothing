import { Outlet } from "react-router-dom";
import Categories from "../../components/categories/categories.component";

const Home = () => {
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
    <div>
      <Outlet />
      <Categories />
    </div>
  );
};

export default Home;
