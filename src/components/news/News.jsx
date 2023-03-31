import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './News.css'

const News = (props) => {
    const { blog_cover_image, author_image, author_name,blog_title, read_time } = props.news
    // console.log(props);
    const markAsReadBtn = props.markAsReadBtn;

    const bookmarkBtn = props.bookmarkBtn
    
    return (
        <div className='news'>
            <img src={blog_cover_image} alt="" />
            <div className='name-section'>
                <div className='images-name-section'>
                    <img src={author_image} />
                    <div>
                        <h3>{author_name}</h3>
                        <p>Mar 14 (4 Days ago)</p>
                    </div>
                </div>
                <div>
                    <p>{read_time} min read <FontAwesomeIcon onClick={() => bookmarkBtn(props.news)} className='icon' icon={faBookmark} /></p>
                </div>
            </div>
            <h2>{blog_title}</h2>
            <p>#beginner #programming</p>
            <a onClick={() =>markAsReadBtn(props.news)} >Mark as read</a>
            <div className='underline'></div>
        </div>
    );
};

export default News;