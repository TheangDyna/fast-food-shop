import React from "react";
import Link from "next/link";

const ProductNotFoundPage = () => {
  return (
    <div>
      <p> Product is not found!!!</p>
      <Link href="/">Go to see other products.</Link>
    </div>
  );
};

export default ProductNotFoundPage;
