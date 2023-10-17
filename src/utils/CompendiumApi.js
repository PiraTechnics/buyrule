import { useEffect, useState } from "react";

export const getItemData = () => {
	const [itemData, setItemData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			"https://botw-compendium.herokuapp.com/api/v3/compendium/entry/tree_branch",
			{ mode: "cors" }
		)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response.json();
			})
			.then((response) => setItemData(response.data))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { itemData, error, loading };
};

export const getAllByCategory = ({ category }) => {
	//valid categories: equipment, materials, creatures

	const [allEntries, setAllEntries] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(
			`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`,
			{ mode: "cors" }
		)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error("server error");
				}
				return response.json();
			})
			.then((response) => setAllEntries(response.data))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { allEntries, error, loading };
};

const getRandomEntryByCategory = ({ category }) => {
	//returns a random single entry from a given valid category
};
