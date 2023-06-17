import Navbar from "@/components/Navbar";
import styled from "styled-components";

export default function HomePage() {
	return (
		<AppContainer>
			<StyledNavbar />
			<MainContent>
				<Header>Hossein Krouna</Header>
				<TitleHomePage>Frontend-developer</TitleHomePage>
			</MainContent>
		</AppContainer>
	);
}

const StyledNavbar = styled(Navbar)``;

const TitleHomePage = styled.p`
	font-size: 20px;
	font-weight: 10px;
	color: white;
	text-align: center;
`;

const Header = styled.header`
	font-size: 70px;
	font-weight: 50px;
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
