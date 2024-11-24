import { useLocation } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import "@smastrom/react-rating/style.css";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { toast } from 'react-hot-toast';

const ViewDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Handle Favorite Button Click
  const handleFavoriteButton = () => {
    // Check if the item is already favorited
    if (isFavorite) {
      // Show a toast message on second click
      toast.error("Item is already in your Wishlist");
      return;
    }

    // Define the item to add to wishlist
    const favoriteItem = {
      id: product.product_id,
      product_title: product.product_title,
      product_image: product.product_image,
      description: product.description,
      price: product.price,
      availability: product.availability,
    };

    // wishlist items from localStorage
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Check if the item is already in the wishlist
    const isItemInWishlist = wishlist.some((item) => item.id === favoriteItem.id);

    if (!isItemInWishlist) {
      // Add item to wishlist if it's not already there
      wishlist.push(favoriteItem);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      
      // Show success toast
      toast.success('Successfully added to Wishlist');
      setIsFavorite(true);
    } else {
      // Show message if item is already in the wishlist
      toast.error("Item is already in your Wishlist");
    }
  };

  // Handle Add to Cart Button
  const handleAddToCart = () => {
    const newItem = {
      id: product.product_id,
      product_title: product.product_title,
      product_image: product.product_image,
      description: product.description,
      price: product.price,
      availability: product.availability,
    };

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const isItemInCart = cartItems.some((item) => item.id === newItem.id);
    if (!isItemInCart) {
      cartItems.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cartItems));

      toast.success('Successfully added to cart!');
      setIsAdded(true);

      // Update cart count in localStorage
      const cartCount = cartItems.length;
      localStorage.setItem("cartCount", cartCount);
    } else {
      toast.error("Item already in the cart.");
    }
  };

  // State for rating
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div className="bg-[#9538E2] h-72 text-center text-white">
        <h2 className="text-3xl font-bold pt-5">Product Details</h2>
        <p className="md:w-4/6 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="relative -top-32">
        <div className="hero bg-white rounded-xl w-4/6 mx-auto">
          <div className="hero-content flex-col items-start lg:flex-row gap-10">
            <img
              src={product.product_image}
              className="max-w-sm h-[503px] rounded-lg shadow-2xl"
              alt={product.product_title}
            />
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold">{product.product_title}</h1>
              <p className="font-semibold opacity-80">Price: ${product.price}</p>
              <p
                className={`font-semibold w-fit p-2 rounded-xl ${
                  product.availability
                    ? "text-[#309C08] border-[#309C08] bg-[#E6F4EA]"
                    : "text-[#FF0000] border-[#FF0000] bg-[#FEECEC]"
                } border`}
              >
                {product.availability ? "In Stock" : "Out of Stock"}
              </p>
              <p className="opacity-60">{product.description}</p>
              <h5 className="font-bold text-lg">Specifications:</h5>
              {Array.isArray(product.specifications) ? (
                <ol className="list-decimal pl-6 space-y-1 opacity-60">
                  {product.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ol>
              ) : (
                ""
              )}
              <h4 className="font-bold text-lg">Rating ⭐</h4>

              <div className="flex items-center gap-5">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={product.rating}
                  halfFillMode="box"
                  onChange={setRating}
                />
                <p className="bg-gray-300 py-1 px-2 rounded-xl font-medium">
                  {product.rating}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  className={`flex items-center gap-2 ${
                    isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-[#9538E2]"
                  } text-white hover:bg-[#672d96] px-5 py-2 rounded-3xl`}
                  onClick={handleAddToCart}
                  disabled={isAdded}
                >
                  {isAdded ? "Added to Cart" : "Add To Cart"}
                  <IoCartOutline className="size-5" />
                </button>
                <button
                  onClick={handleFavoriteButton}
                  className={`border p-2 rounded-full ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
                  disabled={isFavorite}
                >
                  <MdFavoriteBorder className="size-7" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ViewDetails;
