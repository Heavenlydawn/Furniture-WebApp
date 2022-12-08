import React from "react";
import "./Products.css";
import ProductData from "./ProductData";
import Funiro from "./Funiro";
// import { useState } from "react";

// Animation

// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Product = () => {
  // !Product Mapping

  const PdtData = ProductData.map((data, index) => (
    <div>
      <div className="bg-[#F4F5F7] Card" key={index}>
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
      <div className="cartLay">
        <button className="Add">Add to Cart</button>
      </div>
    </div>
  ));

  return (
    // PRODUCT SECTION
    <div className="ProductContainer">
      <h2 className="font-bold text-4xl text-center my-10">Our Products</h2>
      <div className="grid grid-cols-4 gap-4 w-max">{PdtData}</div>

      {/* Show More Button */}
      <div className="flex justify-center my-10">
        <button className="px-16 py-4 border-2 border-[#E89F71] text-[#E89F71] font-bold">
          Show More
        </button>
      </div>

      <Funiro />
    </div>
  );
};

export default Product;
