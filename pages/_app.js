import GlobalStyle from "../styles";
import { StrictMode } from "react";

function MyApp({ Component, pageProps }) {
	return (
		<StrictMode>
			<GlobalStyle />
			<Component {...pageProps} />
		</StrictMode>
	);
}

export default MyApp;
