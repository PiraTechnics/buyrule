import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import Item from "../src/components/Item";
import { BrowserRouter } from "react-router-dom";
//import userEvent from "@testing-library/user-event";

let dummyData = {
	image: "https://picsum.photos/id/237/200/150",
	name: "Rare Pupper",
	category: "sweet boi",
	inventory: 1,
	price: 30,
	common_locations: ["California", "Washington"],
};

/* beforeEach(() => {
  render(
    <BrowserRouter>
      <Item data={dummyData} />
    </BrowserRouter>
  );
}); */

describe("Item Component", () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Item data={dummyData} />
			</BrowserRouter>
		);
	});

	it("has an image tagged with its name", () => {
		expect(
			screen.getByRole("img", { name: "Rare Pupper" })
		).toBeInTheDocument();
		//screen.debug();
	});

	it("has a header matching its name", () => {
		expect(screen.getByRole("heading").textContent).toMatch(/Rare Pupper/i);
	});

	it("displays its category", () => {
		expect(screen.getByText("sweet boi")).toBeInTheDocument();
	});

	it("displays shipping locations", () => {
		expect(
			screen.getByText("Ships From: California, Washington")
		).toBeInTheDocument();
	});

	it("displays quantities available", () => {
		expect(screen.getByText("Available:")).toBeInTheDocument();
		expect(screen.getByText("1")).toBeInTheDocument();
	});

	it("displays the price", () => {
		expect(screen.getByText("30")).toBeInTheDocument();
		screen.debug();
	});

	it("has an 'add to cart' button", () => {
		expect(screen.getByRole("button").textContent).toMatch(/Add to Cart/i);
	});
});

describe("Shipping Location(s) display", () => {
	it("renders a single shipping location without commas", () => {
		dummyData.common_locations = ["Idaho"];
		render(
			<BrowserRouter>
				<Item data={dummyData} />
			</BrowserRouter>
		);

		expect(screen.getByText("Ships From: Idaho")).toBeInTheDocument();
	});

	it("renders empty shipping locations as 'Local Pickup Only'", () => {
		dummyData.common_locations = [];
		render(
			<BrowserRouter>
				<Item data={dummyData} />
			</BrowserRouter>
		);

		expect(screen.getByText("Local Pickup Only")).toBeInTheDocument();
	});

	it("renders null shipping locations as 'Local Pickup Only'", () => {
		dummyData.common_locations = null;
		render(
			<BrowserRouter>
				<Item data={dummyData} />
			</BrowserRouter>
		);

		expect(screen.getByText("Local Pickup Only")).toBeInTheDocument();
	});

	it("renders multiple shipping locations with comma separation", () => {
		dummyData.common_locations = ["California", "Oregon", "Washington"];
		render(
			<BrowserRouter>
				<Item data={dummyData} />
			</BrowserRouter>
		);

		expect(
			screen.getByText("Ships From: California, Oregon, Washington")
		).toBeInTheDocument();
	});
});
