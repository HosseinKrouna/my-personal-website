import Layout from "@/components/Layout";
import Image from "next/image";
export default function HomePage() {
	return (
		<Layout>
			<h1>Welcome to My Personal Website!</h1>
			<Image
				src="/public/images/rafael-leao-PzmmiWoJHA8-unsplash.jpg"
				alt="Picture in the sunset with a surfer"
				width={100}
				height={100}
			/>
		</Layout>
	);
}
