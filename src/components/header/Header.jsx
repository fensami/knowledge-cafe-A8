import React from 'react';
import './Header.css'
import image from '../../images/image_processing20210616-17152-qutr0l.png'

const Header = () => {
    return (
        <div className='header'>
            <h1>Knowledge Cafe</h1>
            <img src={image} alt="" />
        </div>
    );
};

export default Header;