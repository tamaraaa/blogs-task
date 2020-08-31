import React, {useState} from 'react';
import {connect} from 'react-redux';
import {activeCategory, getBlogs} from '../../../redux/actions';

import Blog from './Blog/Blog';

import './BlogList.scss';

const BlogList = ({categories, blogList, setShowModal, categoryId, setShowCategoryModal, activeCategory, getBlogs, showSearched, setShowSearched}) =>{

    const handleAddCategory = () =>{
        setShowCategoryModal(true);
        setShowModal(true);
    };
    const handleCategory = (id) =>{
        activeCategory(id);
        getBlogs(id);
    };
    return (
        <div className='blogList'>
            {!showSearched && <div className='blogList__categories'>
                <p>Blog Categories</p>
                <span>
                { categories.length && categories.map( category =>{
                    return <a href='#' onClick={()=>handleCategory(category.id)} key={`${category.id}${category.name}`} className={`blogList__categories__link-${category.id === categoryId ? 'active' : ''}`} id={category.id} >{category.name}</a>;
                })}
                </span>  
                <button onClick={()=>handleAddCategory()}>Add Category</button>       
            </div>}
            <div className='blogList__list'>
            {showSearched && <p>Search results for all categories <a href='#' onClick={()=>setShowSearched(false)}>back</a></p>}
            { blogList && blogList.map( blog=>(<Blog setShowModal={setShowModal} key={`${blog.id}${blog.title}`} blog={blog}/>))}  
            {!blogList.length && <p className='blogList__list__empty'>No posts to show :(</p>}
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
