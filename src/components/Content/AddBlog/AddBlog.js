import React, { useState } from 'react';
import { connect } from 'react-redux';

import './AddBlog.scss';

const CLASS = 'AddBlog';
const AddBolg = ({setShowModal}) =>{
    return (
        <div className={CLASS}>
            <textarea className={`${CLASS}__textarea`} rows="4" cols="50" placeholder='Type new blog'>
            </textarea>
            <button className={`${CLASS}__button`} onClick={()=> setShowModal(true)}>Add Post</button>  
        </div>
    );
    
};
export default AddBolg;
