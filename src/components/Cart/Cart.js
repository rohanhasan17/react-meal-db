import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    const {strMeal, strMealThumb, strInstructions} = cart;
    return (
        <div className='cart'>
            <h2>{strMeal}</h2>
            <img src={strMealThumb} alt="" />
            <p>{strInstructions}</p>
        </div>
    );
};

export default Cart;