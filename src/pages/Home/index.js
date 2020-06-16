import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';

import md5 from 'md5';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import semImagem from '../../assets/images/no-image.jpg';
import seloPromocao from '../../assets/images/logo_promocao.png';

import { ProductList } from './styles';

class Home extends Component {
	state = {
		products: [],
		sizeSelect: '',
	};

	async componentDidMount() {
		const response = await api.get();

		const data = response.data.map((product) => ({
			...product,
			id: md5(product.image),
			regular_price: parseFloat(product.regular_price.replace('R$ ', '')),
			actual_price: parseFloat(product.actual_price.replace('R$ ', '')),
			sizeSelect: '',
		}));
		this.setState({ products: data });
	}

	handleAddProduct = (product) => {
		const { addToCart } = this.props;

		addToCart(product);
	};

	render() {
		const { products } = this.state;
		const { amount } = this.props;
		return (
			<ProductList>
				{products.map((product) => (
					<li key={product.id}>
						<div>
							{product.on_sale === true ? (
								<p>
									<img
										src={seloPromocao}
										alt="Selo de Promoção"
									/>
								</p>
							) : (
								''
							)}
						</div>
						<img
							src={product.image || semImagem}
							alt={product.name}
						/>
						<strong>{product.name}</strong>
						<span>
							{product.on_sale === true ? (
								<div>
									<p>R$ {product.regular_price}</p>
									<span>
										<p>
											Desconto: R$
											{product.discount_percentage}
										</p>
										R$ {product.actual_price}
									</span>
								</div>
							) : (
								<span>R$ {product.regular_price}</span>
							)}

							<p>ou {product.installments}</p>
						</span>
						<div>
							Tamanhos:
							<select>
								{product.sizes.map((tamSelect) =>
									tamSelect.available === true ? (
										<option
											key={tamSelect.size}
											value={tamSelect.size}
										>
											{tamSelect.size}
										</option>
									) : (
										''
									)
								)}
							</select>
						</div>
						<button
							type="button"
							onClick={() => this.handleAddProduct(product)}
						>
							<div>
								<MdShoppingCart size={16} color="#FFF" />
								{amount[product.id] || 0}
							</div>

							<span>ADICIONAR AO CARRINHO</span>
						</button>
					</li>
				))}
			</ProductList>
		);
	}
}

const mapStateToProps = (state) => ({
	amount: state.cart.reduce((amount, product) => {
		amount[product.id] = product.amount;
		return amount;
	}, {}),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
