import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Image from "next/image";
import OvalShapeNavigation from "./OvalShapeNavigation";
import { Grid } from "@mui/material";

function Layout({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		function handleResize() {
			setIsSmallScreen(window.innerWidth <= 768);
		}

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	function handleNavbarIconClick() {
		setSidebarOpen(!sidebarOpen);
	}

	function handleSidebarClose() {
		setSidebarOpen(false);
	}

	return (
		<>
			<Container>
				<Grid container>
					<Grid
						item
						xs={12}
						style={{ display: "flex", justifyContent: "flex-end" }}
					>
						<NavbarIcon
							src={"/icons/navbar-icon.png"}
							alt="Navbar Icon"
							width={50}
							height={50}
							onClick={handleNavbarIconClick}
						/>
						<Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
					</Grid>
					<Grid
						item
						xs={12}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100vh",
						}}
					>
						<MainContent>{children}</MainContent>
					</Grid>
					{isSmallScreen && (
						<Grid
							item
							xs={12}
							style={{ display: "flex", justifyContent: "flex-end" }}
						>
							<OvalShapeNavigation />
						</Grid>
					)}
				</Grid>
			</Container>
			<Footer />
		</>
	);
}

const Container = styled.div`
	position: relative;
	height: 100vh;
`;

const NavbarIcon = styled(Image)`
	position: absolute;
	top: 17px;
	right: 8px;
	cursor: pointer;
`;

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* height: 100%; */
`;

export default Layout;
