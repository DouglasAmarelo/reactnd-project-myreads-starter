import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

class BooksApp extends Component {
	state = {
		shelfs: [
			{ id: 'currentlyReading', title: 'Currently Reading' },
			{ id: 'wantToRead', title: 'Want to read' },
			{ id: 'read', title: 'Read' }
		],
		books: [],
		researchedBooks: [],
		searchTerm: ''
	};

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({ books });
		});
	};

	moveBook = (book, shelf) => {
		const filterCurrentBook = currentBook => {
			if (currentBook.id === book.id && currentBook.shelf !== shelf) {
				currentBook.shelf = shelf;
			}

			return currentBook;
		};

		this.setState(state => {
			const hasBookInState = state.books.some(currentBook => currentBook.id === book.id);

			if (!hasBookInState) {
				book.shelf = shelf;
				const books = state.books.concat(book);
				return { books };
			} else {
				const books = state.books.filter(filterCurrentBook);
				return { books };
			}
		});

		this.setState(state => ({ researchedBooks: state.researchedBooks.filter(filterCurrentBook) }));

		BooksAPI.update(book, shelf);
	};

	searchBook = query => {
		if (!query || query === '') {
			this.setState({ researchedBooks: [] });
			return;
		}

		this.setState({ searchTerm: query });

		setTimeout(() => {
			BooksAPI.search(query.trim()).then(res => {
				if (res.error) {
					this.setState({ researchedBooks: [] });
					return;
				}

				this.setState({ researchedBooks: res });
				this.identifyUserBooks();
			});
		}, 300);
	};

	identifyUserBooks = () => {
		this.setState(state => ({
			researchedBooks: state.researchedBooks.map(book => {
				const userBook = state.books.find(uBook => uBook.id === book.id);

				if (userBook) {
					book.shelf = userBook.shelf;
				} else {
					book.shelf = 'researchedBooks';
				}

				return book;
			})
		}));
	};

	render() {
		const { shelfs, books, researchedBooks, searchTerm } = this.state;

		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<Home
						shelfs={shelfs}
						books={books}
						onMoveBook={this.moveBook}
					/>
				)} />

				<Route path="/search" render={() => (
					<Search
						shelfs={shelfs}
						searchTerm={searchTerm}
						researchedBooks={researchedBooks}
						onSearchBook={this.searchBook}
						onMoveBook={this.moveBook}
					/>
				)} />
			</div>
		);
	};
};

export default BooksApp
