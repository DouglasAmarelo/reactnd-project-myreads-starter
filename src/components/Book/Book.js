import React, { Component } from 'react';
import './book.css';
import imageNotFound from '../../images/no-image.jpg';

class Book extends Component {
	render() {
		const { title, authors, imageLinks } = this.props.book;
		const { onMoveBook } = this.props;
		const coverBook = imageLinks ? imageLinks.thumbnail || imageLinks.smallThumbnail : imageNotFound;

		console.log('Book', JSON.stringify(this.props));

		return (
			<li className="books-grid__item">
				<div className="book">
					<div
						className="book-cover"
						style={{
							background: `#ebebeb url(${coverBook}) top center no-repeat`,
							backgroundSize: 'cover',
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