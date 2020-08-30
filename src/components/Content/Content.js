import React from 'react';

import AddBlog from './AddBlog/AddBlog';
import BlogList from './BlogList/BlogList';

import './Content.scss';

const Content = ({setShowModal}) =>{
    return (
        <div className='content'>
            <h1 className='content__headline'>Welcome to My Blog</h1>
            <AddBlog setShowModal={setShowModal}/>
            <BlogList setShowModal={setShowModal}/>
        </div>
    );
};
export default Content;
