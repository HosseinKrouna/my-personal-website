import Link from "next/link";
import styled from "styled-components";

function Navbar() {
	return (
		<nav>
			<NavbarLinks>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
			</NavbarLinks>
		</nav>
	);
}

const NavbarLinks = styled.ul``;

export default Navbar;
