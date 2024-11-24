import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  const handleAddToCartClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeItemFromWishlist = (index) => {
    const updatedWishlist = [...wishlistItems];
    updatedWishlist.splice(index, 1);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Show success toast message
    toast.success('Item removed from wishlist!');
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="font-bold text-2xl">Wishlist</h1>
      <div>
        <div className="pb-10 mt-10">
          {wishlistItems.length === 0
            ? ""
            : wishlistItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 mb-5 py-4 flex justify-between gap-2 items-center"
                >
                  <img
                    src={item.product_image}
                    alt={item.product_title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-grow ml-4 space-y-2">
                    <h2 className="text-2xl font-semibold">
                      {item.product_title}
                    </h2>
                    <p className="text-lg opacity-60">{item.description}</p>
                    <p className="font-semibold text-lg opacity-80">
                      Price: ${item.price}
                    </p>
                    <button
                      className="bg-[#9538E2] p-2 rounded-lg text-lg text-white"
                      onClick={handleAddToCartClick}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => removeItemFromWishlist(index)}
                      className="bg-white text-red-500 border border-red-500 px-2 py-2 rounded-full flex items-center gap-2"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
