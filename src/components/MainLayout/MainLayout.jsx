import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="w-11/12 mx-auto">
          {/* Nav Bar */}
          <NavBar></NavBar>
        </div>
        {/* Dynamic Section */}
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
