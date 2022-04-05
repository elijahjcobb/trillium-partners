import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/nav-bar'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>The Trillium Partners</title>
			<meta name="theme-color" content="#fff" />
		</Head>
		<NavBar />
		<Component {...pageProps} />
	</>
}

export default MyApp
