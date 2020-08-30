import React, {useState} from 'react';
import {connect} from 'react-redux';

import Blog from './Blog/Blog';

import './BlogList.scss';

const BlogList = ({categories, blogList, setShowModal}) =>{
    return (
        <div className='blogList'>
            <div className='blogList__categories'>
                <p>Blog Categories</p>
                <span>
                { categories.length && categories.map( category =>(<a href='#' key={`${category.id}${category.name}`} id={category.id} className='blogList__categories__link'>{category.name}</a>))} 
                </span>             
            </div>
            <div className='blogList__list'>
            { blogList && blogList.map( blog=>(<Blog setShowModal={setShowModal} key={`${blog.id}${blog.title}`} blog={blog}/>))}  
            </div>
        </div>
    );
};
const mapStateToProps = ({categories, blogList}) =>({
    categories,
    blogList
});
export default connect(mapStateToProps, null)(BlogList);
