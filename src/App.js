import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import './App.css';

class BooksApp extends Component {
	state = {
		shelfs: [{
			id: 'currentlyReading',
			title: 'Currently Reading'
		},
		{
			id: 'wantToRead',
			title: 'Want to read'
		},
		{
			id: 'read',
			title: 'Read'
		}],
		books: [],
		researchedBooks: []
	}

	componentDidMount() {
		BooksAPI.getAll().then(books => {
			this.setState({ books })
		});
	}

	moveBook = (book, shelf) => {
		this.setState(state => ({
			contacts: state.books.filter(currentBook => {
				if (currentBook.id === book.id && currentBook.shelf !== shelf) {
					currentBook.shelf = shelf;
				}

				return currentBook;
			})
		}));

		BooksAPI.update(book, shelf);
	}

	searchBook = (query) => {
		if (query !== '') {
			setTimeout(() => {
				BooksAPI.search(query).then(res => {
					this.setState({ researchedBooks: res});
				});
			}, 200);
		} else {
			this.setState({ researchedBooks: []});
		}
	}

	render() {
		const { shelfs, books, researchedBooks } = this.state;

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
						researchedBooks={researchedBooks}
						onSearchBook={this.searchBook}
						onMoveBook={this.moveBook}
					/>
				)} />
			</div>
		)
	}
}

export default BooksApp
