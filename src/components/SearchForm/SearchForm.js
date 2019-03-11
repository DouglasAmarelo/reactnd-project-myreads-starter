import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search-form.css';

class SearchForm extends Component {
	render() {
		const { onSearchBook, searchTerm } = this.props;

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link
						className="close-search"
						to="/"
					>
						Close
					</Link>

					<div className="search-books-input-wrapper">
						<input
							defaultValue={searchTerm}
							type="text"
							placeholder="Search by title or author"
							onChange={e => onSearchBook(e.target.value)}
						/>
					</div>
				</div>
			</div>
		);
	};
};

export default SearchForm;