import React from "react";
//import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PaginatedItems from "../components/PaginatedItems";
import { getAllItems } from "../utils/ApiUtils";

const ShopPage = () => {
	const { data, error, loading } = getAllItems();

	if (error) {
		return (
			<Layout
				content={
					<div className="text-black text-center">Error: {error.message}</div>
				}
			/>
		);
	} else if (loading) {
		return (
			<Layout
				content={<div className="text-black text-center">Loading...</div>}
			/>
		);
	} else {
		//return our desired content
		//console.log(data);
		return (
			<Layout
				content={<PaginatedItems items={data} itemsPerPage={25} />}
			></Layout>
		);
	}
};

export default ShopPage;
