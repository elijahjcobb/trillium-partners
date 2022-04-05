/**
 * @File   : index.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 1:42:00 PM
 */

import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface PageProps {

}

const Page: NextPage<PageProps> = props => {
	return (<>
		<style jsx>{`
			.background {
				background-image: url("/background.jpeg");
				width: 100vw;
				height: 100vh;
				top: 0;
				left: 0;
				background-size: cover;
				background-repeat: no-repeat;
				position: absolute;
			}
			.container {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100vw;
				height: 100vh;
			}
			.floater {
				width: 80%;
				background: rgba(255, 255, 255, 0.5);
				z-index: 2;
				backdrop-filter: blur(16px);
				padding: 32px;
				border-radius: 32px;
				box-shadow: 0 0 16px black;
			}
		`}</style>
		<div className={"container"}>
			<div className="background" />
			<div className="floater">
				<span>{"Hello, Page!"}</span>
				<img src="home.svg" alt="home" />
			</div>
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

