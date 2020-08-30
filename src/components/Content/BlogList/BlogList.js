import React, {useState} from 'react';
import {connect} from 'react-redux';

import Blog from './Blog/Blog';

import './BlogList.scss';

const CLASS = 'BlogList';
const BlogList = ({categories, blogList}) =>{
    return (
        <div className={CLASS}>
            <div className={`${CLASS}__categories`}>
                <p>Blog Categories</p>
                <span>
                { categories && categories.map((category, index)=>{
                    return (<a href='#' key={`${category.id}${category.name}`} id={category.id} className={`${CLASS}__categories__link`}>{category.name}</a>);
                })} 
                </span>             
            </div>
            <div className={`${CLASS}__list`}>
            { blogList && blogList.map((blog, index)=>{
                    return (<Blog key={`${blog.id}${blog.title}`} blog={blog}/>);
                })}  
            </div>
        </div>
    );
};
const mapStateToProps = ({categories, blogList}) =>({
    categories,
    blogList
});
export default connect(mapStateToProps, null)(BlogList);
