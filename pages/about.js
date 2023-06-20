import Layout from "../components/Layout";
import OvalShapeNavigation from "@/components/OvalShapeNavigation";
import PageTransition from "@/components/animation/PageTransition";

function AboutPage() {
	return (
		<Layout>
			<PageTransition>
				<h1>About Me</h1>
			</PageTransition>
		</Layout>
	);
}

export default AboutPage;
