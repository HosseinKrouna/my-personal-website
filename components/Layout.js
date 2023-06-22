import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import OvalShapeNavigation from "./OvalShapeNavigation";
import { Grid } from "@mui/material";
import {
	Container,
	NavbarIcon,
	MainContent,
} from "../components/styles/StyledLayout";
import PageTransition from "./animation/PageTransition";
import usePageTransition from "../components/lib/usePageTransition";

function Layout({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	const animation = usePageTransition(["/", "/about", "/projects", "contact"]);

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
		console.log("Navbar Icon clicked");
		setSidebarOpen(!sidebarOpen);
		console.log("sidebarOpen", sidebarOpen);
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
						<MainContent>
							<PageTransition animation={animation}>{children}</PageTransition>
						</MainContent>
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

export default Layout;
