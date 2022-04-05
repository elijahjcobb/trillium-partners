/* eslint-disable @next/next/no-img-element */

/**
 * @File   : nav-bar.tsx
 * @Author : Elijah Cobb (elijah@elijahcobb.com)
 * @Link   : github.com/elijahjcobb
 * @Date   : 4/5/2022, 1:52:14 PM
 */

import { FC } from "react";
import { TPColor } from "./style-vars";
import Link from "next/link";
import { link } from "fs";

const links: { name?: string, link: string }[] = [
	{ link: "", name: "home" },
	{ link: "about" },
	{ link: "team" },
	{ link: "contact" },
]

export const NavBar: FC = () => {
	return (<>
		<style jsx>{`
			nav {
				--scale: 1;
				padding: 0 calc(8px * var(--scale));
				box-shadow: 0 0 calc(8px * var(--scale)) #eee;
				margin-bottom: calc(8px * var(--scale));
				z-index: 2;
				position: fixed;
				width: 100vw;
				top: 0;
				background: white;
			}
			ul {
				list-style: none;
				background: var(--cool);
			}
			nav, ul {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.logo {
				width: calc(90px * var(--scale));
				padding: calc(8px * var(--scale)) 0;
			}
			.link {
				font-family: 'Nanum Myeongjo', serif;
				font-weight: bold;
				font-size: calc(0.85em + (.25em * var(--scale)));
				padding: calc(8px * var(--scale));
				color: black;
				text-decoration: none;
			}
			.logo, .link {
				display: block;
				transition: 250ms ease-in-out;
			}
			.link:hover, .logo:hover {
				transform: scale(1.05);
				cursor: pointer;
				color: ${TPColor.PINK}
			}
			@media(min-width: 480px) {
				nav {
					--scale: 1.25
				}
			}
			@media(min-width: 720px) {
				nav {
					--scale: 1.75
				}
			}
		`}</style>
		<nav>
			<Link href={"/"}><a><img className="logo" src={"/tp.png"} alt="logo" /></a></Link>
			<ul>
				{links.map((url, i) => {
					return <li key={i}><Link href={"/" + url.link}><a className="link">{url.name ?? url.link}</a></Link></li>
				})}
			</ul>
		</nav>
	</>);
};
