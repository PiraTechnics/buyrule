import Layout from "../components/Layout";
import Item from "../components/Item";

const HomePage = () => {
	return (
		<Layout
			content={
				<div className="border-2 p-10 container mx-auto">
					<img
						src="https://i.imgflip.com/829sk4.jpg"
						title="made at imgflip.com"
						alt="Is this content meme image"
					/>
					<p>Is this content?</p>
					<Item />
				</div>
			}
		></Layout>
	);
};

export default HomePage;
