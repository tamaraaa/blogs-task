import React, { useState } from 'react';
import { connect } from 'react-redux';
import {setCurrnetPost} from '../../../redux/actions';

import './AddBlog.scss';

const AddBolg = ({setShowModal, setCurrnetPost, setShowCategoryModal}) =>{
    const handleAddBlog = () =>{
        setShowCategoryModal(false);
        setShowModal(true);
        setCurrnetPost({title: '', text: '', isNew: true});
    };
    return (
        <div className='addBlog'>
            <div className='addBlog__notifications'> </div>          
            <button className='addBlog__button' onClick={()=>handleAddBlog() }>Add Post</button>  
        </div>
    );
    
};
const mapDispatchToProps ={
    setCurrnetPost,
};
export default connect(null, mapDispatchToProps)(AddBolg);
