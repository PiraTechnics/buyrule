import logoRupee from "../assets/rupee-logo-tilted.svg";

const Brand = () => {
	return (
		<div className="text-4xl text-white tracking-logo font-hylia">
			<div className="-mb-2 flex flex-row">
				BUY
				<img className="w-8 pt-2 ms-1" src={logoRupee} alt="rupee icon" />
			</div>
			<div className="">RULE</div>
		</div>
	);
};

export default Brand;
