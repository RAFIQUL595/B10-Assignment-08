import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const SmartWatches = () => {
    const smartwatches = useLoaderData();

    const filteredsmartwatches = smartwatches.filter(
      (product) => product.category === "Smart Watches"
    );
  
    return (
  
        <div className="col-span-3 grid md:grid-cols-3 gap-4">
          {filteredsmartwatches.map((watches) => (
            <Product key={watches.product_id} product={watches}></Product>
          ))}
        </div>
  
    );
};

export default SmartWatches;