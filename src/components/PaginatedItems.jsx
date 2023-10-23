import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Item from "./Item";

const PaginatedItems = ({ items, itemsPerPage }) => {
	const [itemIndex, setItemIndex] = useState(0);

	const endIndex = itemIndex + itemsPerPage;
	//console.log(`loading items from indices ${itemIndex} to ${endIndex}`);

	const currentItems = items.slice(itemIndex, endIndex);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newIndex = (event.selected * itemsPerPage) % items.length;
		/* console.log(
			`User requested page number ${event.selected}, which is offset ${newIndex}. Total number of items: ${items.length}`
		); */
		setItemIndex(newIndex);
	};

	return (
		<>
			<div className="container mx-auto flex flex-col items-center">
				<Items currentItems={currentItems} />
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={1}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
					className="mt-4 mb-1 gap-1 flex flex-row font-medium text-sky-500 [&>li>a]:p-1 [&>li>a]:rounded hover:[&>li>a]:text-yellow-200 hover:[&>li>a]:bg-sky-800 focus:[&>li>a]:bg-sky-600 focus:[&>li>a]:text-white md:gap-2 md:[&>li>a]:p-2"
				/>
				<div className="text-black">
					Showing items {itemIndex == 0 ? 1 : itemIndex}-{endIndex} of{" "}
					{items.length}
				</div>
			</div>
		</>
	);
};

const Items = ({ currentItems }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-black">
			{currentItems &&
				currentItems.map((item) => {
					return <Item key={item.id} data={item} />;
				})}
		</div>
	);
};

export default PaginatedItems;
