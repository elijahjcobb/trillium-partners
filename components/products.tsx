/**
 * @File   : products.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/6/2022, 10:56:47 AM
 */

import { FC } from 'react';
import { Product } from './product';
import { TPColor } from './style-vars';

export interface ProductsProps {

}

export const Products: FC<ProductsProps> = props => {
	return (<>
		<style jsx>{`
			.container {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				padding: 16px;
				background: white;
			}
			@media (min-width: 720px) {
				.container {
					flex-direction: row;
					align-items: stretch;
					padding: 64px 32px;
				}
			}
		`}</style>
		<div className="container">
			<Product title="Residential" img="home.svg" />
			<Product title="Investment" img="commercial.svg" />
			<Product title="Commercial" img="invest.svg" />
		</div>
	</>);
};
