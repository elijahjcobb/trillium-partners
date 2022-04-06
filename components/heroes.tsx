/**
 * @File   : heroes.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/6/2022, 10:57:31 AM
 */

import { FC } from 'react';
import { Hero } from './hero';

export interface HeroesProps {

}

export const Heroes: FC<HeroesProps> = props => {
	return (<>
		<style jsx>{`
			.container {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				padding: 16px;
				background-image: url("commercial.jpeg");
				background-repeat: no-repeat;
				background-position: top;
				background-size: cover;
				background-attachment: fixed;
			}
			@media(min-width: 800px) {
				.container {
					flex-direction: row;
					padding: 64px 32px;
					justify-content: center;
				}
			}
		`}</style>
		<div className="container">
			<Hero name="Erica Slater" email="erica" bio="" headshot="erica.png" />
			<Hero name="Laura Cobb" email="laura" bio="" headshot="laura.png" />
		</div>
	</>);
};
