/**
 * @File   : backdrop.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/6/2022, 10:58:50 AM
 */

import { FC } from 'react';
import { TPColor } from './style-vars';

export interface BackdropProps {

}

export const Backdrop: FC<BackdropProps> = props => {
	return (<>
		<style jsx>{`
			.container {
				width: 100%;
				display: flex;
				flex-direction: column;
				padding: 16px;
				background-image: url("background.jpeg");
				background-attachment: fixed;
				background-repeat: no-repeat;
				background-size: cover;
				position: center;
				position: relative;
			}
			.backdrop {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: rgba(255, 255, 255, 0.75);
				backdrop-filter: blur(4px);
			}
			.left, .right {
				z-index: 2;
			}
			.headshot, .tp {
				width: 100%;
			}
			.headshot {
				border-radius: 20px;;
			}
			.tp {
				margin: 8px 0;
			}
			.btn {
				margin-top: 8px;
				display: inline-block;
				padding: 8px 16px;
				color: white;
				background: ${TPColor.PINK};
				font-weight: bold;
				font-size: 1.25em;
			}
			@media (min-width: 720px) {
				.container {
					flex-direction: row-reverse;
					justify-content: center;
					align-items: center;
					padding: 128px 32px;
				}
				.left, .right {
					width: 40%;
					max-width: 480px;
				}
				.left {
					margin-left: 32px;
				}
				.right h1 {
					margin: 32px 0;
				}
			}
		`}</style>
		<div className="container">
			<div className='backdrop' />
			<div className="left">
				<img className="headshot" src="erica-laura.png" alt="home" />
			</div>
			<div className="right">
				<img className='tp' src="tp.png" alt="home" />
				<h1>Commercial, Investment, and Residential Real Estate Solutions</h1>
				<span className="btn">Learn More</span>
			</div>
		</div>
	</>);
};
