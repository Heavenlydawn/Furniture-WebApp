import React from "react";
import "./Product.css";
import ProductData from "./ProductData";
import { useState } from "react";

const Product = () => {
  // Handeling Mouse Hover
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const PdtData = ProductData.map((data, index) => (
    <div
      className="bg-[#F4F5F7] Card"
      key={index}
      onMouseOver={handleMouseHover}
    >
      {/* <div className="group hover:flex hover:justify-center hover:items-center relative">
        <button className="hidden group-hover:block absolute text-[blue]">
          Add to Cart
        </button>
      </div> */}

      <img alt="Avatar" src={data.image} />
      <div className="pl-5">
        <h2 className="text-2xl font-bold py-5">{data.name}</h2>
        <p className="text-lg font-bold text-[#898989]">{data.des}</p>
        <div className="flex mt-3">
          <p className="mr-3 text-2xl font-bold">{data.currentPrice}</p>
          <p>
            <del className="font-bold ml-5 text-[#B0B0B0]">
              {data.previousPrice}
            </del>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    // PRODUCT SECTION
    <div>
      <h2 className="font-bold text-4xl text-center my-10">Our Products</h2>
      <div className="grid grid-cols-4 gap-4 w-max">{PdtData}</div>
      {isHovering && (
        <button className="hidden group-hover:block absolute text-[blue]">
          Add to Cart
        </button>
      )}
      <button className="text-center text-[#E89F71]">Show More</button>
    </div>
  );
};

export default Product;
