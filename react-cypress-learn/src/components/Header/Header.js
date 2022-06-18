import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useLocation } from "react-router-dom";

const HEADER_ITEMS = [
	{ text: "Main", href: "/" },
	{ text: "Todos", href: "/todos" },
];

const Header = () => {
	const location = useLocation();

	return (
		<header>
			<nav>
				<ul className={styles.linksContainer}>
					{HEADER_ITEMS.map((item) => (
						<li key={item.href}>
							<Link
								to={item.href}
								className={styles.linkItem}
								data-selected={item.href === location.pathname}
							>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default memo(Header);
