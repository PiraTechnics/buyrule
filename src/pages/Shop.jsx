import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Layout from "../components/Layout";
import Item from "../components/Item";

const ShopPage = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	//Compendium API data fetch
	useEffect(() => {
		fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/all`)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response;
			})
			.then((res) => res.json())
			.then((data) => {
				setData(shuffleItems(filterItems(data.data)));
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	if (error) {
		return <Layout>content={<div>Error! {error.message}</div>}</Layout>;
	} else if (loading) {
		return <Layout>content={<div>Loading...</div>}</Layout>;
	} else {
		//return our desired content
		return (
			<Layout
				content={<PaginatedItems items={data} itemsPerPage={25} />}
			></Layout>
		);
	}
};

export default ShopPage;

const Items = ({ currentItems }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-black">
			{currentItems &&
				currentItems.map((item) => {
					/* return <Item key={item.id} entryName={item.name} />; */
					return <Item key={item.id} data={item} />;
				})}
		</div>
	);
};

const PaginatedItems = ({ items, itemsPerPage }) => {
	const [itemIndex, setItemIndex] = useState(0);

	const endIndex = itemIndex + itemsPerPage;
	console.log(`loading items from indices ${itemIndex} to ${endIndex}`);

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

//Utility Functions for sort, filter, shuffle
const shuffleItems = (itemArray) => {
	//Shuffle using Fisher-Yates
	let currIdx = itemArray.length;
	let randIdx;

	while (currIdx > 0) {
		randIdx = Math.floor(Math.random() * currIdx);
		currIdx--;

		[itemArray[currIdx], itemArray[randIdx]] = [
			itemArray[randIdx],
			itemArray[currIdx],
		];
	}

	return itemArray;
};

const filterItems = (itemArray) => {
	const filteredArray = [];
	for (let i = 0; i < itemArray.length; i++) {
		let category = itemArray[i].category;
		if (category == "equipment" || category == "materials") {
			filteredArray.push(itemArray[i]);
		} else if (category == "creatures" && itemArray[i].edible == true) {
			filteredArray.push(itemArray[i]);
		}
	}
	return filteredArray;
};
