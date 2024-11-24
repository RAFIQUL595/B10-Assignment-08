import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const PowerBanks = () => {
    const powerBanks = useLoaderData();

    const filteredpowerbanks = powerBanks.filter(
      (product) => product.category === "Power Banks"
    );
  
    return (
  
        <div className="col-span-3 grid md:grid-cols-3 gap-4">
          {filteredpowerbanks.map((powerbank) => (
            <Product key={powerbank.product_id} product={powerbank}></Product>
          ))}
        </div>
  
    );
};

export default PowerBanks;