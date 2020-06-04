import React from 'react';
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
	return (
		<Container>
			<ProductTable>
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
					<tr>
						<td>
							<img
								src="https://static.netshoes.com.br/produtos/tenis-olympikus-blend-masculino/06/D22-2924-206/D22-2924-206_zoom1.jpg?ts=1589968694&ims=544x"
								alt="Tênis"
							/>
						</td>
						<td>
							<strong>Desc. do Produto</strong>
							<span>R$ 156,89</span>
						</td>
						<td>
							<div>
								<button type="button">
									<MdAddCircleOutline
										sixe={20}
										color="SpringGreen"
									/>
								</button>
								<input type="number" readOnly value={1} />
								<button type="button">
									<MdRemoveCircleOutline
										sixe={20}
										color="SpringGreen"
									/>
								</button>
							</div>
						</td>
						<td>
							<strong>R$ 258,80</strong>
						</td>
						<td>
							<button type="button">
								<MdDelete sixe={20} color="SpringGreen" />
							</button>
						</td>
					</tr>
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar Pedido</button>

				<Total>
					<span>TOTAL</span>
					<strong>R$ 1956,34</strong>
				</Total>
			</footer>
		</Container>
	);
}
