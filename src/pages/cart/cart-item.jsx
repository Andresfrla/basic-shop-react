import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { cartItems, addToCart, removeToCart, updateCartItemCount } = useContext(ShopContext);

    return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div>
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price}</p>
            <div className='countHandler'>
                <button onClick={() => removeToCart(id)}> - </button>
                    <input value={cartItems[id] || ''} onChange={(e) => updateCartItemCount(e.target.value, id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
