import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../redux/actions';

import './Modal.scss';

const CLASS = 'Modal';

const Modal = ({showModal, setShowModal, createPost, categoryId}) =>{

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    
    const handlePost = () =>{
        createPost(categoryId, title, text);
        setShowModal(false);
    };
    return (
        <div className={`${CLASS} ${showModal ? 'active': ''}`}>
            <div className={`${CLASS}__header`}>
                <span className={`${CLASS}__header__title`}>Add/Edit blog post</span>
                <span className={`${CLASS}__header__CLOSE`}> x </span>
            </div>
            <div className={`${CLASS}__content`}>
                <div className={`${CLASS}__content__title`}>
                    <p>Tiltle</p>
                    <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className={`${CLASS}__content__text`}>
                    <p>Text</p>
                    <textarea value={text} onChange={(e)=>setText(e.target.value)} rows="4" cols="50" placeholder='Text of the post'></textarea>
                </div>
            </div>
            <div className={`${CLASS}__buttons`}>
                <button className={`${CLASS}-buttons-post`} onClick={()=>handlePost()}>Post</button>
                <button className={`${CLASS}-buttons-cancel`} onClick={()=> setShowModal(false)}>Cancel</button>
            </div>

        </div>
    );
};
const mapStateToProps = ({categoryId}) =>({
    categoryId
});
const mapDispatchToProps = dispatch =>({
    createPost: (categoryId, title, text) => dispatch(createPost(categoryId, title, text))
});
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
