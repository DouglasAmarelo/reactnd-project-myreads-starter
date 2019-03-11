import React, { Component } from 'react';
import './search-result.css';
import BookShelf from '../BookShelf/BookShelf';

class SearchResult extends Component {
	state = {
		searchTerms: [
			'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
		]
	};

	render() {
		const { shelfs, researchedBooks, onSearchBook } = this.props;

		return (
			<div>
				<div className="search-terms">
					{this.state.searchTerms.map(term => (
						<span
							key={term}
							onClick={e => onSearchBook(e.target.textContent)}
						>
							{term}
						</span>
					))}
				</div>

				<BookShelf
					shelfs={shelfs}
					books={researchedBooks}
					onMoveBook={this.props.onMoveBook}
				/>
			</div>
		);
	};
};

export default SearchResult;