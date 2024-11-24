import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Chargers = () => {
  const chargers = useLoaderData();

  const filteredchargers = chargers.filter(
    (product) => product.category === "Chargers"
  );

  return (
    <div className="col-span-3 grid md:grid-cols-3 gap-4">
      {filteredchargers.length > 0 ? (
        filteredchargers.map((charger) => (
          <Product key={charger.product_id} product={charger} />
        ))
      ) : (
        <p className="text-3xl font-bold text-[#9538E2]">No Data Found</p>
      )}
    </div>
  );
};

export default Chargers;
