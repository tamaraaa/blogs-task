import React, {useState} from 'react';
import {connect} from 'react-redux';
import {activeCategory, getBlogs} from '../../../redux/actions';

import Blog from './Blog/Blog';

import './BlogList.scss';

const BlogList = ({categories, blogList, setShowModal, categoryId, setShowCategoryModal, activeCategory, getBlogs}) =>{
    const handleAddCategory = () =>{
        setShowCategoryModal(true);
        setShowModal(true);
    };
    const handleCategory = (id) =>{
        getBlogs(categoryId);
        activeCategory(id);
    };
    return (
        <div className='blogList'>
            <div className='blogList__categories'>
                <p>Blog Categories</p>
                <span>
                { categories.length && categories.map( category =>{
                    return <a href='#' onClick={()=>handleCategory(category.id)} key={`${category.id}${category.name}`} className={`blogList__categories__link-${category.id === categoryId ? 'active' : ''}`} id={category.id} >{category.name}</a>;
                })}
                </span>  
                <button onClick={()=>handleAddCategory()}>Add Category</button>       
            </div>
            <div className='blogList__list'>
            { blogList && blogList.map( blog=>(<Blog setShowModal={setShowModal} key={`${blog.id}${blog.title}`} blog={blog}/>))}  
            </div>
        </div>
    );
};
const mapStateToProps = ({categories, blogList, categoryId}) =>({
    categories,
    blogList,
    categoryId
});
const mapDispatchToProps = {
    activeCategory,
    getBlogs
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
