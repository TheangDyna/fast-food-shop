import React from "react";

const ProductCard = ({ title, price, duration, cover }) => {
  return (
    <div className="flex w-[350px] bg-gradient-to-r from-yellow-200 rounded-md">
      <div className="w-48 h-48  flex items-center p-4">
        <img src={cover} className="w-full h-auto object-cover" />
      </div>
      <div className=" flex flex-col flex-1 gap-5 pl-4 justify-center">
        <p className="text-lg">{title}</p>
        <p className="text-2xl font-bold">{price}$</p>
        <p className="text-lg">{duration}mn</p>
      </div>
    </div>
  );
};

export default ProductCard;
