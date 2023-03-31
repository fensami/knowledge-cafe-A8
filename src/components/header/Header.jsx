import React from 'react';
import './Header.css'
import image from '../../images/sabbir.jpg'

const Header = () => {
    return (
        <div className='header'>
            <h1>Knowledge Cafe</h1>
            <img src={image} alt="" />
            
        </div>
        
    );
};

export default Header;