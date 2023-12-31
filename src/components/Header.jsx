import { Link } from "react-router-dom";
import Brand from "./Brand";
import { Navbar } from "flowbite-react";
import CartIcon from "./CartIcon";
import { useSessionStorage } from "@uidotdev/usehooks";

const Header = () => {
	const [cartItems, setCartItems] = useSessionStorage("cart", []);

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
						{/* drawer init and toggle */}
						<button
							/* className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" */
							className="px-1 py-2.5 mr-2 mb-2 flex flex-row hover:text-yellow-200"
							type="button"
							data-drawer-target="shopping-cart-sidebar"
							data-drawer-show="shopping-cart-sidebar"
							data-drawer-placement="right"
							//data-drawer-backdrop="false"
							aria-controls="shopping-cart-sidebar"
						>
							<CartIcon />
							<span class="w-5 h-5 bg-sky-400 rounded-full flex justify-center items-center text-[.7em] font-sans font-semibold">
								{cartItems.length || 0}
							</span>
						</button>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
