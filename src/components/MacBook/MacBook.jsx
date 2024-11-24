import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const MacBook = () => {
  const macBook = useLoaderData();

  const filteredmacBook = macBook.filter(
    (product) => product.category === "MacBook"
  );

  return (
    <div className="col-span-3 grid md:grid-cols-3 gap-4">
      {filteredmacBook.map((mac) => (
        <Product key={mac.product_id} product={mac}></Product>
      ))}
    </div>
  );
};

export default MacBook;
