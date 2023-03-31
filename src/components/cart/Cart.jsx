import React from 'react';
import './Cart.css'

const Cart = ({cart, cart2}) => {
    
    let total = 0;
    for(const newz of cart){
        if(newz.total === 0){
            newz.total = 1;
        }
        total = total + newz.read_time;
    }
    return (
        <div className='cart'>
            <div className='spent-container'>
                <h3>Spent time on read : {total} </h3>
            </div>
            <div className='blogs-container'>
                <h3>Bookmarked Blogs : {cart2.length} {cart.blog_title} </h3>
            </div>
        </div>
    );
};

export default Cart;