/**
 * @File   : about.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 3:17:20 PM
 */

import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

interface PageProps {

}

const Page: NextPage<PageProps> = props => {
	return (<>
		<style jsx>{`
			.container {
				
			}
		`}</style>
		<div className={"container"}>
			<span>{"Hello, about!"}</span>
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

