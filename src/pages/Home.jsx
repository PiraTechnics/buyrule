import Layout from "../components/Layout";
import Item from "../components/Item";
import { getRandomItem } from "../utils/ApiUtils";
import { Carousel } from "flowbite-react";

const HomePage = () => {
	return (
		<Layout
			content={
				<div className="text-slate-500 text-center p-10 container mx-auto flex flex-col items-center gap-4">
					{/*<img
						src="https://i.imgflip.com/829sk4.jpg"
						title="made at imgflip.com"
						alt="Is this content meme image"
					/>
					<p className="text-black">Is this content?</p>*/}
					<h2 className="text-sky-600 text-6xl font-hylia">
						Welcome to Buy Rule
					</h2>
					<h3 className="text-lg font-semibold">
						Hyrule's one stop shop for adventuring gear, materials and
						ingredients, shipped Kingdomwide!
					</h3>
					<div className="text-xl m-8">
						Featured Items
						<Carousel className="max-w-md mt-2">
							{randomItem()}
							{randomItem()}
							{randomItem()}
							{randomItem()}
						</Carousel>
					</div>
				</div>
			}
		></Layout>
	);
};

export default HomePage;

const randomItem = () => {
	const { entry, error, loading } = getRandomItem();

	if (error) {
		return <div className="text-black text-center">Error: {error.message}</div>;
	} else if (loading) {
		return <div className="text-black text-center">Loading...</div>;
	} else {
		return <Item data={entry} />;
	}
};
