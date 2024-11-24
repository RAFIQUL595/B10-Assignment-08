import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.jpg";

const Banner = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="bg-[#9538E2] pb-52 py-32 rounded-xl relative -top-20 min-h-fit">
        <div className="text-center space-y-5 mb-5">
          <h2 className="text-3xl font-bold md:text-5xl md:w-5/6 mx-auto text-white">
            Upgrade Your Tech Accessories with Gadget Heaven Accessories
          </h2>
          <p className="w-5/6 md:w-3/6 mx-auto text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button
            className="px-6 py-2 bg-white text-[#9538E2] font-bold rounded-md"
            onClick={handleShopNowClick}
          >
            Shop Now
          </button>
        </div>

        <div className="mt-10 absolute md:left-80 border-2 rounded-xl p-5 bg-white/40 min-h-fit">
          <img
            src={banner}
            alt="VR Headset"
            className="md:h-[400px] rounded-lg shadow-lg "
          />
        </div>
      </div>
      <h2 className="mt-28 md:mt-60 text-center text-[20px] md:text-[40px] font-bold">
        Explore Cutting-Edge Gadgets
      </h2>
    </div>
  );
};

export default Banner;
