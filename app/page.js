import React from "react";

// components
import Link from "next/link";
import ProductCard from "./components/ProductCard";

// data
import products from "./constants/productData";

const HomePage = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex justify-center pb-10 text-2xl text-red-500 font-bold">
        -OUR MENU-
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
        {products.map((item, index) => (
          <Link href={`/product/${item.id}`}>
            <ProductCard
              key={index}
              title={item.title}
              price={item.price}
              duration={item.duration}
              cover={item.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
