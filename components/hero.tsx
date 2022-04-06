/**
 * @File   : hero.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 10:53:07 PM
 */

import { FC, useState } from 'react';
import { MdEmail } from "react-icons/md/";

export interface HeroProps {
	name: string;
	email: string;
	bio: string;
	headshot: string;
}

export const Hero: FC<HeroProps> = props => {
	return (<>
		<style jsx>{`
			.container {
				display: flex;
				flex-direction: column;
				width: 30%;
				max-width: 480px;
				align-items: center;
				justify-content: center;
				background-color: rgba(0, 0, 0, 0.75);
				border-radius: 16px;
				padding: 16px;
				box-shadow: 0 0 8px #555;
				color: white;
				backdrop-filter: blur(8px);
			}
			.headshot {
				width: 80%;
				max-height: 400px;
				object-fit: contain;
			}
			.name {
				font-weight: bold;
				font-family: "Roboto Slab", serif;
				font-size: 32px;
				margin: 8px 0;
			}
			.email {
				display: flex;
				align-items: center;
				font-size: 1.5em;
				margin: 8px 0;
			}
			.email span {
				margin-left: 8px;
				font-size: 0.75em;
			}
			.email svg {
				font-size: 1.5em;
			}
		`}</style>
		<div className={"container"}>
			<img className='headshot' src={props.headshot} alt={props.name + " headshot"} />
			<span className='name'>{props.name}</span>
			<a className='email'>
				<MdEmail />
				<span>{props.email + "@trilliumpartners.com"}</span>
			</a>
			<p className='bio'>{props.bio}</p>
		</div>
	</>);
};
