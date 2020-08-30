import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createPost, createCategory} from '../../redux/actions';

import './Modal.scss';

const CLASS = 'Modal';

const Modal = ({showModal, setShowModal, createPost, categoryId, categories, createCategory}) =>{

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [categoryTitle, setCatrgoryTitle] = useState('');
    
    const handlePost = () =>{
        createPost(categoryId, title, text);
        setShowModal(false);
    };
    const handleCategory = () =>{
        createCategory(categoryTitle);
        setShowModal(false);
    };

    const postModalContent = (
        <>
        <div className={`${CLASS}__content__title`}>
                    <p>Tiltle</p>
                    <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className={`${CLASS}__content__text`}>
                    <p>Text</p>
                    <textarea value={text} onChange={(e)=>setText(e.target.value)} rows="4" cols="50" placeholder='Text of the post'></textarea>
                </div>
        </>
    );
    const categoriesModalContent = (
        <>
        <div className={`${CLASS}__content__title`}>
                    <p>Category Tiltle</p>
                    <input type='text' value={categoryTitle} onChange={(e)=> setCatrgoryTitle(e.target.value)}/>
                </div>
        </>
    );
    const titleToShow = !categories ? 'Create Category':'Add/Edit blog post';
    return (
        <div className={`${CLASS} ${showModal ? 'active': ''}`}>
            <div className={`${CLASS}__header`}>
                <span className={`${CLASS}__header__title`}>{titleToShow}</span>
                <span className={`${CLASS}__header__CLOSE`}> x </span>
            </div>
            <div className={`${CLASS}__content`}>
                {categories.length ? postModalContent : categoriesModalContent }
            </div>
            <div className={`${CLASS}__buttons`}>
                {categories.length ? <button className={`${CLASS}-buttons-post`} onClick={()=>handlePost()}>Post</button> : <button className={`${CLASS}-buttons-post`} onClick={()=>handleCategory()}>Create</button>}
                <button className={`${CLASS}-buttons-cancel`} onClick={()=> setShowModal(false)}>Cancel</button>
            </div>

        </div>
    );
};
const mapStateToProps = ({categoryId, categories}) =>({
    categoryId,
    categories
});
const mapDispatchToProps = {
    createPost: (categoryId, title, text) => (createPost(categoryId, title, text)),
    createCategory: categoryTitle => (createCategory(categoryTitle))
  };
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
