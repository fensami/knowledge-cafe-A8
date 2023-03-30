import React from 'react';
import './Newsfeed.css'
import News from '../news/News';
import Cart from '../cart/Cart';

const Newsfeed = () => {
    return (
        <div className='newsFeed'>
            <div>
            <News></News>
            </div>
            <div>
               <Cart></Cart>
            </div>

        </div>
    );
};

export default Newsfeed;