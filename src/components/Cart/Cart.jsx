import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiSettingsKnobs } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import group from "../../assets/Group.png";
import { toast } from 'react-hot-toast';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [purchaseTotal, setPurchaseTotal] = useState(0);
  const navigate = useNavigate();

  // Helper function to get cart items from localStorage
  const getCartItems = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  // Helper function to update cart items in localStorage
  const setCartItemsInStorage = (items) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  // Calculate the total cost of the items in the cart
  const calculateTotal = () => {
    if (cartItems.length === 0 || showModal) {
      return "0.00";
    }
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Sort items by price in descending order
  const sortByPriceDescending = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
  };

  // Handle purchase and show the success modal
  const handlePurchase = () => {
    if (cartItems.length === 0 || calculateTotal() === "0.00") {
      alert("Your cart is empty. Please add items before purchasing.");
      return;
    }

    const total = calculateTotal();
    setPurchaseTotal(total);
    setShowModal(true);
  };

  // Close modal, clear the cart, reset total, and navigate to home page
  const closeModal = () => {
    setCartItems([]);
    setCartItemsInStorage([]);
    setPurchaseTotal(0);
    setShowModal(false);
    navigate("/");
  };

  // Remove an item from the cart
  const removeItemFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    setCartItemsInStorage(updatedCartItems);

    // Show toast message
    toast.success("Item removed from cart!");
  };

  return (
    <div className="relative top-0 w-11/12 mx-auto">
      <div className="flex justify-between items-center mt-10 pb-8">
        <h2 className="font-bold text-2xl">Cart</h2>
        <div className="flex items-center gap-7">
          <h3 className="font-bold text-2xl">
            Total cost: ${calculateTotal()}
          </h3>
          
          <button
            onClick={sortByPriceDescending}
            disabled={cartItems.length === 0 || showModal || calculateTotal() === "0.00"}
            className={`${
              cartItems.length === 0 || showModal || calculateTotal() === "0.00"
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-black border border-[#9538E2] hover:bg-[#9538E2] hover:text-white"
            } px-4 py-2 rounded flex items-center gap-2 font-semibold text-lg`}
          >
            Sort by Price <GiSettingsKnobs />
          </button>

          <button
            onClick={handlePurchase}
            disabled={cartItems.length === 0 || calculateTotal() === "0.00" || showModal}
            className={`${
              cartItems.length === 0 || calculateTotal() === "0.00" || showModal
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-black border border-[#9538E2] hover:bg-[#9538E2] hover:text-white"
            } px-4 py-2 rounded font-semibold text-lg`}
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Details Section */}
      <div className="pb-10">
        {cartItems.length === 0 ? (
          ""
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 mb-5 py-4 flex justify-between gap-2 items-center"
            >
              <img
                src={item.product_image}
                alt={item.product_title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-grow ml-4">
                <h2 className="text-2xl font-semibold">{item.product_title}</h2>
                <p className="text-lg opacity-60">{item.description}</p>
                <p className="font-semibold text-lg opacity-80">
                  Price: ${item.price}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => removeItemFromCart(index)}
                  className="bg-white text-red-500 border border-red-500 px-2 py-2 rounded-full flex items-center gap-2"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Section */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 text-center space-y-3">
            <div className="mb-4">
              <img src={group} alt="Success" className="w-16 h-16 mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Payment Successfully</h2>
            <hr />
            <p className="font-medium opacity-60">Thanks for purchasing.</p>
            <p className="font-medium opacity-60">Total: ${purchaseTotal}</p>
            <button
              onClick={closeModal}
              className="mt-5 bg-gray-300 text-black w-full px-4 py-2 rounded-full font-semibold text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
