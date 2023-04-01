import React, { useEffect, useState } from 'react';
import './Newsfeed.css'
import News from '../news/News';
import Cart from '../cart/Cart';
import { toast } from 'react-toastify';

const Newsfeed = () => {
    const [newsfeed, setNewsfeed] = useState([]);
    const [cart , setCart] = useState([]);
    const [cart2 , setCart2] = useState([]);
    useEffect(()=> {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNewsfeed(data))
    },[])


    const markAsReadBtn = (news) => {
        const newCart = [...cart , news];
        setCart(newCart);
    } 
    const bookmarkBtn = (news) => {
        toast(news.blog_title, {position:"top-center"})
        const newCart2 = [...cart2 , news];
        setCart2(newCart2);
    } 

    return (
        <div className='newsFeed'>
            <div>
            
                {
                    newsfeed.map(news=> <News
                    key={news.id}
                    news = {news}
                    markAsReadBtn = {markAsReadBtn}
                    bookmarkBtn = {bookmarkBtn}

                    ></News>)
                }
          
            </div>
            <div>
                <Cart cart={cart} cart2= {cart2}></Cart>
            </div>

        </div>
    );
};

export default Newsfeed;