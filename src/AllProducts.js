import React from "react";
import AllProductData from "./AllProductData";
import "./AllProducts.css"

const AllProducts = () => {
  const PdtData = AllProductData.map((data, index) => (
    <div className="bg-[#F4F5F7] Card">
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
    <div>
      <h2 className="font-bold text-4xl text-center my-10">Our Products</h2>
      <div className="grid grid-cols-4 gap-4 w-max">{PdtData}</div>
    </div>
  );
};

export default AllProducts;
