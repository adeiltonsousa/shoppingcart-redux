import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 40px;
	list-style: none;

	li {
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 4px;
		padding: 20px;

		> div {
			img {
				width: 80px;
				margin-bottom: -60px;
				right: 0;
				z-index: 0;
			}
		}

		img {
			align-self: center;
			max-width: 250px;
		}

		> strong {
			font-size: 16px;
			line-height: 20px;
			color: #333;
			margin-top: 5px;
		}

		> span {
			font-size: 19px;
			font-weight: bold;
			margin: 5px 0 20px;
			color: #333;
			margin: 20px 0;

			div {
				p {
					font-size: 19px;
					font-weight: bold;
					text-decoration: line-through;
					color: #808080;
				}

				span {
					font-size: 19px;

					p {
						color: red;
						margin: 5px 0;
						text-decoration: none;
						font-size: 13px;
					}
				}
			}
		}

		> div {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 15px;

			select {
				font-size: 13px;
				padding: 3px;

				option {
					background: #dcdcdc;
					padding: 3px;
				}
			}
		}

		button {
			background: #276955;
			color: #fff;
			border: 0;
			border-radius: 4px;
			overflow: hidden;
			margin-top: auto;

			display: flex;
			align-items: center;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.09, '#276955')};
			}

			div {
				display: flex;
				align-items: center;
				padding: 12px;
				background: rgba(0, 0, 0, 0.1);

				svg {
					margin-right: 5px;
				}
			}

			span {
				flex: 1;
				text-align: center;
				font-weight: bold;
			}
		}
	}
`;
