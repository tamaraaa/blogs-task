import React from 'react';

import AddBlog from './AddBlog/AddBlog';
import BlogList from './BlogList/BlogList';

import './Content.scss';

const Content = ({setShowModal, setShowCategoryModal, showSearched, setShowSearched}) =>{

    return (
        <div className='content'>
            <h1 className='content__headline'>Welcome to My Blog</h1>
            <AddBlog setShowCategoryModal={setShowCategoryModal} setShowModal={setShowModal}/>
            <BlogList setShowSearched={setShowSearched} showSearched={showSearched} setShowCategoryModal={setShowCategoryModal} setShowModal={setShowModal}/>
        </div>
    );
};
export default Content;
