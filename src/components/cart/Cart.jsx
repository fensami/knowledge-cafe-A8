import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart
    // console.log(cart);
    // console.log(cart);
    // console.log(cart);
    let total = 0;
    for(const newz of cart){
        total =total + newz.read_time
        console.log(newz.read_time);
        // total =total + new;
    }
    return (
        <div>
            <div className='spent-container'>
                <h3>Spent time on read : {total} </h3>
            </div>
            <div className='blogs-container'>
                <h3>Bookmarked Blogs : {cart.length}</h3>
            </div>
        </div>
    );
};

export default Cart;