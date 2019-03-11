import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';

class Search extends Component {
	render() {
		const { shelfs, researchedBooks, onSearchBook, searchTerm } = this.props;

		return (
			<div className="page page-search">
				<Header title="Search a book" />

				<SearchForm
					searchTerm={searchTerm}
					onSearchBook={onSearchBook}
				/>

				<div className="list-books">
					<div className="list-books-content">
						<SearchResult
							shelfs={shelfs}
							researchedBooks={researchedBooks}
							onMoveBook={this.props.onMoveBook}
							onSearchBook={onSearchBook}
						/>
					</div>
				</div>
			</div>
		);
	};
};

export default Search;