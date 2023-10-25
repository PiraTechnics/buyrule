//import { useState } from "react";
//import { Button } from "flowbite-react";

const Cart = () => {
	//const [openModal, setOpenModal] = useState(true);
	//const [cartItems, setCartItems] = useState(null);

	return (
		<div
			id="drawer-right-example"
			className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
			tabIndex={-1}
			aria-labelledby="drawer-right-label"
		>
			<h5
				id="drawer-right-label"
				className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
			>
				Shopping Cart
			</h5>
			<button
				type="button"
				data-drawer-hide="drawer-right-example"
				aria-controls="drawer-right-example"
				className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
			>
				<svg
					className="w-3 h-3"
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
			<ul className="text-gray-500 dark:text-gray-400">Items will go here!</ul>
			<div className="mt-4 flex flex-row justify-center">
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
