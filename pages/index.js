import Layout from "@/components/Layout";
import Image from "next/image";
import styled from "styled-components";

export default function HomePage() {
	return (
		<Layout>
			<h1>Welcome to My Personal Website!</h1>
			<MainImage
				src="/images/rafael-leao-PzmmiWoJHA8-unsplash.jpg"
				alt="Picture in the sunset with a surfer"
				width={1000}
				height={200}
				layout="responsive"
			/>
		</Layout>
	);
}

const MainImage = styled(Image)``;
