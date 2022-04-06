/**
 * @File   : footer.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/6/2022, 11:58:46 AM
 */

import { FC } from 'react';
import { TPColor } from './style-vars';

export interface FooterProps {

}

export const Footer: FC<FooterProps> = props => {
	return (<>
		<style jsx>{`
			.container {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 32px;
				color: ${TPColor.PINK};
				background-color: white;
			}

			.container img {
				width: 80%;
				max-width: 200px;
			}
		`}</style>
		<div className={"container"}>
			<img src="tp.png" />
		</div>
	</>);
};
