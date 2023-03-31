import React from 'react';
import './News.css'

const News = (props) => {
    const { blog_cover_image, author_image, author_name,blog_title, read_time } = props.news
    // console.log(props);
    const markAsReadBtn = props.markAsReadBtn;

    
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
                <div onClick={() =>markAsReadBtn(props.news)}>
                    <p>{read_time} min read</p>
                    <p>i</p>
                </div>
            </div>
            <h2>{blog_title}</h2>
            <p>#beginner #programming</p>
            <a  >Mark as read</a>
            <div className='underline'></div>
        </div>
    );
};

export default News;