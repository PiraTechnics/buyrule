import Layout from "../components/Layout";
import Item from "../components/Item";

const ShopPage = () => {
	return (
		<Layout
			content={
				<div className="border-2 p-10 container mx-auto">
					<p>This is the Shop!</p>
					<Item />
					<Item />
				</div>
			}
		></Layout>
	);
};

export default ShopPage;
