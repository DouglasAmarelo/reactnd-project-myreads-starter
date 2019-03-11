import React, { Component } from 'react';
import './book.css';
import imageNotFound from '../../images/no-image.jpg';

class Book extends Component {
	render() {
		const { shelfs, onMoveBook } = this.props;
		const book = this.props.book;
		const { title, authors, imageLinks, shelf } = book;
		const coverBook = imageLinks ? imageLinks.thumbnail || imageLinks.smallThumbnail : imageNotFound;

		return (
			<li className="books-grid__item">
				<div className="book">
					<div
						className="book-cover"
						style={{
							background: `#ebebeb url(${coverBook}) top center no-repeat`,
							backgroundSize: 'cover',
						}}
					>
						{
							shelf !== 'researchedBooks' && (
								<div className="book-in-user-list"></div>
							)
						}
					</div>
					<div className="book-title">{title}</div>
					<div className="book-authors">{authors}</div>

					<div className="book-shelf-changer">
						<select onChange={(e) => onMoveBook(book, e.target.value)} defaultValue="move">
							<option value="move" disabled>Move to...</option>
							{
								shelfs.map(item => {
									return shelf !== item.id ? (
										<option key={item.id} value={item.id}>{item.title}</option>
									) : (
										<option disabled key={item.id} value={item.id}>{item.title}</option>
									);
								})
							}
							<option value="none">None</option>
						</select>
					</div>
				</div>
			</li>
		)
	}
}

export default Book;