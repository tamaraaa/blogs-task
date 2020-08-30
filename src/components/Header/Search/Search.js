import React, {useState} from 'react';
import {connect} from 'react-redux';

import './Search.scss';

const CLASS = 'Search';
const Search = () =>{

    const [inputValue, setInputValue] = useState('');
    console.log(inputValue);
    return (
        <div className={CLASS}>
            <input onChange={(e)=> setInputValue(e.target.value)} value={inputValue} type='text' placeholder="Search"/>
        </div>
    );

};
const mapStateToProps = (state) =>({
    state
});
const mapDispatchToProps = (dispatch) =>({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
