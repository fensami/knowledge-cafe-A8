import React from 'react';
import './Newsfeed.css'
import News from '../news/News';

const Newsfeed = () => {
    return (
        <div className='newsFeed'>
            <div>
            <News></News>
            </div>
            <div>
                <h3>Cart option</h3>
            </div>

        </div>
    );
};

export default Newsfeed;