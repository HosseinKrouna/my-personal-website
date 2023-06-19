import styled from "styled-components";
import Layout from "@/components/Layout";

function HomePage() {
	return (
		// <AppContainer>
		<Layout>
			<Header>Hossein Krouna</Header>
			<TitleHomePage>Frontend-developer</TitleHomePage>
		</Layout>
		// </AppContainer>
	);
}

const TitleHomePage = styled.p`
	font-size: 20px;
	color: whitesmoke;
	text-align: center;
`;

const Header = styled.header`
	font-size: 50px;
	color: whitesmoke;
	text-align: center;
`;
// const MainContent = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	height: 100%;
// `;

// const AppContainer = styled.div`
// 	height: 100vh;
// 	width: 100vw;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	position: relative;
// 	justify-content: center;
// 	overflow: hidden;
// `;

export default HomePage;
