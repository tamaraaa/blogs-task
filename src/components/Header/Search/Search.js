import React, { useState } from 'react';
import { connect } from 'react-redux';

import { search } from '../../../redux/actions';

import './Search.scss';

const Search = ({ search, categoryId, setShowSearched }) => {
	const [inputValue, setInputValue] = useState('');
	const handleSearch = e => {
		if (e.key === 'Enter') {
			search(inputValue, categoryId);
            setShowSearched(!!inputValue);
        }       
	};
	return (
		<div className="search">
			<input
				onKeyDown={e => handleSearch(e)}
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
				type="text"
				placeholder="Search"
			/>
		</div>
	);
};
const mapStateToProps = ({ categoryId }) => ({
	categoryId,
});
const mapDispatchToProps = {
	search,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
