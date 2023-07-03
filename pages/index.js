import Layout from "@/components/Layout";
import {
	TitleHomePage,
	Header,
	WrapperHomepage,
} from "../components/styles/StyledIndex";

function HomePage() {
	return (
		<Layout>
			<WrapperHomepage>
				<Header>Hossein Krouna</Header>
				<TitleHomePage>Web Developer</TitleHomePage>
			</WrapperHomepage>
		</Layout>
	);
}

export default HomePage;
