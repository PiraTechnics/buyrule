import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PaginatedItems from "../components/PaginatedItems";

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
