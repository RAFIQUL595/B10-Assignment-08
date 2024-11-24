import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto">
        {/* Banner Section */}
        <Banner></Banner>
        {/* categories Section */}
        <div className="grid md:grid-cols-4 mt-5 pb-10">
          <Categories></Categories>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
