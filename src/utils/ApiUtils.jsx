import { useState, useEffect } from "react";
//Compendium API data fetch
export const getAllItems = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const items = loadItems();
		if (items.length) {
			//get from items if we have them
			//console.log("Loaded from Session Storage");
			//console.log(items);
			setData(items);
			setLoading(false); //ensure we don't keep loading forever ;)
		} else {
			fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/all`)
				.then((response) => {
					if (response.status >= 400) {
						throw new Error("server error");
					}
					return response;
				})
				.then((res) => res.json())
				.then((jsonResults) => {
					//Filter into sensible items, then shuffle for 'randomized' viewing
					storeItems(shuffleItems(filterAndProcessItems(jsonResults.data)));
					setData(loadItems());
					//console.log("Loaded from API...");
				})
				.catch((error) => setError(error))
				.finally(() => {
					setLoading(false);
				});
		}
	}, []);

	return { data, error, loading };
};

export const getRandomItem = () => {
	const [entry, setEntry] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const items = loadItems();
		if (items.length) {
			//get from items if we have them
			setEntry(items[Math.floor(Math.random() * items.length)]);
			setLoading(false); //ensure we don't keep loading forever ;)
			//console.log("Loaded from Session Storage");
		} else {
			fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/all`)
				.then((response) => {
					if (response.status >= 400) {
						throw new Error("server error");
					}
					return response;
				})
				.then((res) => res.json())
				.then((jsonResults) => {
					//Filter into sensible items, then shuffle for 'randomized' viewing
					storeItems(shuffleItems(filterAndProcessItems(jsonResults.data)));
					const items = loadItems() || [];
					//set entry to random from items
					setEntry(items[Math.floor(Math.random() * items.length)]);
					//console.log("Loaded from API...");
				})
				.catch((error) => setError(error))
				.finally(() => {
					setLoading(false);
				});
		}
	}, []);

	return { entry, error, loading };
};

const loadItems = () => {
	//sessionStorage.clear();
	const itemsUnparsed = sessionStorage.getItem("items") || "[]";
	const parsed = JSON.parse(itemsUnparsed);
	//console.log("loading items...");
	return parsed;
};

const storeItems = (jsonResults) => {
	sessionStorage.setItem("items", JSON.stringify(jsonResults) || "[]");
	//console.log("stored items!");
};

/* const storeFeatured = (jsonResults) => {
	sessionStorage.setItem("featuredItem", JSON.stringify(jsonResults) || "");
	console.log("stored featured ttem!");
}; */

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

const filterAndProcessItems = (itemArray) => {
	//Filters out stuff that doesn't make sense for a shop
	//Also adds randomized values and qunaities
	const filteredArray = [];
	for (let i = 0; i < itemArray.length; i++) {
		let category = itemArray[i].category;
		if (category == "equipment" || category == "materials") {
			itemArray[i].price = getRandomPrice();
			itemArray[i].inventory = getRandomQuantity();
			filteredArray.push(itemArray[i]);
		} else if (category == "creatures" && itemArray[i].edible == true) {
			itemArray[i].price = getRandomPrice();
			itemArray[i].inventory = getRandomQuantity();
			filteredArray.push(itemArray[i]);
		}
	}
	return filteredArray;
};

const getRandomPrice = () => {
	return Math.floor(Math.random() * 100);
};

const getRandomQuantity = () => {
	return Math.floor(Math.random() * 10) + 1;
};
