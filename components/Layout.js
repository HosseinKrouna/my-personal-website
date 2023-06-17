import Footer from "@/components/Footer";

function Layout({ children }) {
	return (
		<div>
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
