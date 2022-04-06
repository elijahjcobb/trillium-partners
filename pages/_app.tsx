import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/nav-bar'
import Head from 'next/head';
import { Footer } from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>The Trillium Partners</title>
			<meta name="theme-color" content="#fff" />
			<link rel="icon" href="/icon.svg" type="image/svg+xml" />
		</Head>
		<NavBar />
		<Component {...pageProps} />
		<Footer />
	</>
}

export default MyApp
