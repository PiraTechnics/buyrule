import { v4 as uuid } from "uuid";
import { useSessionStorage } from "@uidotdev/usehooks";
import RupeeIcon from "../assets/BotW_Green_Rupee_Icon.png";

const Cart = () => {
	const [cartItems, setCartItems] = useSessionStorage("cart", []);
	const [runningTotal, setRunningTotal] = useSessionStorage("total", 0);

	return (
		<div
			id="shopping-cart-sidebar"
			className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
			tabIndex={-1}
			aria-labelledby="shopping-cart-sidebar-label"
		>
			<div
				id="shopping-cart-sidebar-header"
				className="flex flex-row justify-between border-b-2 mb-2"
			>
				<h5
					id="shopping-cart-sidebar-label"
					className="inline-flex items-center mb-1 text-2xl font-hylia text-gray-500 dark:text-gray-400"
				>
					Shopping Cart
				</h5>
				<button
					type="button"
					data-drawer-hide="shopping-cart-sidebar"
					aria-controls="shopping-cart-sidebar"
					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 absolute top-3 right-3 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
				>
					<svg
						className="w-4 h-4"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
						/>
					</svg>
					<span className="sr-only">Close menu</span>
				</button>
			</div>
			<ul className="text-gray-500 dark:text-gray-400 px-2">
				{cartItems.length > 0 &&
					cartItems.map((item) => {
						return (
							<li key={uuid()}>
								<span className="font-bold capitalize">{item.name}</span>{" "}
								<span className="text-sm px-1">x1</span>
								<div className="flex flex-row font-bold">
									<img width={25} src={RupeeIcon} alt="rupee icon" />
									{item.price}
								</div>
							</li>
						);
					})}
			</ul>
			<div className="mt-4 flex flex-row justify-between me-8">
				<div className="text-black text-lg font-bold flex flex-row items-center">
					Total:
					<img width={25} src={RupeeIcon} alt="rupee icon" />
					<p>{runningTotal}</p>
				</div>
				<button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
					Check Out{" "}
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Cart;
