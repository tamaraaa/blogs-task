import React, { useState } from 'react';
import { connect } from 'react-redux';

import './AddBlog.scss';

const AddBolg = ({setShowModal}) =>{
    return (
        <div className='addBlog'>
            <textarea className='addBlog__textarea' rows="4" cols="50" placeholder='Type new blog'>
            </textarea>
            <button className='addBlog__button' onClick={()=> setShowModal(true)}>Add Post</button>  
        </div>
    );
    
};
export default AddBolg;
