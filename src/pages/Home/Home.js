import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BookShelf from '../../components/BookShelf/BookShelf';

class Home extends Component {
	render() {
		const { shelfs, books } = this.props;
		console.log('Home', this.props);

		return (
			<div className="page page-home">
				<Header title="MyReads" />

				<div className="list-books">
					<div className="list-books-content">
					{
						shelfs.map(shelf => (
							<BookShelf
								key={shelf.title}
								title={shelf.title}
								onMoveBook={this.props.onMoveBook}
								books={books.filter((book) => book.shelf === shelf.id)}
							/>
						))
					}
					</div>

					<Link
						className="open-search"
						to="/search"
					>
						<button>Add a book</button>
					</Link>
				</div>
			</div>
		)
	}
}

export default Home;