import React, { useEffect, useState } from 'react';
import './Newsfeed.css'
import News from '../news/News';
import Cart from '../cart/Cart';

const Newsfeed = () => {
    const [newsfeed, setNewsfeed] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(()=> {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNewsfeed(data))
    },[])

    const markAsReadBtn = (news) => {
        const newCart = [...cart , news];
        setCart(newCart);
    } 
    return (
        <div className='newsFeed'>
            <div>
            
                {
                    newsfeed.map(news=> <News
                    key={news.id}
                    news = {news}
                    markAsReadBtn = {markAsReadBtn}

                    ></News>)
                }
          
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Newsfeed;