import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
	MdAdd,
	MdRemove,
	MdDeleteForever,
	MdKeyboardBackspace,
} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import semImagem from '../../assets/images/no-image.jpg';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateAmount, total }) {
	function increment(product) {
		updateAmount(product.id, product.amount + 1);
	}

	function decrement(product) {
		updateAmount(product.id, product.amount - 1);
	}

	return (
		<Container>
			<ProductTable>
				<Link to="/">
					<MdKeyboardBackspace size={25} color="#276955" />
				</Link>
				<thead>
					<tr>
						<th />
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{cart.map((product) => (
						<tr key={product.id}>
							<td>
								<img
									src={product.image || semImagem}
									alt={product.name}
								/>
							</td>
							<td>
								<strong>{product.name}</strong>
								<span>{product.valueUnit}</span>
							</td>
							<td>
								<div>
									<button
										type="button"
										onClick={() => decrement(product)}
									>
										<MdRemove size={25} color="#276955" />
									</button>
									<input
										type="number"
										readOnly
										value={product.amount}
									/>
									<button
										type="button"
										onClick={() => increment(product)}
									>
										<MdAdd size={25} color="#276955" />
									</button>
								</div>
							</td>
							<td>
								<strong>{product.subtotal}</strong>
							</td>
							<td>
								<button
									type="button"
									onClick={() => removeFromCart(product.id)}
								>
									<MdDeleteForever
										size={25}
										color="#276955"
									/>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar Pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>{total}</strong>
				</Total>
			</footer>
		</Container>
	);
}
const mapStateToProps = (state) => ({
	cart: state.cart.map((product) => ({
		...product,
		valueUnit: formatPrice(
			product.on_sale === true
				? product.actual_price
				: product.regular_price
		),

		subtotal: formatPrice(
			product.on_sale === true
				? product.actual_price * product.amount
				: product.regular_price * product.amount
		),
	})),
	total: formatPrice(
		state.cart.reduce((total, product) => {
			return product.on_sale === true
				? total + product.actual_price * product.amount
				: total + product.regular_price * product.amount;
		}, 0)
	),
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
