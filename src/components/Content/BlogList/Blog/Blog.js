import React from 'react';

import avatar1 from '../../../../images/avatars/avatar1.jpg';
import avatar2 from '../../../../images/avatars/avatar2.jpg';
import avatar3 from '../../../../images/avatars/avatar3.jpg';

import {formatDate} from './utils';
import './Blog.scss';

const CLASS = 'Blog';

const Blog = ({blog}) =>{
    const images = [avatar1, avatar2, avatar3];
    return (
        <div className={CLASS}>
            <div className={`${CLASS}__header`}>
                <span className={`${CLASS}__header__left`}>
                <img className={`${CLASS}__header__left__img`} src={`${images[Math.floor(Math.random() * images.length)]}`} alt='avatar'/> 
                <p className={`${CLASS}__header__left__title`}>{blog.title}</p>
                <p>Posted date {formatDate(blog.createdAt).date} at {formatDate(blog.createdAt).time} </p>
                </span>
                <span className={`${CLASS}__header__buttons`}>
                    <button className={`${CLASS}__header__buttons__edit`}>Edit</button>
                    <button className={`${CLASS}__header__buttons__delete`}>Delete</button>
                </span>
            </div>
            <div className={`${CLASS}__body`}>{blog.text}</div>
            <div className={`${CLASS}__images`}></div>
       </div>
    );
};
export default Blog;
