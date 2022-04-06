/**
 * @File   : index.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 1:42:00 PM
 */

import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Hero } from "../components/hero";
import { Product } from "../components/product";
import { TPColor } from "../components/style-vars";

interface PageProps {

}

const Page: NextPage<PageProps> = props => {
	return (<>
		<style jsx>{`
			section {
				width: 100vw;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			.img-back {
				background-image: url("/background.jpeg");
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
				background-attachment: fixed;
				position: relative;
				height: 100vh;
			}
			.backdrop-container {
				position: absolute;
				width: 100vw;
				height: 100vh;
				min-height: 800px;
				top: 0;
				z-index: 2;
				background: rgba(255, 255, 255, 0.6);
				backdrop-filter: blur(2px);
				padding-top: 84px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
			.backdrop-child {
				width: 40%;
				max-width: 720px;
				margin: 64px;
			}
			.backdrop-child img {
				width: 100%;
			}
			.backdrop-child h1 {
				font-family: 'Roboto Slab', serif;
				font-weight: 900;
				font-size: 72px;
			}
			.erica-laura {
				margin-bottom: 16px;
				border-radius: 5%;
			}
			.btn {
				color: white;
				background: ${TPColor.PINK};
				font-weight: bold;
				font-size: 32px;
				padding: 8px 16px;
				margin-top: 32px;
				display: inline-block;
				transition: 250ms ease-in-out;
				box-shadow: 0 0 8px #aaa;
				user-select: none;
			}
			.btn:hover {
				transform: scale(1.25);
				border-radius: 8px;
				cursor: pointer;
			}
			.products {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: stretch;
				padding: 32px;
			}
			.heroes {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				padding: 64px 32px;
				background-image: url("commercial.jpeg");
				background-repeat: no-repeat;
				background-position: top;
				background-size: cover;
				background-attachment: fixed;
			}
		`}</style>
		<div className={"container"}>
			<section className="img-back">
				<div className="backdrop-container">
					<div className="backdrop-child">
						<img className="erica-laura" src="erica-laura.png" alt="home" />
						<img src="tp.png" alt="home" />
					</div>
					<div className="backdrop-child">
						<h1>Commercial, Investment, and Residential Real Estate Solutions</h1>
						<span className="btn">Learn More</span>
					</div>
				</div>
			</section>
			<section className="products">
				<Product title="Residential" img="home.svg" />
				<Product title="Investment" img="commercial.svg" />
				<Product title="Commercial" img="invest.svg" />
			</section>
			<section className="heroes">
				<Hero name="Erica Slater" email="erica" bio="" headshot="erica.png" />
				<Hero name="Laura Cobb" email="laura" bio="" headshot="laura.png" />
			</section>
		</div>
	</>)
}

// export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

// export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: false
// 	};
// }

export default Page;

