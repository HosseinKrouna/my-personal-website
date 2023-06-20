import GlobalStyle from "../styles";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import PageTransition from "@/components/animation/PageTransition";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<GlobalStyle />
			<AnimatePresence mode="wait">
				<PageTransition key={router.route}>
					<Component {...pageProps} />
				</PageTransition>
			</AnimatePresence>
		</>
	);
}
export default MyApp;
