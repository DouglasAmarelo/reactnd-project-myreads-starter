import React, { Component } from 'react';
import './book-shelf.css';
import Book from '../Book/Book';

class BookShelf extends Component {
	render() {
		const { shelfs, title, books } = this.props;

		return (
			<div className="bookshelf">
				<h2 className="bookshelf__title">{title}</h2>

				<ol className="books-grid">
					{this.props.books.length > 0 && (
						books.map(book => (
							<Book
								key={book.id}
								shelfs={shelfs}
								book={book}
								onMoveBook={this.props.onMoveBook}
							/>
						))
					)}
					{this.props.books.length === 0 && (
						<li className="books-grid__empty">
							No books yet.
						</li>
					)}
				</ol>
			</div>
		);
	};
};

export default BookShelf;