import React from "react";
import Link from "next/link";

const Product = ({
  product_id,
  product_img,
  product_title,
  product_type,
  product_author,
  reviews,
  description,
}) => {
  return (
    <div className="w-[450px] mx-auto m-2 border-2 border-gray-300 rounded-md">
      <div className="flex justify-between p-2 bg-gray-200">
        <h2>{product_title}</h2>
        <p>{product_id}</p>
      </div>
      <div className="pb-2">
        <Link href="/about">
          <img src={product_img} alt="" className="w-full h-72" />
        </Link>
      </div>
      <div className="p-2 text-sm font-medium">{description}</div>
      <div className="flex justify-between p-2 bg-green-200">
        <p>Author : {product_author}</p>
        <p>{reviews}</p>
      </div>
    </div>
  );
};

export default Product;
