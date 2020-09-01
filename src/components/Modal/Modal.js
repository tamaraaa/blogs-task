import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createPost, createCategory, editPost } from '../../redux/actions';

import './Modal.scss';

const Modal = ({
	showModal,
	setShowModal,
	createPost,
	categoryId,
	categories,
	createCategory,
	currentPost,
	editPost,
	showCategoryModal,
}) => {
	const [title, setTitle] = useState(currentPost.title);
	const [text, setText] = useState(currentPost.text);
	const [categoryTitle, setCatrgoryTitle] = useState('');

	useEffect(() => {
		setTitle(currentPost.title);
		setText(currentPost.text);
	}, [currentPost]);

	const handlePost = () => {
		if (currentPost.isNew) {
			createPost(categoryId, title, text);
		} else {
			editPost(text, title);
		}
		setShowModal(false);
	};
	const handleCategory = () => {
		createCategory(categoryTitle);
		setShowModal(false);
	};
	const handleCancel = () => {
		setShowModal(false);
		setCatrgoryTitle('');
	};
	const isPostDisabled = !text || !title;
	const createCategoryDisabled = !categoryTitle;
	const postTitle = isPostDisabled ? 'Title and text field must not be empty' : '';
	const postModalContent = (
		<>
			<div className="modal__content__title">
				<p>Tiltle</p>
				<input
					placeholder="Title"
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<span className="modal__content__title__required">{!title && '*'}</span>
			</div>
			<div className="modal__content__text">
				<p>Text</p>
				<textarea
					value={text}
					onChange={e => setText(e.target.value)}
					rows="4"
					cols="50"
					placeholder="Text of the post"></textarea>
				<span className="modal__content__text__required">{!text && '*'}</span>
			</div>
		</>
	);
	const categoriesModalContent = (
		<>
			<div className="modal__content__title">
				<p>Category Tiltle</p>
				<input
					placeholder="Title"
					type="text"
					value={categoryTitle}
					onChange={e => setCatrgoryTitle(e.target.value)}
				/>
			</div>
		</>
	);
	const postModal = categories && categories.length && !showCategoryModal;
	const titleToShow = !categories || showCategoryModal ? 'Create Category' : 'Add/Edit blog post';
	return (
		<div className={`modal ${showModal ? 'active' : ''}`}>
			<div className="modal__header">
				<span className="modal__header__title">{titleToShow}</span>
				<span className="modal__header__close" onClick={handleCancel}>
					x
				</span>
			</div>
			<div className="modal__content">
				{postModal ? postModalContent : categoriesModalContent}
			</div>
			<div className="modal__buttons">
				{postModal ? (
					<button
						title={postTitle}
						disabled={isPostDisabled}
						className="modal__buttons__post"
						onClick={handlePost}>
						Post
					</button>
				) : (
					<button
						disabled={createCategoryDisabled}
						className="modal__buttons__post"
						onClick={handleCategory}>
						Create
					</button>
				)}
				<button className="modal__buttons__cancel" onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</div>
	);
};
const mapStateToProps = ({ categoryId, categories, currentPost, isNew }) => ({
	categoryId,
	categories,
	currentPost,
	isNew,
});
const mapDispatchToProps = {
	createPost,
	createCategory,
	editPost,
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
