import { Link } from "react-router-dom";
import Brand from "./Brand";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    /* 		<nav className="bg-sky-600 w-screen py-2 mb-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex items-center justify-between">
			<Brand />
			<div id="navbar-menu" className="flex gap-4 text-lg font-hylia">
				<Link to="/" className="text-white hover:text-yellow-200">
					Home
				</Link>
				<Link to="/shop" className="text-white hover:text-yellow-200">
					Shopping
				</Link>
			</div>
		</nav> */
    /* 		<Navbar fluid className="bg-sky-600 w-screen py-2 mb-4">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between">
					<Navbar.Brand>
						<Brand />
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<div id="navbar-menu" className="flex gap-4 text-lg font-hylia">
							<Link to="/" className="text-white hover:text-yellow-200">
								Home
							</Link>
							<Link to="/shop" className="text-white hover:text-yellow-200">
								Shopping
							</Link>
						</div>
					</Navbar.Collapse>
				</div>
			</div>
		</Navbar> */
    <div className="w-screen bg-sky-600">
      <Navbar className="bg-sky-600 py-2 mb-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative flex justify-between">
        <Brand />
        <Navbar.Toggle className="sm:hidden mx-6 bg-white hover:bg-slate-300 hover:text-slate-700 focus:ring-none hover:border-amber-300" />
        <Navbar.Collapse className="sm:block sm:w-auto">
          <div
            id="navbar-menu"
            className="flex flex-row max-sm:flex-col max-sm:text-center gap-4 max-sm:gap-0 max-sm:me-4 max-sm:border-t text-lg font-hylia"
          >
            <Link
              to="/"
              className="text-white hover:text-yellow-200 max-sm:hover:bg-sky-800 py-2"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-white hover:text-yellow-200 max-sm:hover:bg-sky-800 py-2"
            >
              Shopping
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
