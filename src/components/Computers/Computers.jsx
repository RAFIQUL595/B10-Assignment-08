import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Computers = () => {
  const computers = useLoaderData();
  const filteredComputers = computers.filter(
    (product) => product.category === "Computers"
  );

  return (
    <div className="col-span-3 grid md:grid-cols-3 gap-4">
      {filteredComputers.length > 0 ? (
        filteredComputers.map((computer) => (
          <Product key={computer.product_id} product={computer} />
        ))
      ) : (
        <p className="text-3xl font-bold text-[#9538E2]">No Data Found</p>
      )}
    </div>
  );
};

export default Computers;
