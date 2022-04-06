/**
 * @File   : product.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 8:13:26 PM
 */

import { FC } from 'react';

export interface ProductProps {
	title: string;
	img: string;
}

export const Product: FC<ProductProps> = props => {
	return (<>
		<style jsx>{`
			.container {
				width: 80%;
				max-height: 320px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;
				margin: 16px;
				background: #f8f8f8;
				padding: 16px;
				border-radius: 16px;
			}
			.img {
				width: 100%;
				margin: auto;
				max-height: 200px;
			}
			span {
				font-weight: bold;
				font-size: 18px;
				margin-top: 16px;
			}
		`}</style>
		<div className={"container"}>
			<img className='img' src={props.img} alt="product" />
			<span>{props.title}</span>
		</div>
	</>);
};
