import React from 'react';
import { connect } from 'react-redux';

import avatar1 from '../../../../images/avatars/avatar1.jpg';

import { deletePost, setCurrnetPost } from '../../../../redux/actions';
import {formatDate} from './utils';
import './Blog.scss';

const Blog = ({blog, deletePost, categoryId, setCurrnetPost, setShowModal, }) =>{
    const postedDate = (<p>Posted date {formatDate(blog.createdAt).date} at {formatDate(blog.createdAt).time} </p>);
    const placeholder = Array(3).fill('https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg');
    const handleEdit = () =>{
        setShowModal(true);
        setCurrnetPost(blog);
    };
    return (
        <div className='blog'>
            <div className='blog__header'>
                <span className='blog__header__left'>
                <img className='blog__header__left__img' src={avatar1} alt='avatar'/> 
                <span className='blog__header__left__text' >
                <p className='blog__header__left__text__title'>{blog.title}</p>
                {postedDate}
                </span>
                </span>
                <span className='blog__header__buttons'>
                    <button className='blog__header__buttons__edit' onClick={()=> handleEdit()}>Edit</button>
                    <button className='blog__header__buttons__delete' onClick={()=>deletePost(blog.id, categoryId)}>Delete</button>
                </span>
            </div>
            <div className='blog__body'>{blog.text}</div>
            <div className='blog__images'>
                {placeholder.map((item, index) => <img className='blog__images__image' key={index} src={item}/>)}
            </div>
       </div>
    );
};
const mapStateToProps = ({categoryId, currnetPost}) =>({
    categoryId,
    currnetPost,
});
const mapDispatchToProps = {
    deletePost,
    setCurrnetPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
