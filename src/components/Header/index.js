import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingCart } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

function Header({ cartSize }) {
	return (
		<Container>
			<Link to="/">
				<img src={logo} alt="Logo do Topo" />
			</Link>

			<Cart to="/cart">
				<div>
					<strong>Meu carrinho</strong>
					<span>{cartSize} itens</span>
				</div>
				<MdShoppingCart size={45} color="#276955" />
			</Cart>
		</Container>
	);
}

export default connect((state) => ({
	cartSize: state.cart.length,
}))(Header);
