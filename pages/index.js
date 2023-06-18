import Sidebar from "@/components/Sidebar";
import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { ChevronRight, ChevronLeft } from "@mui/icons-material";

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
			<OvalShapeNavigation>{/* <Triangle /> */}</OvalShapeNavigation>
		</AppContainer>
	);
}

// const Triangle = styled.div`
// 	width: 0;
// 	height: 0;
// 	border-left: 50px solid white;
// 	border-right: 50px solid white;
// 	transform: rotate(45deg);

// 	&:hover {
// 		background-color: limegreen;
// 	}
// `;

// const RightAngle = styled.div`
// 	position: relative;
// 	width: 15px;
// 	height: 15px;
// 	background-color: white;
/* transform: rotate(45deg);
	transition: background-color 0.3s ease; */

/* &:hover {
		background-color: limegreen;
	}
`; */

const LeftAngle = styled.div`
	position: relative;
	width: 15px;
	height: 15px;
	background-color: white;
	/* transform: rotate(-45deg);
	transition: background-color 0.3s ease; */

	&:hover {
		background-color: limegreen;
	}
`;

const OvalShapeNavigation = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
	width: 55px;
	height: 120px;
	border: 2px solid limegreen;
	border-radius: 40px / 40px;
	background-color: black;
	overflow: hidden;
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
