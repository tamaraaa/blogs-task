import React from 'react';

import AddBlog from './AddBlog/AddBlog';
import BlogList from './BlogList/BlogList';

import './Content.scss';

const CLASS= 'Content';
const Content = ({setShowModal}) =>{
    return (
        <div className={CLASS}>
            <h1 className={`${CLASS}__headline`}>Welcome to My Blog</h1>
            <AddBlog setShowModal={setShowModal}/>
            <BlogList setShowModal={setShowModal}/>
        </div>
    );
};
export default Content;
