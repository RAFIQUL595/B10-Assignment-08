import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { product_image, product_title, price, product_id } = product;

  const navigate = useNavigate();

  const handelDetails = () => {
    navigate(`/viewdetails/${product_id}`, { state: { product } });
  };

  return (
    <div className="border flex flex-col p-8 rounded-xl bg-white shadow-md h-[400px]">
      <div className="space-y-2 flex-grow">
        <img
          className="h-44 w-64 rounded-xl"
          src={product_image}
          alt={product_title}
        />
        <h2 className="text-xl font-semibold">{product_title}</h2>
        <p className="opacity-90">Price: ${price}</p>
      </div>
      <div>
        <button
          onClick={handelDetails}
          className="mt-4 font-semibold p-2 border-2 border-[#9538E2] text-[#9538E2] rounded-full hover:bg-[#9538E2] hover:text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Product;
