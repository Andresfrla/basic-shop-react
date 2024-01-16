import React from 'react'

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data; 

    return (
    <div>
        <img src={productImage}/>
        <div>
            <p><b>{productName}</b></p>
            <p>
                ${price}
            </p>
        </div>
    </div>
  )
}
