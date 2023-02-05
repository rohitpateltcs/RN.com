import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <Product
        product_id="1"
        product_img="https://www.newline.co/_next/image?url=https%3A%2F%2Fdzxbosgk90qga.cloudfront.net%2Ffit-in%2F880x528%2Fn%2F20221019030519248_fs-react-typescript-v1.png&w=640&q=75"
        product_title="Fullstack web"
        product_type="book"
        product_author="John harris"
        reviews="4.5"
        description="Full stack new wb"
      />
      <Product
        product_id="2"
        product_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2oH7h5VRaJnwlECZhzd7jrjkygaRj8p7Vw&usqp=CAU"
        product_title="Python for beginers"
        product_type="book"
        product_author="Newjoywella"
        reviews="4"
        description="This is python book for beginners"
      />
      <Product
        product_id="3"
        product_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdZbNApExzwasxqo_hZ4qV-I01jPdEOvf8g&usqp=CAU"
        product_title="Javascript"
        product_type="book"
        product_author="Mwjellas"
        reviews="5"
        description="Full javascript course"
      />
      <Product
        product_id="3"
        product_img="https://www.newline.co/_next/image?url=https%3A%2F%2Fdzxbosgk90qga.cloudfront.net%2Ffit-in%2F880x528%2Fn%2F20221019030519248_fs-react-typescript-v1.png&w=640&q=75"
        product_title="Fullstack web"
        product_type="book"
        product_author="John harris"
        reviews="5"
        description="Welcome book"
      />
      <Product
        product_id="3"
        product_img="https://www.newline.co/_next/image?url=https%3A%2F%2Fdzxbosgk90qga.cloudfront.net%2Ffit-in%2F880x528%2Fn%2F20221019030519248_fs-react-typescript-v1.png&w=640&q=75"
        product_title="Fullstack web"
        product_type="book"
        product_author="John harris"
        reviews="5"
        description="Welcome book"
      />
      <Product
        product_id="3"
        product_img="https://www.newline.co/_next/image?url=https%3A%2F%2Fdzxbosgk90qga.cloudfront.net%2Ffit-in%2F880x528%2Fn%2F20221019030519248_fs-react-typescript-v1.png&w=640&q=75"
        product_title="Fullstack web"
        product_type="book"
        product_author="John harris"
        reviews="5"
        description="Welcome book"
      />
      <Product
        product_id="3"
        product_img="https://www.newline.co/_next/image?url=https%3A%2F%2Fdzxbosgk90qga.cloudfront.net%2Ffit-in%2F880x528%2Fn%2F20221019030519248_fs-react-typescript-v1.png&w=640&q=75"
        product_title="Fullstack web"
        product_type="book"
        product_author="John harris"
        reviews="5"
        description="Welcome book"
      />
    </div>
  );
};

export default Products;
