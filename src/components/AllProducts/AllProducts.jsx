import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const AllProducts = () => {
  const products = useLoaderData();

  return (
    <div className="col-span-3 grid md:grid-cols-3 gap-4">
      {products && products.length > 0 ? (
        products
          .slice(0, 6)
          .map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default AllProducts;
