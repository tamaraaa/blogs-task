import React from 'react';
import { connect } from 'react-redux';

import { setCurrnetPost } from '../../../redux/actions';

import Notification from './Notification/Notification.js';

import './AddBlog.scss';

const AddBlog = ({ setShowModal, setCurrnetPost, setShowCategoryModal, notification }) => {
	const handleAddBlog = () => {
		setShowCategoryModal(false);
		setShowModal(true);
		setCurrnetPost({ title: '', text: '', isNew: true });
	};
	return (
		<div className="addBlog">
			{notification && <Notification />}
			<button className="addBlog__button" onClick={handleAddBlog}>
				Add Post
			</button>
		</div>
	);
};
const mapDispatchToProps = {
	setCurrnetPost,
};
const mapStateToProps = ({ notification }) => ({
	notification,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);
