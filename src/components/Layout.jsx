import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ content }) => {
	return (
		<div className="container bg-amber-50 min-w-full min-h-screen">
			<Header />
			<main>{content}</main>
			<Footer />
		</div>
	);
};

export default Layout;
