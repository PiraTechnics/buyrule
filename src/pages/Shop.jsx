import Layout from "../components/Layout";
import Item from "../components/Item";
import { getAllItems } from "../utils/CompendiumApi";

const ShopPage = () => {
	console.log(getAllItems());

	return (
		<Layout
			content={
				<div className="border-2 rounded p-1 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-4">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			}
		></Layout>
	);
};

export default ShopPage;
