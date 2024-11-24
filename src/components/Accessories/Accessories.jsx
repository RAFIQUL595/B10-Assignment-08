import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Accessories = () => {
  const accessories = useLoaderData();

  const filteredaccessories = accessories.filter(
    (product) => product.category === "Accessories"
  );

  return (
    <div className="col-span-3 grid md:grid-cols-3 gap-4">
      {filteredaccessories.map((accessorie) => (
        <Product key={accessorie.product_id} product={accessorie}></Product>
      ))}
    </div>
  );
};

export default Accessories;
