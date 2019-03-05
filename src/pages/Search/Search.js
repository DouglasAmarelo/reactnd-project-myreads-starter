import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResult from '../../components/SearchResult/SearchResult';

class Search extends Component {
	render() {
		const { researchedBooks } = this.props;
		console.log('Search', this.props);

		return (
			<div className="page page-search">
				<Header title="Search a book" />

				<SearchForm
					onSearchBook={this.props.onSearchBook}
				/>

				<div className="list-books">
					<div className="list-books-content">
						<SearchResult
							researchedBooks={researchedBooks}
							onMoveBook={this.props.onMoveBook}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default Search;