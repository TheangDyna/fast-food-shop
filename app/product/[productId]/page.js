"use client";
import React, { useState } from "react";

// data
import products from "@/app/constants/productData";
import { notFound } from "next/navigation";

// icons
import MinusIcon from "@/app/components/icons/MinusIcon";
import PlusIcon from "@/app/components/icons/PlusIcon";

const ProductDetailPage = ({ params }) => {
  const productId = params.productId;
  const product = products.find((item) => item.id == productId);
  if (product == undefined) {
    notFound();
  }

  // let amount = 5;
  const [amount, setAmount] = useState(0);
  console.log(amount);
  return (
    <div>
      <div className=" max-w-[1000px] mx-auto grid grid-cols-1 gap-y-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-2xl font-bold">{product.title}</p>
          <div className="w-96 h-96 flex items-center p-4">
            <img
              src={product.cover}
              alt={product.title}
              className="w-full object-cover"
            />
          </div>
          <p className="text-2xl font-bold">Price: {product.price}$</p>
          <p className="text-2xl font-bold">
            Duration: {product.duration}mn
          </p>
        </div>
        <div className="flex flex-col justify-between items-center h-96 lg:h-auto order-1 lg:order-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros
            nulla, suscipit sed lectus eget, ornare euismod nibh. Nunc non
            ultricies velit. Sed sed lacinia magna.
          </p>
          <div className="flex items-center w-[160px] justify-between">
            <button
              className="btn btn-circle btn-ghost"
              onClick={() => setAmount((value) => value - 1)}
              disabled={amount <= 0}
            >
              <MinusIcon className="w-6 h-6 text-red-500" />
            </button>
            <p className="text-2xl font-bold">{amount}</p>
            <button
              className="btn btn-circle btn-ghost"
              onClick={() => setAmount((value) => value + 1)}
            >
              <PlusIcon className="w-6 h-6 text-green-500" />
            </button>
          </div>
          <p className="text-2xl font-bold">total: {amount * product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
