//import { useState } from "react";
import { Card } from "flowbite-react";
import RupeeIcon from "../assets/BotW_Green_Rupee_Icon.png";

const Item = ({ data }) => {
	return (
		data && (
			<Card imgAlt="" imgSrc={data.image} className="max-w-sm">
				<a href="#">
					<h5 className="text-3xl capitalize font-semibold tracking-tight text-gray-900 dark:text-white">
						{data.name}
					</h5>
				</a>
				<div className="flex items-center">
					<span className="mr-1 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 capitalize">
						{data.category}
					</span>
					<span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
						Available: <span className="text-sm">{data.inventory}</span>
					</span>
				</div>
				<div className=" text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
					{/* <p className="text-sm">{itemData.description}</p> */}
					{data.common_locations ? (
						<p className="mt-2">
							Ships From: {data.common_locations.join(", ")}
						</p>
					) : (
						<p>Local Pickup Only</p>
					)}
				</div>
				<div className="flex items-center justify-between">
					<span className="text-2xl font-bold text-gray-900 dark:text-white flex">
						<img width={40} src={RupeeIcon} alt="rupee icon"></img>
						<span>{data.price}</span>
					</span>
					<a
						className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 hover:text-yellow-200 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
						href="#"
					>
						<p>Add to cart</p>
					</a>
				</div>
			</Card>
		)
	);
};

export default Item;
