const Layout = ({ content }) => {
	return (
		<div className="container bg-amber-50 min-w-full min-h-screen flex flex-col">
			<main className="mt-6 mb-12 grow">{content}</main>
		</div>
	);
};

export default Layout;
