import React from "react";
import "./Product.css";
const Product = ({title,price,arr}) => {
    let isDiscount = price>=20000;
    let styles = { backgroundColor: isDiscount ?'red' : ''}
  return (
    <div className="main" style={styles} >
      <h3>Product Name:{title}</h3>
      <h3>Product Price:{price}</h3>
      {
        isDiscount ? <p>5 % discount</p> : null
      }
      <p>{arr.map((el,index)=> (
        <li key={index}>{el}</li>
      ))}</p>

    </div>
  );
};

export default Product;
