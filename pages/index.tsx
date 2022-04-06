/**
 * @File   : index.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 1:42:00 PM
 */

import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Backdrop } from "../components/backdrop";
import { Hero } from "../components/hero";
import { Heroes } from "../components/heroes";
import { Product } from "../components/product";
import { Products } from "../components/products";
import { TPColor } from "../components/style-vars";

interface PageProps {

}

const Page: NextPage<PageProps> = props => {
	return (<>
		<style jsx>{`
			section {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		`}</style>
		<div className={"container"}>
			<section>
				<Backdrop />
			</section>
			<section>
				<Products />
			</section>
			<section>
				<Heroes />
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

