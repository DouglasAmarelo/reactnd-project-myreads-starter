import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {
		const { title } = this.props;

		return (
			<header className="header">
				<h1 className="header__title">
					{title}
				</h1>
			</header>
		);
	};
};

export default Header;