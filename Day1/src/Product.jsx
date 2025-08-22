import React from "react";
import "./Product.css";
const Product = ({title,price}) => {
    let isDiscount = price>=20000;
    console.log(isDiscount)
  return (
    <div className="main">
      <h3>Product Name:{title}</h3>
      <h3>Product Price:{price}</h3>
      {
        isDiscount ? <p>5 % discount</p> : null
      }

    </div>
  );
};

export default Product;
