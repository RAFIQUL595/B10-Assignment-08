import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    navigate("/cart");
  };
  return (
    <div>
      <div className="bg-[#9538E2] h-52 text-center text-white">
        <h2 className="text-3xl font-bold pt-5">Dashboard</h2>
        <p className="md:w-4/6 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-[#9538E2] px-4 py-2 rounded"
                : "bg-[#9538E2] text-white border border-white px-4 py-2 rounded"
            }
          >
            <button onClick={handleAddToCartClick}>Cart</button>
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-[#9538E2] px-4 py-2 rounded"
                : "bg-[#9538E2] text-white border border-white px-4 py-2 rounded"
            }
          >
            <button>Wishlist</button>
          </NavLink>
        </div>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
