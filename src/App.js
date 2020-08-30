import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { getBlogs, getCategories } from './redux/actions';

import Header from './components/Header/Header';
import Content from './components/Content/Content.js';
import Modal from './components/Modal/Modal';

import zeroStateImg from './images/zero-state.svg';

import './App.scss';

const CLASS = 'App';
function App({getBlogs, categoryId, getCategories, categories}) {

  useEffect(()=>{
    getCategories();
    getBlogs(categoryId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={CLASS}>
        <Header />
        {categories.length ? 
          <Content setShowModal={setShowModal} /> :   
          <div className={`${CLASS}__zero-state`}>
            <img src={zeroStateImg}/>
            <p>Currently there are no categories. To start creating click <a href='#'>here </a></p>
          </div>
        }
        <Modal setShowModal={setShowModal} showModal={showModal}/>
    </div>
  );
}
const mapStateToProps = ({categoryId, categories}) =>({
  categoryId,
  categories
});
const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
	getBlogs: categoryId => dispatch(getBlogs(categoryId))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
