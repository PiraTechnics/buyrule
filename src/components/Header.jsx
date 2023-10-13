import Brand from "./Brand";

const Header = () => {
	return (
		<nav className="bg-sky-600 w-screen py-2 mb-4">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between">
					<Brand />
					<div id="navbar-menu" className="flex gap-4 text-lg font-hylia">
						<a href="/" className="text-white">
							Home
						</a>
						<a href="/shopping" className="text-white">
							Shopping
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
