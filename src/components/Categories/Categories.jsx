import { NavLink } from "react-router-dom";

const Categories = () => {
  const categories = [
    { to: "/products", label: "All Product" },
    { to: "/computers", label: "Computers" },
    { to: "/phones", label: "Phones" },
    { to: "/smartwatches", label: "Smart Watches" },
    { to: "/chargers", label: "Chargers" },
    { to: "/macbooks", label: "MacBook" },
    { to: "/powerbanks", label: "Power Banks" },
    { to: "/accessories", label: "Accessories" }
  ];

  return (
    <div>
      <div className="bg-white rounded-xl w-fit h-fit">
        <div role="tablist" className="p-5 gap-3 flex flex-col items-start w-fit">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              to={category.to}
              role="tab"
              className="tab btn w-[192px] hover:bg-[#9538E2] hover:text-white"
            >
              {category.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
