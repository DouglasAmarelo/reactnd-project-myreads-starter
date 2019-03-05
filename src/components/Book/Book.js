import React, { Component } from 'react';
import './book.css';

class Book extends Component {
	render() {
		const { title, authors, imageLinks } = this.props.book;
		const { onMoveBook } = this.props;
		const coverBook = imageLinks.thumbnail;

		console.log('Book', this.props);

		return (
			<li className="books-grid__item">
				<div className="book">
					<div
						className="book-cover"
						style={{
							background: `url(${coverBook}) top left no-repeat`,
							backgroundSize: '100%',
						}}
					></div>
					<div className="book-title">{title}</div>
					<div className="book-authors">{authors}</div>

					<div className="book-shelf-changer">
						<select onChange={(e) => onMoveBook(this.props.book, e.target.value)}>
							<option value="move" disabled>Move to...</option>
							<option value="---"></option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
			</li>
		)
	}
}

export default Book;