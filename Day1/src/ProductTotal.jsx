import React from 'react'
import Product from './Product'

const ProductTotal = () => {

  return (
    <div>
        <Product title='Moblie' price={25000} arr={["hi-tech","speed"]}/>
        <Product title='Laptop' price={45000} arr={["hi-tech","speed"]} />
        <Product title='Pen' price={100} arr={["hi-tech","speed"]} />
    </div>
  )
}

export default ProductTotal