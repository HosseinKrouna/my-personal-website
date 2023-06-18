import Sidebar from "@/components/Sidebar";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IconButton, SvgIcon } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function HomePage() {
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
		<AppContainer>
			<NavBarIcon
				src={"/icons/navbar-icon.png"}
				alt="Navbar Icon"
				width={50}
				height={50}
				onClick={handleNavbarIconClick}
			/>
			<MainContent>
				<Header>Hossein Krouna</Header>
				<TitleHomePage>Frontend-developer</TitleHomePage>
			</MainContent>
			{isSmallScreen && (
				<Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
			)}
			<OvalShapeNavigation>
				<IconButtonHover sx={{ color: "white" }}>
					<SvgIcon>
						<ArrowForwardIosIcon />
					</SvgIcon>
				</IconButtonHover>
				<IconButtonHover sx={{ color: "white" }}>
					<SvgIcon>
						<ArrowBackIosNewIcon />
					</SvgIcon>
				</IconButtonHover>
			</OvalShapeNavigation>
		</AppContainer>
	);
}

const IconButtonHover = styled(IconButton)`
	&:hover {
		color: limegreen;
	}
`;

const OvalShapeNavigation = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	width: 50px;
	height: 94px;
	border: 2px solid limegreen;
	border-radius: 40px / 40px;
	background-color: black;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const NavBarIcon = styled(Image)`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
`;

const TitleHomePage = styled.p`
	font-size: 20px;
	color: white;
	text-align: center;
`;

const Header = styled.header`
	font-size: 50px;
	color: white;
	text-align: center;
`;
const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const AppContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	justify-content: center;
	overflow: hidden;
`;

export default HomePage;
