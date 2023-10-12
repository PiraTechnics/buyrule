import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ content }) => {
	return (
		<div className="container">
			<Header />
			<main>{content}</main>
			<Footer />
		</div>
	);
};

export default Layout;
