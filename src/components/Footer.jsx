import Brand from "./Brand";

const Footer = () => {
	return (
		<footer className="my-16">
			<nav className="bg-sky-600 w-screen">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex justify-center gap-16">
						<Brand />
						<div className="text-sm font-hylia self-end">
							© Devin Younge {new Date().getFullYear()}
						</div>
					</div>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
