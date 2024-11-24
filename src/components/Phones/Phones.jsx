import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Phones = () => {
  const phones = useLoaderData();

  const filteredPhones = phones.filter(
    (product) => product.category === "Phones"
  );

  return (

      <div className="col-span-3 grid md:grid-cols-3 gap-4">
        {filteredPhones.map((phone) => (
          <Product key={phone.product_id} product={phone}></Product>
        ))}
      </div>

  );
};

export default Phones;
