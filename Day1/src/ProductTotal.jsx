import React from 'react'
import Product from './Product'

const ProductTotal = () => {
  return (
    <div>
        <Product title='Moblie' price={25000}/>
        <Product title='Laptop' price={45000}/>
        <Product title='Pen' price={100}/>
    </div>
  )
}

export default ProductTotal