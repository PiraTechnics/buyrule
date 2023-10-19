import { Link } from "react-router-dom";
import Brand from "./Brand";
import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <div className="w-screen bg-sky-600">
      <Navbar className="bg-sky-600 py-2 mx-auto max-w-7xl ps-8 pe-12 relative flex justify-between">
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
