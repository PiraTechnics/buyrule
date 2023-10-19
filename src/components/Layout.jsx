import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ content }) => {
	return (
		<div className="container bg-amber-50 min-w-full min-h-screen flex flex-col">
			<Header />
			<main className="mt-6 mb-12 grow">{content}</main>
			<Footer />
		</div>
	);
};

export default Layout;
