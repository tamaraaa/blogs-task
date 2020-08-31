import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { getBlogs, getCategories } from './redux/actions';

import Header from './components/Header/Header';
import Content from './components/Content/Content.js';
import Modal from './components/Modal/Modal';

import zeroStateImg from './images/zero-state.svg';

import './App.scss';

const App = ({getBlogs, categoryId, getCategories, categories, isReady}) =>{

  useEffect(()=>{
      getCategories();
      if (categoryId){
        getBlogs(categoryId);
      }
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  
  return (
    <div className='app'>
        <Header />
        {isReady && ((categories && categories.length) ? 
          <Content setShowModal={setShowModal} setShowCategoryModal={setShowCategoryModal}/> :   
          <div className='app__zero-state'>
            <img src={zeroStateImg}/>
            <p>Currently there are no categories. To start creating click <a href='#' onClick={()=> setShowModal(true)}>here </a></p>
          </div>
        )}
        <Modal showCategoryModal={showCategoryModal} setShowModal={setShowModal} showModal={showModal}/>
    </div>
  );
};
const mapStateToProps = ({categoryId, categories, isReady}) =>({
  categoryId,
  categories,
  isReady
});
const mapDispatchToProps = {
  getCategories,
	getBlogs
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
