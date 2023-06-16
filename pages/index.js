import Layout from "@/components/Layout";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function HomePage() {
	return (
		<AppContainer>
			<GlobalStyle />
			<Layout>
				<MainContent>
					<Header>Hossein Krouna</Header>
					<p>Frontend-developer</p>
				</MainContent>
			</Layout>
		</AppContainer>
	);
}

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	padding: 0;
	overflow: hidden;
}
`;

const Header = styled.header``;
const MainContent = styled.div``;

const AppContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	@media (max-width: 768px) {
		background-color: black;
	}
	@media (min-width: 768px) {
		background-image: url("/images/rafael-leao-PzmmiWoJHA8-unsplash.jpg");
		background-size: cover;
		background-position: center center;
	}
	overflow: hidden;
`;
